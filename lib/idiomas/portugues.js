
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const idiomaX = () => { return 'pt' } //Português
 
//AVISOS DE MENSAGEM
const smsAvisoRG = () => { return `` }
const smsAvisoAG = () => { return `` }
const smsAvisoIIG = () => { return `` }
const smsAvisoFG = () => { return `` }
const smsAvisoMG = () => { return `` }
const smsAvisoEEG = () => { return `` }
const smsAvisoEG = () => { return `` }
const GOTHIC_BASE = (reason, message) => {
    // Usamos a 'Razão' como título para clareza
    return `⌠༺${reason} ╮\n\n📜 ${message}\n\n╰──────────────╯`
}

//BOT NUMBER (Criador)
const smsRowner = () => { 
    const message = `Apenas o **Criador** possui esta autoridade deste comando.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝖔 𝖉𝖔𝖓𝖔`, message)
}

//OWNER (Dono)
const smsOwner = () => { 
    const message = `Esta função é restrita ao **Criador**.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝖔 𝖉𝖔𝖓𝖔`, message)
}

//MODERATORS (Moderadores)
const smsMods = () => { 
    const message = `O comando exige uma **Autoridade de Moderador**. Vossa patente não alcança esta cripta.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝖆𝖉𝖒𝖎𝖓`, message)
}

//PREMIUM USERS (Premium)
const smsPremium = () => { 
    const message = `Esta é uma função reservada aos **Membros Premium**. É preciso ter o Tributo para afastar o banimento do acesso.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝖕𝖗𝖊𝖒𝖎𝖚𝖒❗`, message)
}

//FOR GROUPS (Apenas Grupos)
const smsGroup = () => { 
    const message = `Este comando deve ser invocado em um **Grupo**. Tua solidão não é permitida a execução do comando.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝕲𝖗𝖚𝖕𝖔𝖘`, message)
}

//TO THE PRIVATE (Apenas Privado)
const smsPrivate = () => { 
    const message = `O comando deve ser proferido em **Conversa Privada**. O sussurro deve ser mantido em segredo, longe da vista pública deste grupo.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝐏𝐯`, message)
}

//ADMINS (Administradores do Grupo)
const smsAdmin = () => { 
    const message = `O poder deste comando pertence aos **Administradores do Grupo**. Vós não deteis esta Autoridade.`
    return GOTHIC_BASE(`𝕬𝖕𝖊𝖓𝖆𝖘 𝖆𝖉𝖒𝖎𝖓`, message)
}

//BOT WITH ADMIN (Bot Admin)
const smsBotAdmin = () => { 
    const message = `Eu não possuo **Autoridade de Administrador** no Grupo. Não me concederam as chaves para cumprir a vossa vontade.`
    return GOTHIC_BASE(`𝕾𝖊𝖒 𝖆𝖉𝖒𝖎𝖓❗`, message)
}

//VERIFY (Registro)
const smsUnreg = () => { 
    const message = `Sois um Vulto Desconhecido. É preciso ter o registro escrito nos Arquivos.. *Usai \`.registrar\` antes de prosseguir.`
    return GOTHIC_BASE(`𝕾𝖊𝖒 𝖗𝖊𝖌𝖎𝖘𝖙𝖗𝖔`, message)
}

//RESTRICT COMMAND (Comando Restrito)
const smsRestrict = () => { 
    const message = `Este comando está restrito ao Grupo. Vossa condição não permite invocá-lo aqui.`
    return GOTHIC_BASE(`𝕽𝖊𝖘𝖙𝖗𝖎𝖙𝖔❗`, message)
}
    //LIST MENU
