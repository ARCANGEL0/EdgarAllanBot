// sumPdf.js
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import translate from "./translate.js"; // seu módulo de tradução

/**
 * Função genérica para resumir PDFs usando PDFRest API
 * @param {string} pdfPath - caminho para o PDF
 * @param {string} language - idioma da tradução (ex: 'pt')
 */
async function sumPDF(pdfPath, language = "pt") {

const data = new FormData();
data.append('file', fs.createReadStream(pdfPath));
data.append('format', 'essay');
data.append('style', 'educator');
data.append('length', 'long');

const options = {
  method: 'POST',
  url: 'https://ai-pdf-document-summarize.p.rapidapi.com/summarize',
  headers: {
    'x-rapidapi-key': '5d5bc622a0msh2ccc53929ee80c5p1d5115jsn48fc9f744a85',
    'x-rapidapi-host': 'ai-pdf-document-summarize.p.rapidapi.com'
  },
  data: data
};

try {
	const response = await axios.request(options);
    const summary = response.data.summary;
   let prompt=`Você receberá um ou mais resumos extensos, possivelmente repetitivos, referentes a qualquer área do conhecimento (ex.: matemática, ciências, história, filosofia, literatura, romance, técnica ou multidisciplinar).

Sua tarefa é condensar todo o conteúdo em um resumo final mais curto, coerente e informativamente denso, preservando o sentido essencial do texto original, independentemente do tema.

REGRAS ESTRUTURAIS OBRIGATÓRIAS

O resumo final deve conter no mínimo 3 e no máximo 10 parágrafos.

A escrita deve ser clara, objetiva e fiel ao conteúdo, sem simplificações excessivas.

Elimine redundâncias, reorganizando ideias equivalentes.

Priorize máxima informação no mínimo de palavras, sem perda de precisão.

ORGANIZAÇÃO E FORMATAÇÃO

Use os recursos abaixo apenas quando forem realmente úteis para compreensão ou memorização:

Bullet lists para:

Conceitos centrais

Pontos-chave

Etapas, classificações ou distinções importantes

Key points para memorização, com termos relevantes em negrito.

Se o conteúdo for técnico (ex.: matemática, física, programação):

Extraia fórmulas, definições operacionais, leis ou relações fundamentais, quando existirem.

Se for narrativo (ex.: romance, literatura, história):

Sintetize enredo, temas centrais, conflitos, personagens ou eventos, sem detalhamento excessivo.

CRITÉRIOS DE SÍNTESE

Identifique e preserve:

O núcleo temático do texto

Os conceitos ou eventos estruturantes

As relações causais ou lógicas (quando existirem)

Elimine exemplos supérfluos, mantendo apenas os estruturalmente essenciais.

Não reproduza enumerações longas se puder generalizá-las sem perda conceitual.

FORMATO FINAL ESPERADO

Texto contínuo, bem articulado e conciso

Inserção pontual de listas apenas quando aumentarem clareza e retenção

Conteúdo compacto, consistente e de alta densidade informacional`
 
    const newMessage = [
      
      { role: "user", content: `${prompt}
      Agora, por favor faça a sumarizacao do seguinte texto, seguindo as regras:  ${summary}
      ${language == 'pt' ? 'ATENÇÃO, FAÇA EM PORTUGUÊS' : 'IMPORTANT! PLEASE MAKE IN ENGLISH'}
      
    
    `}]
    
  

    try { 
        console.log("🌒 Iniciando sumarização do documento... API #1");
        let prompts = `${prompt} Agora, por favor faça a sumarizacao do seguinte texto, seguindo as regras:  ${summary} ${language == 'pt' ? 'ATENÇÃO, FAÇA EM PORTUGUÊS' : 'IMPORTANT! PLEASE MAKE IN ENGLISH'}`
        let firstURL = `https://anabot.my.id/api/ai/deepseek?prompt=${prompts}&search_enabled=true&thinking_enabled=false&apikey=freeApikey`
        console.log(firstURL)
        let getDATA = await fetch(firstURL)
        let getJSON = await getDATA.json() 
        console.log(getJSON)
        let assistantResponse = getJSON.data.result.message
        const newSystemMessage = { role: "system", content: assistantResponse };    
          let cleanedResponse = assistantResponse.replace(/>?\s*\[0\][\s\S]*/g, '').trim();

           return cleanedResponse
    }
    catch (e) { 
console.log("API #1 falhou, tentando API #2")
console.log(e)
    try {
        console.log("🌒 Iniciando sumarização do documento... API #2");

        const response = await fetch("http://129.146.165.179/personality", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conversation: newMessage,
             }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        
     
const raw = await response.text();
        console.log(raw)
        const jsonStart = raw.indexOf('{');
        if (jsonStart === -1) throw new Error('No JSON object found in response');
        const jsonText = raw.slice(jsonStart);
        let data;
        try {
          data = JSON.parse(jsonText);
        } catch (err) {
          throw new Error('Failed to parse JSON from response: ' + err.message);
        }
        
        const cleanedResponse = data.response; 
       
  return cleanedResponse
    } catch (error) {
        console.log('erro !!!!! ')
        console.log('///////////////// ')
        console.log(error)
    
    }
     
    }




} catch (error) {
	console.error(error);
}
}

export default sumPDF;
