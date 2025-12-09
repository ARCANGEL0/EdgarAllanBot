
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import {FormData, Blob} from 'formdata-node';
import {JSDOM} from 'jsdom';
/**
 *
 * @param {Buffer|String} source
 */
async function webp2mp4(source) {
  const form = new FormData();
  const isUrl = typeof source === 'string' && /https?:\/\//.test(source);
  const blob = !isUrl && new Blob([source.toArrayBuffer()]);
  form.append('new-image-url', isUrl ? blob : '');
  form.append('new-image', isUrl ? '' : blob, 'image.webp');
  const res = await fetch('https://s6.ezgif.com/webp-to-mp4', {
    method: 'POST',
    body: form,
  });
  const html = await res.text();
  const {document} = new JSDOM(html).window;
  const form2 = new FormData();
  const obj = {};
  for (const input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value;
    form2.append(input.name, input.value);
  }
  const res2 = await fetch('https://ezgif.com/webp-to-mp4/' + obj.file, {
    method: 'POST',
    body: form2,
  });
  const html2 = await res2.text();
  const {document: document2} = new JSDOM(html2).window;
  return new URL(document2.querySelector('div#output > p.outfile > video > source').src, res2.url).toString();
}

async function webp2png(source) {
  const form = new FormData();
  const isUrl = typeof source === 'string' && /https?:\/\//.test(source);
  const blob = !isUrl && new Blob([source.toArrayBuffer()]);
  form.append('new-image-url', isUrl ? blob : '');
  form.append('new-image', isUrl ? '' : blob, 'image.webp');
  const res = await fetch('https://s6.ezgif.com/webp-to-png', {
    method: 'POST',
    body: form,
  });
  const html = await res.text();
  const {document} = new JSDOM(html).window;
  const form2 = new FormData();
  const obj = {};
  for (const input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value;
    form2.append(input.name, input.value);
  }
  const res2 = await fetch('https://ezgif.com/webp-to-png/' + obj.file, {
    method: 'POST',
    body: form2,
  });
  const html2 = await res2.text();
  const {document: document2} = new JSDOM(html2).window;
  return new URL(document2.querySelector('div#output > p.outfile > img').src, res2.url).toString();
}

export {
  webp2mp4,
  webp2png,
};
