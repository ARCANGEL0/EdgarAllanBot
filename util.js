
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const _cheerio = require( 'cheerio' )

const util ={}
module.exports = util
util._getScripts = _getScripts
util._findLine = _findLine
util._between = _between

function _getScripts ( text ) {
  // match all contents within html script tags
  const $ = _cheerio.load( text )
  const scripts = $( 'script' )

  let buffer = ''

  // combine all scripts
  for ( let i = 0; i < scripts.length; i++ ) {
    const el = scripts[ i ]
    const child = el && el.children[ 0 ]
    const data = child && child.data
    if ( data ) {
      buffer += data + '\n'
    }
  }

  return buffer
}

function _findLine ( regex, text ) {
  const cache = _findLine.cache || {}
  _findLine.cache = cache

  cache[ text ] = cache[ text ] || {}

  const lines = cache[ text ].lines || text.split( '\n' )
  cache[ text ].lines = lines

  clearTimeout( cache[ text ].timeout )
  cache[ text ].timeout = setTimeout( function () {
    delete cache[ text ]
  }, 100 )

  for ( let i = 0; i < lines.length; i++ ) {
    const line = lines[ i ]
    if ( regex.test( line ) ) return line
  }

  return ''
}

function _between ( text, start, end ) {
  let i = text.indexOf( start )
  let j = text.lastIndexOf( end )
  if ( i < 0 ) return ''
  if ( j < 0 ) return ''
  return text.slice( i, j + 1 )
}
