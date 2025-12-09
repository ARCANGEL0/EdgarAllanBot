export default async function translate(text, targetLang) {
    try {
        console.log('Translating text:', text);

        // Encode parameters
        const encodedText = encodeURIComponent(text);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodedText}`;

        console.log('Fetch URL:', url);

        const res = await fetch(url);
        console.log('Response status:', res.status);

        const data = await res.json();
        console.log('Response JSON:', data);

        // Extract translated text
        const translatedText = data[0].map(item => item[0]).join('');
        console.log('Translated text:', translatedText);

        return translatedText;

    } catch (err) {
        console.error('Translation error:', err);
        return null;
    }
}