const smsTime = () => { return `O Relógio das Sombras`}
const smsUptime = () => { return `A Vigília Eterna`}
const smsVersion = () => { return `O Testamento de ${global.packname}`}
const smsTotalUsers = () => { return `Almas Registradas`}
const smsMode = () => { return `Modo de Existência`}
const smsModePublic = () => { return `A VASTIDÃO`}
const smsModePrivate = () => { return `A CRIPTA SECRETA`}
const smsBanChats = () => { return `As Tumbas Silenciadas`}
const smsBanUsers = () => { return `Os Espíritos Exilados`}
const smsPareja = () => { return `União Fatal`}
const smsResultPareja = () => { return `Solidão Eterna`}
const smsSaludo = () => { return `SAUDAÇÕES! BEM-VINDOS`}
const smsDia = () => { return `O Pálido Alvorecer`}
const smsTarde = () => { return `O Abraço do Crepúsculo`}
const smsTarde2 = () => { return `O Murmúrio da Noite`}
const smsNoche = () => { return `A Meia-Noite Lúgubre`}
const smsListaMenu = () => { return `📜 O GRANDE MANUSCRITO 📜`}
const smsLista1 = () => { return `🕯️ A LORE DE EDGAR`}
const smsLista2 = () => { return `🗝️ O ALQUIMISTA (CRIADOR)`}
const smsLista3 = () => { return `🪙 OFERENDAS & TRIBUTO`}
const smsLista4 = () => { return `💨 CELERIDADE DA SOMBRA`}
const smsLista5 = () => { return `📖 GUIA DAS ESCRITURAS`}
const smsLista6 = () => { return `🌌 O VÓRTICE DE COMANDOS`}
const smsLista7 = () => { return `🕊️ O CHAMADO DE EDGAR`}
const smsLista8 = () => { return `🔗 O VOTO DE LEALDADE`}
const smsLista9 = () => { return `⚖️ O PACTO ETERNO`}
const smsLista10 = () => { return `⚔️ JORNADAS E O OLIMPO`}
const smsLista11 = () => { return `👑 O ESCROL DOS MONARCAS`}
const smsLista12 = () => { return `💎 OS ESCOLHIDOS DA CRIPTA`}
const smsLista13 = () => { return `✨ O TRIBUTO DE ACESSO`}
const smsLista14 = () => { return `🧭 CAMINHOS DO FADO`}
const smsLista15 = () => { return `🌑 OS ARCANOS MÍSTICOS`}
const smsLista16 = () => { return `🛍️ O MERCADO DO CORVO`}
const smsLista17 = () => { return `📦 O RELICÁRIO`}
const smsLista18 = () => { return `🖼️ A GALERIA DE VISÕES`}
const smsLista19 = () => { return `📥 RECLAMAR OS ECOS`}
const smsLista20 = () => { return `🔎 ABRIR A NÉVOA`}
const smsLista21 = () => { return `⚛️ RITOS DE TRANSMUTAÇÃO`}
const smsLista22 = () => { return `🎶 A VOZ DO FANTASMA`}
const smsLista22_1 = () => { return `🛠️ O ARSENAL DO FERREIRO`}
const smsLista23 = () => { return `😂 A ZOMBARIA DO FADO`}
const smsLista24 = () => { return `🎲 O CARNAVAL DA LOUCURA`}
const smsLista25 = () => { return `🗣️ OS SUSSURROS DOS MORTOS`}
const smsLista26 = () => { return `🎭 MÁSCARAS E VÉUS`}
const smsLista27 = () => { return `💫 RUNAS E SÍGILOS`}
const smsLista28 = () => { return `🌄 OS ESCROLOS DA HERÁLDICA`}
const smsLista29 = () => { return `🏮 AS SOMBRAS DO ORIENTE`}
const smsLista30 = () => { return `🥀 OS SEGREDOS CARNAIS (+18)`}
const smsLista31 = () => { return `⚙️ O NÚCLEO DO MECANISMO`}
const smsLista32 = () => { return `🛡️ O EDITO DO COVIL`}
const smsLista33 = () => { return `📄 CATÁLOGO DAS DORES`}
const smsLista34 = () => { return `🛠️ O MECANISMO DO FADO`}
const smsLista35 = () => { return `👑 O SANTUÁRIO DO MONARCA`}
//main.js
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
const smsWelcome = () => { return `⎔⎓─────────────────
┃  𝑺𝒂𝒖𝒅𝒂𝒄𝒐𝒆𝒔, @user
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _${pickRandom([
    "Bem-vindo, alma errante, ao reino das sombras eternas.",
    "Entre, espírito solitário, onde o tempo é apenas um eco distante.",
    "Bem-vindo, viajante das trevas, ao abismo que sussurra segredos esquecidos.",
    "A noite te chama, peregrino, para dançar com as almas perdidas.",
    "Adentre, alma perdida, e encontre repouso nas profundezas do desconhecido.",
    "Bem-vindo ao véu da escuridão, onde a luz é apenas uma memória desvanecida.",
    "Entre, espectro inquieto, e junte-se ao coro de lamentos sem fim.",
    "Bem-vindo, filho do crepúsculo, onde o destino tece sua teia sombria.",
    "A escuridão te acolhe, alma errante, em seus braços frios e infinitos.",
    "Bem-vindo, viajante do abismo, onde os sonhos se transformam em pesadelos eternos."
])}_
┃ ✇𝗟𝗲𝗶𝗮 𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗰𝗮𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼.
┃ 
┃ @desc
╰─...⎔⎓──────────────`}
const smsBye = () => { return `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ @motivo..\n${pickRandom(["Na sombra da noite, meu adeus ecoa como um sussurro gélido.",
  "Parto com as sombras, onde o adeus se entrelaça ao manto da eternidade.✒️📜",
  "Ao crepúsculo, deixo-te com o eco melancólico de meu até logo.🥀",
  "Na penumbra, minha despedida dança como a última nota de uma triste melodia.🕯️💀",
  "No silêncio do crepitar das velas, sigo adiante, deixando-te com um derradeiro adeus.✒️📜"])}*🐦‍⬛ \n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*`}
const smsSpromote = () => { return '*@user AGORA VOCÊ É ADMINISTRADOR NESTE GRUPO!!*'}
const smsSdemote = () => { return '*@user NÃO É MAIS ADMINISTRADOR NESTE GRUPO!!*'}
const smsSdesc = () => { return '*A NOVA DESCRIÇÃO DO GRUPO É:*\n\n@desc'}
const smsSsubject = () => { return '*O NOVO NOME DO GRUPO É:*\n\n@subject'}
const smsSicon = () => { return '*A FOTO DESTE GRUPO FOI ALTERADA!!*'}
const smsSrevoke = () => { return '*AGORA ESTE É O NOVO LINK DESTE GRUPO!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONEXÃO ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ CONEXÃO BEM-SUCEDIDA NO WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return ` CARREGANDO...\n`}
const smsCodigoQR = () => { return `\n✅ ESCANEAR O CÓDIGO QR EXPIRA EM 45 SEGUNDOS ✅`}
const smsConOFF = () => { return `\n⚠️ SEM CONEXÃO, APAGUE A PASTA ${global.authFile} E LEIA O CÓDIGO QR ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMÍDIA 🟢\n│→ ARQUIVOS DA PASTA TMP EXCLUÍDOS\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│→ SESSÕES NÃO ESSENCIAIS ELIMINADAS\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARQUIVOS 🟠\n│→ ARQUIVOS RESIDUAIS EXCLUÍDOS\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 elliot 🟡\n│→ NADA A DELETAR \n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ elliot ⚪\n│→ ARQUIVOS NÃO ESSENCIAIS EXCLUÍDOS\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 elliot 🔴\n│→ UM ERRO OCORREU\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARQUIVO 🟣\n│→`} 
const smspurgeOldFiles2 = () => { return `EXCLUIR COM SUCESSO\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARQUIVO 🔴\n│→`} 
const smspurgeOldFiles4 = () => { return `FALHA AO EXCLUIR\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`}
const reconnectMsg = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️ CONEXÃO FECHADA, RECONECTANDO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`}
const connFail = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ PERDEU A CONEXÃO COM O SERVIDOR, RECONECTANDO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`}
const overlapCon = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️ CONEXÃO SUBSTITUÍDA, OUTRA NOVA SESSÃO FOI ABERTA, FECHE A SESSÃO ATUAL PRIMEIRO.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`}
const smsConnected = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ CONECTANDO AO SERVIDOR...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`}
const smsExpired = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ A CONEXÃO EXPIROU, RECONECTANDO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`}
const smsFailed = (reason, connection) => { return `\n⚠️❗ MOTIVO DE DESCONEXÃO DESCONHECIDO: ${reason || ''} >> ${connection || ''}`}
const smsMainBot = () => { return "'main.js' FOI ATUALIZADO COM SUCESSO"}

//_allantilink.js
const smsTextoYT = () => { return '⑊ 𝔈𝔡𝔤𝔞𝔯 𝔄𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 '}
const funDesativado = () => { return '🌒 𝕯𝖊𝖘𝖆𝖙𝖎𝖛𝖆𝖉𝖔'}
const funAtivado = () => { return '🌕 𝕬𝖙𝖎𝖛𝖆𝖉𝖔 '}
const remTik = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑖𝑘𝑇𝑜𝑘  𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const remYt = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑌𝑜𝑢𝑡𝑢𝑏𝑒 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const remTeleg = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚  𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const remFb = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const remIg = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const remTw = () => { return `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑤𝑖𝑡𝑡𝑒𝑟 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`}
const smsAllAdmin = () => { return `*PRECISO SER ADMINISTRADOR PARA BANIR INTRUSOS*`}
const smsSoloOwner = () => { return `*MEU CRIADOR DEVE DESPERTAR ESTA FUNÇÃO*\n*#on restrict*`}

