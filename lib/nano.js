import fetch from 'node-fetch' // lib/nano.js

async function imageEdit(prompt, imageBase64) {
  const response = await fetch("http://129.146.165.179/imgEdit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
      image: imageBase64,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.response;
}

export default imageEdit;
