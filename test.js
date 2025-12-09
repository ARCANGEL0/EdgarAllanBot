
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from 'fs'
import path, { dirname } from 'path'
import assert from 'assert'
import { spawn } from 'child_process'
import syntaxError from 'syntax-error'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(__dirname)
let folders = ['.', ...Object.keys(require(path.join(__dirname, './package.json')).directories)]
let files = []
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter(v => v.endsWith('.js')))
files.push(path.resolve(path.join(folder, file)))
for (let file of files) {
if (file == __filename) continue
console.error('Checking', file)
const error = syntaxError(fs.readFileSync(file, 'utf8'), file, {
sourceType: 'module',
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true
})
if (error) assert.ok(error.length < 1, file + '\n\n' + error)
assert.ok(file)
console.log('Done', file)
}
