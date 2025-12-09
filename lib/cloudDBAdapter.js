
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import got from 'got';

const stringify = (obj) => JSON.stringify(obj, null, 2);
const parse = (str) => JSON.parse(str, (_, v) => {
  if (
    v !== null &&
        typeof v === 'object' &&
        'type' in v &&
        v.type === 'Buffer' &&
        'data' in v &&
        Array.isArray(v.data)) {
    return Buffer.from(v.data);
  }
  return v;
});
class CloudDBAdapter {
  constructor(url, {
    serialize = stringify,
    deserialize = parse,
    fetchOptions = {},
  } = {}) {
    this.url = url;
    this.serialize = serialize;
    this.deserialize = deserialize;
    this.fetchOptions = fetchOptions;
  }

  async read() {
    try {
      const res = await got(this.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json;q=0.9,text/plain',
        },
        ...this.fetchOptions,
      });
      if (res.statusCode !== 200) throw res.statusMessage;
      return this.deserialize(res.body);
    } catch (e) {
      return null;
    }
  }

  async write(obj) {
    const res = await got(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.fetchOptions,
      body: this.serialize(obj),
    });
    if (res.statusCode !== 200) throw res.statusMessage;
    return res.body;
  }
}

export default CloudDBAdapter;