//handle r.js (Mensagens de Erro/Handler)
const smsCont1 = () => { return `*🔴 FALHA NO RITO 🔴*`}
const smsCont2 = () => { return `*⚠️ ESCRITURA:*`}
const smsCont3 = () => { return `*⚠️ ALMA:*`}
const smsCont4 = () => { return `*⚠️ DECRETO:*`}
const smsCont5 = () => { return `*⚠️ MALDIÇÃO:*`} // Usando "Maldição" para "Erro"
const smsCont6 = () => { return `*🪶 Algo ocorreu de forma desastrosa com o decreto.
Use .report para relatar este fenômeno ao meu criador*`}
const smsCont7 = () => { return `${global.langTOGGLE['smsAvisoAG']()}*DIAMANTES AUSENTES!! 💎 PODEIS IR AO MERCADO COM O DECRETO*`}
const smsCont8 = () => { return ` *DIAMANTE 💎 CONSUMIDO*`}
const smsCont9 = () => { return `${global.langTOGGLE['smsAvisoAG']()}*O NÍVEL REQUERIDO É ➡️*`}
const smsCont10 = () => { return `*PARA INVOCAR ESTE DECRETO. SEU NÍVEL ATUAL É ➡️*`}
const smsCont11 = () => { return `*ASCENDER COM O DECRETO*`}
const smsCont12 = () => { return `UMA VASTA CONGREGAÇÃO!! 😼`} 
const smsCont13 = () => { return `UMA ALMA SE JUNTOU AO COVIL!! 🥳`}
const smsCont14 = () => { return `UM ESPÍRITO PARTIU!! 🧐`}
const smsCont15 = () => { return `*EIS*`}
const smsCont16 = () => { return `*AS CHAMADAS DE VÍDEO* 📲`}
const smsCont17 = () => { return `─┅──┅❖ ❖─┅──┅`}
const smsCont18 = () => { return `\n🌒 Receio que chamadas são proibidas de ecoar nos sons de minha melancolia. Portanto, sereis privado de interação de meu contato e banido para os vales da inexistência. 🚫
Caso indague que o bloqueio seja acidental, contate meu criador`}
const smsCont19 = () => { return `─┅──┅❖ ❖─┅──┅`}
const smsCont20 = () => { return `༚ᢀ `}
const smsCont21 = () => { return `༚ᢀ Enviando a missiva excluída...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*ESTE NÚMERO*`}
const smsInt2 = () => { return `*NÃO É PERMITIDO NESTE COVIL!*`}
const smsAdwa = () => { return `${global.langTOGGLE['smsAvisoEG']()}*COMO VOCÊ É ADMINISTRADOR NESTE GRUPO, VOCÊ NÃO SERÁ REMOVIDO*`}
const remWat = () => { return `${langTOGGLE['smsAvisoAG']()}*UM LINK DE WHATSAPP BANIDO FOI DETECTADO NESTE GRUPO*\n\n*SERÁ EXCLUIDO ⚠️*`}

//_antilink2.js
const remWatt = () => { return `${langTOGGLE['smsAvisoAG']()}UM LINK PROIBIDO CONTENDO HTTPS FOI DETECTADO NESTE GRUPO\n\nSERÁ EXCLUIDO ⚠️`}

