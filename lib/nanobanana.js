import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import fs from "fs";

function gerarHeadersIpFalso() {
  const ipv4 = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  return {
    "X-Forwarded-For": ipv4,
    "X-Originating-IP": ipv4,
    "X-Remote-IP": ipv4,
    "X-Remote-Addr": ipv4,
    "X-Host": ipv4,
    "X-Forwarded-Host": ipv4,
    "X-Connecting-IP": ipv4,
    "Client-IP": ipv4,
    "X-Client-IP": ipv4,
    "CF-Connecting-IP": ipv4,
    "Fastly-Client-IP": ipv4,
    "True-Client-IP": ipv4,
    "X-Real-IP": ipv4,
    Forwarded: `for=${ipv4};proto=http;by=${ipv4}`,
    "X-Cluster-Client-IP": ipv4,
    Via: `1.1 ${ipv4}`,
    Fgsi: `ap-${ipv4}`,
    "X-ProxyUser-IP": ipv4,
    "X-Forwarded-For-Original": ipv4,
    "X-Forwarded": ipv4,
    "X-Original-Forwarded-For": ipv4,
    "X-Spoofed-IP": ipv4,
  };
}

class NanoBananaClient {
  constructor() {
    this.jar = new CookieJar();
    this.api = wrapper(
      axios.create({
        baseURL: "https://nanobanana.ai",
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "content-type": "application/json",
          "origin": "https://nanobanana.ai",
          "referer": "https://nanobanana.ai/",
          "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
          ...gerarHeadersIpFalso(),
        },
        jar: this.jar,
        withCredentials: true,
      })
    );
  }

  async iniciarSessao() {
    const res = await this.api.get("/api/auth/session");
    return res.data;
  }

  async obterUrlUpload(file, filename = "upload.jpg") {
    const fileSize = Buffer.isBuffer(file) ? file.length : file.size;
    const res = await this.api.post("/api/get-upload-url", {
      fileName: filename,
      contentType: "image/jpeg",
      fileSize: fileSize,
    });
    return { ...res.data, file };
  }

  async enviarArquivo(uploadUrl, file, contentType = "image/jpeg") {
    await axios.put(uploadUrl, file, { headers: { "content-type": contentType } });
  }

  async gerarImagem(prompt, styleId, publicUrl) {
    const res = await this.api.post("/api/generate-image", {
      prompt,
      styleId,
      mode: "image",
      imageUrl: publicUrl,
      imageUrls: [publicUrl],
    });
    return res.data;
  }

  async verificarStatus(taskId) {
    const res = await this.api.get("/api/generate-image/status", { params: { taskId } });
    return res.data;
  }

  async esperarResultado(taskId, pollInterval = 5000, pollTimeout = 2 * 60 * 1000) {
    const inicio = Date.now();
    return new Promise((resolve, reject) => {
      const timer = setInterval(async () => {
        try {
          if (Date.now() - inicio > pollTimeout) {
            clearInterval(timer);
            reject(new Error("⏳ O destino sombrio demorou demais..."));
            return;
          }
          const status = await this.verificarStatus(taskId);
          if (status.status === "completed") {
            clearInterval(timer);
            resolve(status);
          } else if (status.status === "failed") {
            clearInterval(timer);
            reject(new Error("❌ O abismo devorou a criação..."));
          }
        } catch (err) {
          clearInterval(timer);
          reject(new Error("❌ Lamento, um erro macabro ocorreu: " + err.message));
        }
      }, pollInterval);
    });
  }
}

export async function img2img(imageBuffer, prompt, pollInterval = 5000, pollTimeout = 2 * 60 * 1000) {
  try {
    const client = new NanoBananaClient();
    await client.iniciarSessao();
    const filename = `img_${Date.now()}.jpg`;
    const { uploadUrl, publicUrl } = await client.obterUrlUpload(imageBuffer, filename);
    await client.enviarArquivo(uploadUrl, imageBuffer);
    const task = await client.gerarImagem(prompt, "realistic", publicUrl);
    if (!task.taskId) throw new Error("❌ O negrume recusou a tarefa...");
    const result = await client.esperarResultado(task.taskId, pollInterval, pollTimeout);
    const resultUrl = result.result?.url || result.imageUrl || result.url;
    if (!resultUrl) throw new Error("⚠️ O espectro retornou sem imagem...");
    const resultImg = await axios.get(resultUrl, { responseType: "arraybuffer", headers: { "accept-encoding": "gzip", "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36" } });
    return Buffer.from(resultImg.data);
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      if (status === 429) throw new Error("❌ Muitos pedidos! O vazio observa...");
      else if (status === 401 || status === 403) throw new Error("❌ A porta foi trancada pelo guardião sombrio...");
      else throw new Error(`❌ O servidor sussurrou um enigma (${status}): ${JSON.stringify(data)}`);
    } else throw error;
  }
}

export async function img2imgFromFile(filePath, prompt, pollInterval = 5000, pollTimeout = 2 * 60 * 1000) {
  const imageBuffer = fs.readFileSync(filePath);
  return img2img(imageBuffer, prompt, pollInterval, pollTimeout);
}
