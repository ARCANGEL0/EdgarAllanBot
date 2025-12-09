import fetch from 'node-fetch';
import { fileTypeFromBuffer } from 'file-type';
import { FormData, File } from 'formdata-node';

/**
 * Upload image buffer to catbox.moe or fallback to 0x0.st (free, no auth) and telegraph
 * @param {Buffer} buffer
 * @returns {Promise<string>} URL of uploaded image
 */
async function uploadImage(buffer) {
    const fileType = await fileTypeFromBuffer(buffer);
    const { ext, mime } = fileType || { ext: 'png', mime: 'image/png' };

    try {
        // --------------------------
        // 1️⃣ Upload to Catbox (no auth)
        // --------------------------
        const catboxForm = new FormData();
        catboxForm.set('reqtype', 'fileupload');
        catboxForm.set('userhash', '');
        catboxForm.set('fileToUpload', new File([buffer], `upload.${ext}`, { type: mime }));

        const catboxRes = await fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: catboxForm
        });

        const catboxText = await catboxRes.text();
        if (catboxRes.ok && catboxText.startsWith('https://')) {
            return catboxText.trim();
        }

        // --------------------------
        // 2️⃣ Fallback – 0x0.st (no auth)
        // --------------------------
        // 0x0.st accepts multipart/form-data with field name "file" and returns a plain text URL.
        const zeroForm = new FormData();
        zeroForm.set('file', new File([buffer], `upload.${ext}`, { type: mime }));

        const zeroRes = await fetch('https://0x0.st', {
            method: 'POST',
            body: zeroForm
        });

        const zeroText = await zeroRes.text();
        if (zeroRes.ok && zeroText.trim().startsWith('http')) {
            return zeroText.trim();
        }

        // --------------------------
        // 3️⃣ Fallback – Telegraph (no auth)
        // --------------------------
        const teleForm = new FormData();
        teleForm.set('file', new File([buffer], `upload.${ext}`, { type: mime }));

        const teleRes = await fetch('https://telegra.ph/upload', {
            method: 'POST',
            body: teleForm
        });

        const teleJson = await teleRes.json();
        if (teleJson[0]?.src) return 'https://telegra.ph' + teleJson[0].src;

        throw new Error('Upload falhou nos serviços disponíveis.');
    } catch (err) {
        console.error('Upload error:', err);
        throw err;
    }
}

export default uploadImage;