//_antispam.js
const  antiSpamMsg = () => { return `🤨 NÃO FAÇA SPAM, VOCÊ NÃO PODERÁ USAR ${global.packname} POR ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const  antiSpamMsg2 = () => { return `FOI BANIDO DEPOIS ${60000 / 1000 - 59} MINUTO. POR FAVOR NÃO SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Erro
const smsMalError = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`OCORREU UM ERRO INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`SURGIU UMA INCONVENIÊNCIA. TENTE NOVAMENTE.\`\`\``}
const smsMalError3 = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`ALGO DEU ERRADO, DENUNCIE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `🕯️𝔄𝔱𝔢𝔫𝔱𝔢-𝔰𝔢 𝔞 𝔰𝔲𝔞𝔰 𝔭𝔞𝔩𝔞𝔳𝔯𝔞𝔰, 𝔪𝔞𝔫𝔱𝔢𝔫𝔥𝔞 𝔯𝔢𝔰𝔭𝔢𝔦𝔱𝔬 𝔬𝔲 𝔰𝔢𝔯𝔞 𝔡𝔢𝔰𝔬𝔩𝔞𝔡𝔬 𝔫𝔞𝔰 𝔰𝔬𝔪𝔟𝔯𝔞𝔰`}
const smsToxic2 = () => { return `𝔑𝔬 𝔢𝔠𝔬 𝔡𝔬𝔰 𝔠𝔞𝔪𝔦𝔫𝔥𝔬𝔰 𝔭𝔢𝔯𝔡𝔦𝔡𝔬𝔰, 𝔧𝔞𝔪𝔞𝔦𝔰 𝔭𝔢𝔯𝔠𝔞-𝔰𝔢 𝔫𝔞 𝔢𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔬. 𝔈𝔳𝔦𝔱𝔢 𝔰𝔢𝔯 𝔬𝔣𝔢𝔫𝔰𝔦𝔳𝔬 𝔬𝔲 𝔱𝔬𝔵𝔦𝔠𝔬
`}
const smsToxic3 = () => { return `*AVISO*\n⚠️`}
const smsToxic4 = () => { return `😭 EU SINTO MUITO`}
const smsToxic5 = () => { return `☢️ DESATIVAR ANTITOXIC`}
const smsToxic6 = () => { return `Repeti meus avisos mas desconsideraste o meu presságio🥀`}
const smsToxic7 = () => { return `Desprezaste as advertências que te conferi, e agora te condeno a eliminação, como a última sentença proferida pelo eco sombrio dos corvos.💀🕯️`}

//fazer compras
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eCoins = () => { return '𝕯𝖆𝖗𝖐𝕮𝖔𝖎𝖓𝖘' }
const ravenTickets = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eLendario = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 BEM-VINDO`}
const smsWel2 = () => { return `Mensagem de boas-vindas para novos membros em grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de ações dentro do Grupo`}
const smsANivel1 = () => { return `🆙 NÍVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Suba de nível todos automaticamente; (Aplica recompensas por subir de nível)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Ativar função para adicionar ou remover pessoas em Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI CHAMADAS`}
const smsLlamar2 = () => { return `Bloquear pessoas que fazem chamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Proibir o Uso de Comandos quando alguém realizar algum tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Ativar função para que todos possam usar o edgar`}
const smsModAd1 = () => { return `🛂 MODO ADMINISTRADOR`}
const smsModAd2 = () => { return `Apenas Admins poderão usar o edgar em Grupos`}
const smsLect1 = () => { return `✅ LEITURA AUTOMÁTICA`}
const smsLect2 = () => { return `Deixar mensagens ou chats como lidos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORÁRIO`}
const smsTempo2 = () => { return `Função que permite permanência temporária em Grupos`}
const smsStik1 = () => { return `🎠 ADESIVOS`}
const smsStik2 = () => { return `Ative o envio automático de Stickers para todos`}
const smsStickA1 = () => { return `🪄 ADESIVOS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Vídeos, Gifs, imagens, links jpg ou jpeg; Eles serão convertidos em adesivos automaticamente`}
const smsReacc1 = () => { return `🤡 REAÇÃO `}
const smsReacc2 = () => { return `Habilitar o envio automático de Reações às mensagens`}
const smsAudi1 = () => { return `🔊 ÁUDIO`}
const smsAudi2 = () => { return `Habilite o envio automático de áudios para todos`}
const smsModHor1 = () => { return `🔞 MODO QUENTE`}
const smsModHor2 = () => { return `Mostrar conteúdo adulto nos bate-papos`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICO`}
const smsAntitoc2 = () => { return `Envie Avisos para as pessoas que insultam`}
const smsModOb1 = () => { return `👀 MODO DE OBSERVAÇÃO`}
const smsModOb2 = () => { return `Torne imagens, gifs e vídeos visíveis para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI EXCLUSÃO`}
const smsAntiEli2 = () => { return `Todas as mensagens excluídas serão encaminhadas para o Chat ou Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Elimine Números Internacionais considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI-LINKS`}
const smsAntiE2 = () => { return `Excluir pessoas que enviam links de grupos do WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI-LINKS 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Remover pessoas que enviam links do TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Remover pessoas que enviam links do YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Remover pessoas que enviam links de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Remover pessoas que enviam links do Facebook`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Remover pessoas que enviam links do Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remover pessoas que enviam links do Twitter`}
const smsSOLOP1 = () => { return `⚜️ APENAS PRIVADO`}
const smsSOLOP2 = () => { return `Permitir que seja usado apenas em bate-papos privados`}
const smsSOLOG1 = () => { return `⚜️ APENAS GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que seja usado apenas em bate-papos em grupo`}
const smsConfi1 = () => { return `DEFINIÇÕES`}
const smsConfi2 = () => { return `*Olá!*`}
const smsConfi3 = () => { return `┃ *Selecione uma opção da lista*`}
const smsConfi4 = () => { return `┃ *Para começar a configurar*`}
const smsConfi5 = () => { return `┃● *Avisos de configuração:*`}
const smsConfi6 = () => { return `┃ 🌕 ⇢ *Função ativada*`}
const smsConfi7 = () => { return `┃ 🌒 ⇢ *Função desabilitada*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Este bate-papo não é um grupo*`}
const smsConfi9 = () => { return `┃ *Recomendação: Para ver a configuração*\n┃ *Complete use este Menu de Grupo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURAÇÃO*`}
const smsParaAdmins = () => { return `PARA ADMINISTRADORES E CRIADOR: GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINISTRADORES E CRIADORES: CHATS`}
const smsParaOw = () => { return `PARA CRIADOR: CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ATUALMENTE`} 
const smsMens3 = () => { return `NESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `Bate-papo`} 

//Error2
const smsMensError1 = () => { return `❕COMANDO DE RELATÓRIO ❕`} 
const smsMensError2 = () => { return `O seguinte comando está falhando`} 

//_antiviewonce.js
const smsAntiView = () => { return `*𝐚 𝐯𝐞𝐫𝐝𝐚𝐝𝐞, 𝐜𝐨𝐦𝐨 𝐜𝐨𝐫𝐯𝐨 𝐬𝐢𝐧𝐢𝐬𝐭𝐫𝐨, 𝐫𝐞𝐯𝐞𝐥𝐚-𝐬𝐞 𝐢𝐦𝐩𝐥𝐚𝐜á𝐯𝐞𝐥 𝐩𝐞𝐫𝐚𝐧𝐭𝐞 𝐚 𝐧𝐨𝐢𝐭𝐞 𝐞𝐭𝐞𝐫𝐧𝐚* 📜✒️`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NOVO NÍVEL 🎖️`} 
const smsAutoLv2 = () => { return `NÍVEL ANTERIOR:`} 
const smsAutoLv3 = () => { return `NÍVEL ATUAL:`} 
const smsAutoLv4 = () => { return `ALCANCE:`} 
const smsAutoLv5 = () => { return `DATA:`} 
const smsAutoLv6 = () => { return `Você atingiu um novo nível!!!`} 
const smsAutoLv7 = () => { return `🥳 RECOMPENSA PELO SEU NOVO NÍVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${langTOGGLE['smsAvisoFG']()}*O VÍDEO NÃO DEVE DURAR MAIS DE 7 SEGUNDOS.*`} 

