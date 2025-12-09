import fetch from 'node-fetch';

/**
 * Summarize a YouTube video
 */
async function sumYoutube(link) {
  console.log("Summarizing YouTube Video:", link);

  const response = await fetch("http://129.146.165.179/sumVideo", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ video: link }),
  });

  // Get raw text (includes log lines + JSON)
  let rawText = await response.text();
  console.log("==================")
console.log(rawText)

console.log("==================")
  // Extract the first JSON object in the text
  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON found in response");

  let parsed;
  try {
    parsed = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("Failed to parse JSON from response:", err);
    throw err;
  }

  const rawResponse = parsed.response;
  if (!rawResponse) throw new Error("No 'response' field in API output");

  // Extract ONLY the text between dashed separators
  const match = rawResponse.match(/[-]{2,}\r?\n([\s\S]*?)\r?\n[-]{2,}/);
  if (!match) {
    throw new Error("Could not extract summary block");
  }

  const summary = match[1].trim();
  console.log("Extracted summary:\n", summary);

  return summary;
}

export default sumYoutube;