//_expired.js
const smsBottem1 = () => { return `*SAIR DO GRUPO!!! 🤝 SE VOCÊ QUER VOLTAR, USE O COMANDO _#bottemporal_ PARA VOLTAR AO GRUPO!!*`} 
const smsBottem2 = () => { return `*💕 ASSISTÊNCIA AO USUÁRIO*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `VEJO VOCÊ EM BREVE 💖`} 

//_premium.js
const smsPremI = () => { return `*¡SEU TEMPO PREMIUM ACABOU!* 🎟️\n*PARA OBTER UM NOVO PASSE PREMIUM USE O COMANDO:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `*𝕾𝖚𝖗𝖌𝖊 𝖊𝖓𝖙𝖆𝖔 𝖔 𝖛𝖎𝖆𝖏𝖆𝖓𝖙𝖊, 𝖕𝖔𝖇𝖗𝖊 𝖆𝖑𝖒𝖆 𝖖𝖚𝖊 𝖗𝖊𝖙𝖔𝖒𝖆 𝖘𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖆 𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔 𝖉𝖊 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖆 🪦🕯️*`} 
const smsAfkM3 = () => { return `🕰️ *𝕵𝖆𝖟 𝖓𝖆 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖕𝖔𝖗:*`} 
const smsAfkM2 = () => { return `\n*𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊*\n`} 
const smsAfkM4 = () => { return `*𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊 𝖊𝖘𝖙𝖆 𝖆𝖑𝖒𝖆 𝖕𝖊𝖓𝖆𝖉𝖆, 𝖊𝖑𝖆 𝖊𝖓𝖈𝖔𝖓𝖙𝖗𝖆-𝖘𝖊 𝖕𝖊𝖗𝖉𝖎𝖉𝖆, 𝖛𝖆𝖌𝖆𝖓𝖉𝖔 𝖓𝖆 𝖕𝖊𝖓𝖚𝖒𝖇𝖗𝖆 *\n`} 
const smsAfkM5 = () => { return `*𝐀 𝐜𝐚𝐮𝐬𝐚 𝐟𝐢𝐧𝐚𝐥 𝐩𝐚𝐫𝐚 𝐚𝐮𝐬𝐞𝐧𝐜𝐢𝐚 𝐟𝐨𝐢:*\n`} 
const smsAfkM6 = () => { return `*𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊* :\n𝙼𝚘𝚝𝚒𝚟𝚘 𝚍𝚎𝚜𝚌𝚘𝚗𝚑𝚎𝚌𝚒𝚍𝚘 𝚝𝚊𝚒𝚜 𝚌𝚘𝚖𝚘 𝚊𝚜 𝚜𝚘𝚖𝚋𝚛𝚊𝚜*`} 
const smsAfkTime = () => { return [['dias'], ['horas'], ['minutos'], ['segundos']] }
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => { return `${langTOGGLE['smsAvisoMG']()}*❖─┅──┅
𝐃𝐄𝐒𝐂𝐑𝐄𝐕𝐀 𝐎 𝐌𝐎𝐓𝐈𝐕𝐎 𝐃𝐄 𝐐𝐔𝐀𝐋 𝐒𝐄𝐑𝐀 𝐒𝐔𝐀 𝐀𝐔𝐒𝐄𝐍𝐂𝐈𝐀 🥀
─┅──┅❖ 
*EXEMPLO:*\n*${usedPrefix + command}* vou escrever um poema`} 
const smsAfkQ2 = () => { return `${langTOGGLE['smsAvisoMG']()}*❖─┅──┅\n𝐃𝐈𝐆𝐀-𝐌𝐄 𝐍𝐎 𝐌𝐈𝐍𝐈𝐌𝐎 𝟏𝟎 𝐂𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐄𝐒 𝐏𝐀𝐑𝐀 𝐄𝐗𝐏𝐋𝐈𝐂𝐀𝐑 𝐒𝐔𝐀 𝐀𝐔𝐒𝐄𝐍𝐂𝐈𝐀\n─┅──┅❖ *`} 
const smsAfkM1A = () => { return `*🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊*`} 
const smsAfkM1B = () => { return `*「𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*\n\n*𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${langTOGGLE['smsAvisoFG']()}*VOCÊ NÃO ESTÁ NO CHAT ANÔNIMO*`} 
const smsChatAn2 = () => { return `*SE QUISER INICIAR UM CHAT ANÔNIMO USE O COMANDO #start OU ACESSE O BOTÃO ABAIXO*\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÔNIMO`} 
const smsChatAn4 = () => { return `${langTOGGLE['smsAvisoRG']()}🪐 *VOCÊ SAIU DO CHAT ANÔNIMO*`} 
const smsChatAn5 = () => { return `${langTOGGLE['smsAvisoAG']()}*O OUTRO USUÁRIO SAIU DO CHAT ANÔNIMO*`}  
const smsChatAn6 = () => { return `*SE QUISER IR PARA OUTRO CHAT ANÔNIMO USE O COMANDO #start OU ACESSE O BOTÃO ABAIXO*\n`} 
const smsChatAn7 = () => { return `${langTOGGLE['smsAvisoAG']()}*VOCÊ AINDA ESTÁ EM UM CHAT ANÔNIMO OU ESPERANDO QUE ALGUÉM ENTRE NO CHAT*`} 
const smsChatAn8 = () => { return `*SE QUISER SAIR DO CHAT ANÔNIMO USE O COMANDO #leave OU VOCÊ PODE USAR O BOTÃO ABAIXO*\n`} 
const smsChatAn9 = () => { return `🍁 SAIR DO CHAT ANÔNIMO`} 
const smsChatAn10 = () => { return `${langTOGGLE['smsAvisoEG']()}✨ *ELES PODEM CONVERSAR AGORA*`} 
const smsChatAn11 = () => { return `*ALGUÉM ENTROU NO CHAT ANÔNIMO!!*`} 
const smsChatAn12 = () => { return `❇️ OUTRO USUÁRIO`} 
const smsChatAn13 = () => { return `${langTOGGLE['smsAvisoRG']()}🐈 *ESPERANDO ALGUÉM ENTRAR NO CHAT ANÔNIMO, SEJA PACIENTE*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ MENU INICIAR ⚡`} 
const smsBotonM2 = () => { return `💫 MENU COMPLETO 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTÁRIO 🎒`} 
const smsBotonM4 = () => { return `USUÁRIOS`}
const smsBotonM5 = () => { return `VARIAR`}
const smsBotonM6 = () => { return `NÍVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENU DE PESQUISA*'}
const smsTex2 = () => { return '*MODIFICADOR DE ÁUDIO*'}
const smsTex3 = () => { return '*MENU +18*'}
const smsTex4 = () => { return '*CONTEÚDO DINÂMICO*'}
const smsTex5 = () => { return '*PESQUISE E BAIXE*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Imagens +18 qualidade e variedade*\n⠇ *Vídeos +18 só para você*\n⠇ *Adesivos +18 disponíveis*'}
const smsTex8 = () => { return '*MENU DO CONVERSOR*'}
const smsTex9 = () => { return '*MENU DE DOWNLOADS*'}
const smsTex10 = () => { return '*MENU DE JOGOS DINÂMICOS*'}
const smsTex11 = () => { return '*MENU PARA GRUPOS*'}
const smsTex12 = () => { return '*MENU DE FERRAMENTAS*'}
const smsTex13 = () => { return '*MENU DE INFORMAÇÕES*'}
const smsTex14 = () => { return '*MENU DE EFEITOS E LOGOTIPOS*'}
const smsTex15 = () => { return '*MENU DE LOGOTIPOS 2*'}
const smsTex16 = () => { return 'MENU DE ÁUDIO'}
const smsTex17 = () => { return '*NÃO É NECESSÁRIO USAR PREFIXO NOS ÁUDIOS*'}
const smsTex18 = () => { return 'LISTA DE ÁUDIO'}
const smsTex19 = () => { return '*VOCÊ PODE SELECIONAR O ÁUDIO!!*'}
const smsTex20 = () => { return '*MENU DO PROPRIETÁRIO*'}
const smsTex21 = () => { return '*RPG MENU*'}
const smsTex22 = () => { return '*MENU DE ADESIVOS E FILTROS*'}
const smsTex23 = () => { return '*MEMES ALEATÓRIOS E MENU DE ANIME*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*Está nesses grupos:*_'}
const smsLisB = () => { return '*✦ Grupos totais:*'}
const smsLisC = () => { return '*✦ Grupos:*'}
const smsLisD = () => { return '*✦ id:*'}
const smsLisE = () => { return '*✦ participantes:*'}

//ad
const smsMalused = () => { return `╭━━━━━━━━━⬣
⬣ ✒️📜  *USE O COMANDO ASSIM:*
╰━━━━━━━━━━━━━━━━━━⬣`}
const smsMalused2 = () => { return `${langTOGGLE['smsAvisoMG']()}🐈 *VOCÊ DEVE USAR O COMANDO COMO ESTE EXEMPLO:*\n`}
const smsMalused3 = () => { return `${langTOGGLE['smsAvisoMG']()}🐈 *VOCÊ DEVE USAR O COMANDO OU RESPONDER À MENSAGEM DE ALGUÉM COMO ESTE EXEMPLO:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *GRUPO ABERTO EM UMA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_FECHAR GRUPO EM UMA HORA_*'}
const smsGrupoTime3 = () => { return 'GRUPO'}
const smsGrupoTime4 = () => { return 'FECHADO'}
const smsGrupoTime5 = () => { return 'ABERTO'}
const smsGrupoTime6 = () => { return 'DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *O GRUPO ESTÁ FECHADO, APENAS OS ADMINISTRADORES PODEM ENVIAR MENSAGENS*'}
const smsGrupoTime8 = () => { return '🔓 *O GRUPO ESTÁ ABERTO, TODOS PODEM ENVIAR MENSAGENS*'}
const smsGrupoTime9 = () => { return '🔓 GRUPO ABERTO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 FECHAR GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE O GRUPO TENHA PASSADO '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE O GRUPO FECHE '}

//grupo-add.js
const smsAddB1 = () => { return `${langTOGGLE['smsAvisoFG']()}*NÃO É POSSÍVEL ADICIONAR NÚMERO, POR FAVOR VERIFIQUE SE ESTÁ CORRETO, TALVEZ SEJA RECENTEMENTE OU SUA PRIVACIDADE ESTÁ DEFINIDA.*`}
const smsAddB2 = () => { return `${langTOGGLE['smsAvisoFG']()}*NÃO É POSSÍVEL ADICIONAR O NÚMERO, VERIFICAR SE ESTÁ CORRETO OU ADICIONAR MANUALMENTE.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICAÇÃO PARA ADMINISTRADORES*`}
const smsAddB4 = () => { return `*PRESENÇA ADMINISTRATIVA*`}
const smsAddB5 = () => { return `*MENSAGEM:*`}
const smsAddB6 = () => { return `Solicito aos admins, por favor.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${langTOGGLE['smsAvisoAG']()}*SÓ PODE USAR SE A FUNÇÃO ESTIVER ATIVADA:*\n`}
const smsAdveu2 = () => { return 'Razão'}
const smsAdveu3 = () => { return `${langTOGGLE['smsAvisoMG']()}*LEMBRE-SE DE ESCREVER O MOTIVO DO AVISO*\n`}
const smsAdveu4 = () => { return '*RECEBI UM AVISO NESTE GRUPO!!*'}
const smsAdveu5 = () => { return 'AVISO'}
const smsAdveu6 = () => { return '🎒 INVENTÁRIO'}
const smsAdveu7 = () => { return '*𝐓𝐞 𝐚𝐝𝐯𝐞𝐫𝐭𝐢 𝐫𝐞𝐩𝐞𝐭𝐢𝐝𝐚𝐬 𝐯𝐞𝐳𝐞𝐬.𝐓𝐞𝐮𝐬 𝐨𝐮𝐯𝐢𝐝𝐨𝐬, 𝐩𝐨𝐫𝐞𝐦, 𝐢𝐠𝐧𝐨𝐫𝐚𝐫𝐚𝐦 𝐦𝐞𝐮 𝐞𝐜𝐨 𝐦𝐞𝐥𝐚𝐧𝐜𝐨𝐥𝐢𝐜𝐨. . . 🥀*'}
const smsAdveu8 = () => { return '*𝐀𝐧𝐮𝐧𝐜𝐢𝐨 𝐚 𝐭𝐮𝐚 𝐝𝐞𝐬𝐭𝐢𝐭𝐮𝐢𝐜𝐚𝐨, 𝐜𝐮𝐣𝐨 𝐝𝐞𝐬𝐭𝐢𝐧𝐨 𝐞 𝐚𝐠𝐨𝐫𝐚 𝐛𝐚𝐧𝐢𝐝𝐨 𝐩𝐚𝐫𝐚 𝐨𝐬 𝐚𝐛𝐢𝐬𝐦𝐨𝐬 𝐝𝐨 𝐞𝐱𝐢𝐢𝐥𝐢𝐨 𝐞𝐭𝐞𝐫𝐞𝐨.* 🕯️💀'}
const smsAdveu9 = () => { return 'Merci 🥀'}
const smsAdveu10 = () => { return '*UM AVISO FOI REMOVIDO NESTE GRUPO!!*'}
const smsAdveu11 = () => { return 'Antes da:'}
const smsAdveu12 = () => { return 'Agora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return `*O NÚMERO É INVÁLIDO, TENTE NOVAMENTE RESPONDER A MENSAGEM DE ALGUÉM OU USE COMO ESSE EXEMPLO:*\n`}
const smsDemott2 = () => { return '*AGORA TEM PODER NO GRUPO!!*'}
const smsDemott3 = () => { return '*NÃO TEM MAIS PODER NO GRUPO!!*'}

//grupo-info.js
const smsGI1 = () => { return '*INFORMAÇÕES DO GRUPO*'}
const smsGI2 = () => { return '*ID DO GRUPO*'}
const smsGI3 = () => { return '*NOME DO GRUPO*'}
const smsGI4 = () => { return '*DESCRIÇÃO DO GRUPO*'}
const smsGI5 = () => { return '*SEM DESCRIÇÃO*'}
const smsGI6 = () => { return '*NÚMERO DE USUÁRIOS*'}
const smsGI7 = () => { return '*Usuários*'}
const smsGI8 = () => { return '*CRIADOR DO GRUPO*'}
const smsGI9 = () => { return '*ADMIN DO GRUPO*'}
const smsGI10 = () => { return '⚙️ CONFIGURAÇÕES DE GRUPO'}


//grupo-kick.js
const smskick1 = () => { return `${langTOGGLE['smsAvisoAG']()}*MARQUE A PESSOA OU RESPONDA A MENSAGEM DA PESSOA QUE DESEJA EXCLUIR*\n\n*EXEMPLO: `}
const smskick2 = () => { return `REMOVIDO `}
const smskick3 = () => { return `NÃO CONSIGO EXCLUIR O CRIADOR DO GRUPO`}
const smskick4 = () => { return `NÃO ESTÁ NESTE GRUPO 👻`}

//grupo-tagall.js
const smstagaa = () => { return `❖─┅──┅🕯️💀 Convoco todas as almas penadas deste grupo ─┅──┅❖  `}

//grupo-setbye.js
const smsSetB = () => { return `${langTOGGLE['smsAvisoEG']()}*A DESPEDIDA DO GRUPO ESTÁ CONFIGURADA*`}
const smsSetB2 = () => { return `${langTOGGLE['smsAvisoIIG']()}🙌 *_ESCREVA A MENSAGEM DE ADEUS_*\n*_OPCIONAL VOCÊ PODE USAR WHAT IS COM "@" PARA ADICIONAR MAIS INFORMAÇÕES:_*\n\n*⚡ @user (Menção ao usuário)*\n\n*LEMBRE-SE QUE O "@" É OPCIONAL*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${langTOGGLE['smsAvisoEG']()}*AS BOAS-VINDAS DO GRUPO FOI CONFIGURADA*`}
const smsSetW2 = () => { return `${langTOGGLE['smsAvisoIIG']()}🙌 *_ESCREVA A MENSAGEM DE BEM-VINDO_*\n*_OPCIONAL VOCÊ PODE USAR WHAT IS COM "@" PARA ADICIONAR MAIS INFORMAÇÕES:_*\n\n*⚡ @user (Menção ao usuário)*\n*⚡ @subject (Nome do grupo)*\n*⚡ @desc (Descrição do grupo)*\n\n*LEMBRE-SE QUE OS "@" SÃO OPCIONAIS*`}

//grupo-setdesc.js
const smsDest = () => { return `${langTOGGLE['smsAvisoEG']()}*A DESCRIÇÃO DO GRUPO FOI CONFIGURADA*`}

//grupo-setname.js
const smsNam1 = () => { return `${langTOGGLE['smsAvisoEG']()}*O NOME DO GRUPO FOI DEFINIDO*`}
const smsNam2 = () => { return `${langTOGGLE['smsAvisoMG']()}*🙌 ESCREVA O NOME DO NOVO GRUPO*`}
const smsNam3 = () => { return `${langTOGGLE['smsAvisoFG']()}*O NOME DO GRUPO NÃO DEVE TER MAIS DE 25 CARACTERES*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${langTOGGLE['smsAvisoEG']()}*O LINK DO GRUPO FOI REINICIALIZADO*`}

//Button 
const smsSig = () => { return `➡️ PRÓXIMO ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 PRÓXIMO ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *CONTEÚDO* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 CONTEÚDO 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *CONTEÚDO ❤️‍🔥 PRÊMIO* 🌟`} //texto
const smsCont18PornP2 = () => { return `CONTEÚDO ❤️‍🔥 PRÊMIO`} //texto  

//propietario(a).js
const smsJoin = (user) => { return `${packname}\naddd by :\n@${user}`}
const smsJoin1 = (usedPrefix, command) => { return langTOGGLE['smsAvisoMG']() + `*INSIRA O LINK DE UM GRUPO*\n*EXEMPLO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return langTOGGLE['smsAvisoEG']() + `${packname}\n*SE JUNTOU AO GRUPO 🥀*`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${langTOGGLE['smsAvisoMG']()}*❖─┅──┅\nMARQUE ALGUEM OU RESPONDA A PESSOA QUE DESEJA BANIR DE USAR COMANDOS*\n─┅──┅❖ \n*EXEMPLO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${langTOGGLE['smsAvisoFG']()}❖─┅──┅\n*@${bot} NAO PODE SER BANIDO 🥀\n─┅──┅❖ * `}
const smsPropban3 = (ownerNumber) => { return `${langTOGGLE.smsAvisoIIG()}ERROR 🚫`}
const smsPropban4 = (number) => { return `${langTOGGLE.smsAvisoIIG()}*❖─┅──┅\n @${number} JÁ SE ENCONTRA EXILADO DESTE VALE \n─┅──┅❖ * `}
const smsPropban5 = () => { return `${langTOGGLE['smsAvisoEG']()}*❖─┅──┅\nUSUARIO EXILADO COM EXITO ✒️📜\n─┅──┅❖*`}
const smsPropban6 = (number, usr) => { return `${langTOGGLE.smsAvisoAG()}*@${number}\nVoce esta banido\n❖─┅──┅\nNão podera utilizar mais comandos até que alguem reverta o banimento* 💀🕯️\n─┅──┅❖ `}
const smsPropban7 = (usedPrefix, command, number) => { return `${langTOGGLE['smsAvisoFG']()}*ERROR`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*Responda à mensagem ou escreva a mensagem usada  ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*Enviou mensagem oficial, espere um momento ... *`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ * A mensagem foi enviada ${totalPri} para bate -papos Tempos de envio totais privados: ${time}*\n${totalPri >= 3000 ? '\n* Eles não foram enviados para todos os bate -papos para evitar a saturação*' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *Mensagem *`}
const smsBCbot2 = () => { return `Privado`}
const smsBCbot3 = () => { return `Conjunto`}
const smsBCbot4 = () => { return `Total`}
const smsBCbot5 = () => { return `Tempo total de envio:`}
const smsBCbot6 = () => { return ` Eles não foram enviados para todos os bate -papos para evitar a saturação`}
const smsBCbot7 = () => { return `❖─┅──┅ 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐎𝐅𝐈𝐂𝐈𝐀𝐋─┅──┅❖ `}

//propietario(a).js
const smsChatGP1 = () => { return "*Mensagem enviada, espere um momento...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return ` ███████████████████████████████████████████████████████
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n`}

const smsChatGP3 = (totalGP) => { return `✅ *A mensagem foi enviada para ${totalGP} grupos*`}
 
//comandos+18-adult.js
const smsContAdult = () => { return `${langTOGGLE['smsAvisoAG']()}*OS COMANDOS 🔞 ELES ESTÃO DESATIVADOS, SE VOCÊ FOR MEU CRIADOR, USE #on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `Não tem o suficiente `}
const smsList2 = () => { return `\nClique aqui para comprar `}
const smsList3 = () => { return `Conteúdo disponível 😸`}
const smsList4 = () => { return `Conteúdo não disponível 😿\nClique aqui para comprar `}
const smsList5 = () => { return `*Selecione uma opção*\n*Da lista para ver o*\n*conteúdo* 😋`}
const smsList6 = () => { return `👀 VER LISTA 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 NOVO CONSELHO`}
const smsFras = () => { return `🍃 NOVA FRASE`}

//info-contacto.js
const smsContacto1 = () => { return ' Sou ' + packname + ' um WhatsApp Bot dedicado a ajudar com o que você pedir 😎'}
const smsContacto2 = () => { return 'Eu sou o dono da ' + packname + ' se você tiver alguma dúvida, você pode me dizer ✌️'}
const smsContacto3 = () => { return '👑 Proprietário'}
const smsContacto4 = () => { return 'Contato Oficial edgar 🐈'}
const smsContacto5 = () => { return '🐣 Como posso ajudá-lo?'}
const smsContacto6 = () => { return 'Eu não tenho correio 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Esta conta é bot 👀'}




export default { idiomaX, reconnectMsg, connFail, overlapCon, smsConnected, smsExpired, smsFailed, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, funDesativado, funAtivado, remTik, remYt, remTeleg, remFb, remIg, remTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, remWat, remWatt,  antiSpamMsg,  antiSpamMsg2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eCoins, ravenTickets, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eLendario, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
   smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsAfkQ1, smsAfkQ2, smsAfkTime, smsAfkResultTime, smsMainBot   }
