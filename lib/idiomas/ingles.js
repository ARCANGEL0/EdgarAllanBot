
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const idiomaX = () => { return 'en' } //ENGLISH

 const smsAvisoRG = () => { return `` }
const smsAvisoAG = () => { return `` }
const smsAvisoIIG = () => { return `` }
const smsAvisoFG = () => { return `` }
const smsAvisoMG = () => { return `` }
const smsAvisoEEG = () => { return `` }
const smsAvisoEG = () => { return `` }

// FORMATO BASE (CLEAN AND FORMAL)
const GOTHIC_BASE = (reason, message) => {
    // We use the 'Reason' as the title for clarity. Note: I will use Unicode characters for the Fraktur font.
    return `⌠༺${reason} ╮\n\n📜 ${message}\n\n╰──────────────╯`
}

//BOT NUMBER (Creator)
const smsRowner = () => { 
    const message = `Only the **Creator** holds the authority for this command.`
    // Only the owner (Bot creator)
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝖙𝖍𝖊 𝕸𝖆𝖘𝖙𝖊𝖗`, message) 
}

//OWNER (Master/Dono)
const smsOwner = () => { 
    const message = `This function is restricted to the **Creator**.`
    // Only the owner (Bot creator)
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝖙𝖍𝖊 𝕸𝖆𝖘𝖙𝖊𝖗`, message) 
}

//MODERATORS
const smsMods = () => { 
    const message = `The command requires **Moderator Authority**. Your rank does not reach this crypt.`
    // Only admin
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝕬𝖉𝖒𝖎𝖓`, message) 
}

//PREMIUM USERS
const smsPremium = () => { 
    const message = `This function is reserved for **Premium Members**. The Tribute is required to lift the banishment of access.`
    // Only Premium
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝕻𝖗𝖊𝖒𝖎𝖚𝖒❗`, message) 
}

//FOR GROUPS ONLY
const smsGroup = () => { 
    const message = `This command must be invoked within a **Group**. Your solitude is not permitted for the execution of this command.`
    // Only Groups
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝕲𝖗𝖔𝖚𝖕𝖘`, message) 
}

//PRIVATE CHAT ONLY
const smsPrivate = () => { 
    const message = `The command must be spoken in a **Private Conversation**. The whisper must be kept secret, away from the public view of this group.`
    // Only Pv (Private)
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝕻𝖛`, message) 
}

//GROUP ADMINS
const smsAdmin = () => { 
    const message = `The power of this command belongs to the **Group Administrators**. You do not hold this Authority.`
    // Only admin
    return GOTHIC_BASE(`𝕺𝖓𝖑𝖞 𝕬𝖉𝖒𝖎𝖓`, message) 
}

//BOT ADMIN
const smsBotAdmin = () => { 
    const message = `I do not possess **Administrator Authority** in the Group. The keys have not been granted to fulfill your will.`
    // No admin
    return GOTHIC_BASE(`𝕹𝖔 𝕬𝖉𝖒𝖎𝖓❗`, message) 
}

//REGISTRATION


const smsUnreg = () => { 
    const message = `You are an Unknown Shade. Your registration must be written in the Archives. *Use \`.register\` before proceeding.`
    // No registration
    return GOTHIC_BASE(`𝕹𝖔 𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖆𝖙𝖎𝖔𝖓`, message) 
}

//RESTRICTED COMMAND
const smsRestrict = () => { 
    const message = `This command is restricted to the Group. Your current condition does not allow you to invoke it here.`
    // Restricted
    return GOTHIC_BASE(`𝕽𝖊𝖘𝖙𝖗𝖎𝖈𝖙𝖊𝖉❗`, message) 
}

//LIST MENU
const smsTime = () => { return `The Clock of Shadows`}
const smsUptime = () => { return `The Eternal Vigil`}
const smsVersion = () => { return `The Testament of ${global.packname}`}
const smsTotalUsers = () => { return `Registered Souls`}
const smsMode = () => { return `Mode of Existence`}
const smsModePublic = () => { return `THE VASTNESS`}
const smsModePrivate = () => { return `THE SECRET CRYPT`}
const smsBanChats = () => { return `The Silenced Tombs`}
const smsBanUsers = () => { return `The Exiled Spirits`}
const smsPareja = () => { return `Fated Union`}
const smsResultPareja = () => { return `Eternal Solitude`}
const smsSaludo = () => { return `GREETINGS! WELCOME`}
const smsDia = () => { return `Dawn's Pale Light`}
const smsTarde = () => { return `Dusk's Embrace`}
const smsTarde2 = () => { return `Evening's Murmur`}
const smsNoche = () => { return `The Midnight Dreary`}
const smsListaMenu = () => { return `📜 THE GRAND MANUSCRIPT 📜`}
const smsLista1 = () => { return `🕯️ EDGAR'S LORE`}
const smsLista2 = () => { return `🗝️ THE ALCHEMIST (CREATOR)`}
const smsLista3 = () => { return `🪙 OFFERINGS & TRIBUTE`}
const smsLista4 = () => { return `💨 SWIFTNESS OF THE SHADE`}
const smsLista5 = () => { return `📖 SCRIPTURE'S GUIDANCE`}
const smsLista6 = () => { return `🌌 THE VORTEX OF COMMANDS`}
const smsLista7 = () => { return `🕊️ SUMMONING EDGAR`}
const smsLista8 = () => { return `🔗 THE VOW OF ALLEGIANCE`}
const smsLista9 = () => { return `⚖️ THE ETERNAL PACT`}
const smsLista10 = () => { return `⚔️ QUESTS AND THE OLYMPUS`}
const smsLista11 = () => { return `👑 THE MONARCHS' SCROLL`}
const smsLista12 = () => { return `💎 THE CHOSEN OF THE CRYPT`}
const smsLista13 = () => { return `✨ THE TRIBUTE OF ACCESS`}
const smsLista14 = () => { return `🧭 PATHS OF DOOM`}
const smsLista15 = () => { return `🌑 THE MYSTIC ARCANA`}
const smsLista16 = () => { return `🛍️ THE CROW'S MARKET`}
const smsLista17 = () => { return `📦 THE RELIQUARY`}
const smsLista18 = () => { return `🖼️ THE GALLERY OF VISIONS`}
const smsLista19 = () => { return `📥 RECLAIMING THE ECHOES`}
const smsLista20 = () => { return `🔎 SCOPE THE FOG`}
const smsLista21 = () => { return `⚛️ TRANSMUTATION RITES`}
const smsLista22 = () => { return `🎶 THE PHANTOM'S VOICE`}
const smsLista22_1 = () => { return `🛠️ THE SMITH'S ARSENAL`}
const smsLista23 = () => { return `😂 THE MOCKERY OF FATE`}
const smsLista24 = () => { return `🎲 THE CARNIVAL OF MADNESS`}
const smsLista25 = () => { return `🗣️ THE WHISPERS OF THE DEAD`}
const smsLista26 = () => { return `🎭 MASKS AND VEILS`}
const smsLista27 = () => { return `💫 RUNES AND SIGILS`}
const smsLista28 = () => { return `🌄 THE SCROLLS OF HERALDRY`}
const smsLista29 = () => { return `🏮 THE FAR EASTERN SHADOWS`}
const smsLista30 = () => { return `🥀 THE CARNAL SECRETS (+18)`}
const smsLista31 = () => { return `⚙️ THE CLOCKWORK'S CORE`}
const smsLista32 = () => { return `🛡️ THE COVEN'S EDICT`}
const smsLista33 = () => { return `📄 CATALOG OF SORROWS`}
const smsLista34 = () => { return `🛠️ THE MECHANISM OF FATE`}
const smsLista35 = () => { return `👑 THE MONARCH'S SANCTUARY`} 


//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ WELCOME!!*\n┊💖 @user\n┊📄 *READ THE GROUP DESCRIPTION*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *HE LEFT THE GROUP, COME BACK SOON* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user YOU ARE NOW ADMIN IN THIS GROUP!!*'}
const smsSdemote = () => { return '*@user NO LONGER ADMIN IN THIS GROUP!!*'}
const smsSdesc = () => { return '*THE NEW DESCRIPTION OF THE GROUP IS:*\n\n@desc'}
const smsSsubject = () => { return '*THE NEW NAME OF THE GROUP IS:*\n\n@subject'}
const smsSicon = () => { return '*THE PHOTO OF THIS GROUP WAS CHANGED!!*'}
const smsSrevoke = () => { return '*NOW THIS IS THE NEW LINK OF THIS GROUP!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONNECTION ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUCCESSFUL CONNECTION WITH WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 LOADING...\n`}
const smsCodigoQR = () => { return `\n✅ SCAN THE QR CODE EXPIRES IN 45 SECONDS ✅`}
const smsConOFF = () => { return `\n⚠️ NO CONNECTION, DELETE THE FOLDER ${global.authFile} AND SCAN THE QR CODE ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMEDIA 🟢\n│→ FILES FROM THE TMP FOLDER DELETED\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│→ NON-ESSENTIAL SESSIONS ELIMINATED\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 FILES 🟠\n│→ RESIDUAL FILES DELETED\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 elliot 🟡\n│→ NOTHING TO DELETE \n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ elliot ⚪\n│→ NON-ESSENTIAL FILES DELETED\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 elliot 🔴\n│→ AN ERROR OCCURRED\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARCHIVE 🟣\n│→`} 
const smspurgeOldFiles2 = () => { return `DELETE SUCCESSFULLY\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARCHIVE 🔴\n│→`} 
const smspurgeOldFiles4 = () => { return `FAILED TO DELETE\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`}
const reconnectMsg = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️ CONNECTION CLOSED, RECONNECTING....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`}
const connFail = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ LOST CONNECTION WITH THE SERVER, RECONNECTING....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`}
const overlapCon = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️ CONNECTION REPLACED, ANOTHER NEW SESSION HAS BEEN OPENED, PLEASE CLOSE THE CURRENT SESSION FIRST.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`}
const smsConnected = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ CONNECTING TO THE SERVER...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`}
const smsExpired = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ CONNECTION TIMED OUT, RECONNECTING....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`}
const smsFailed = (reason, connection) => { return `\n⚠️❗ UNKNOWN DISCONNECTION REASON: ${reason || ''} >> ${connection || ''}`}
const smsMainBot = () => { return "'main.js' WAS SUCCESSFULLY UPDATED"}

//_allantilink.js
const smsTextoYT = () => { return ' reaperMD - WhatsApp '}
const funDesativado = () => { return '❌ DEACTIVATE'}
const funAtivado = () => { return '✅ ACTIVATE'}
const remTik = () => { return `*A BANNED TIKTOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const remYt = () => { return `*A BANNED YOUTUBE LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const remTeleg = () => { return `*A BANNED TELEGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const remFb = () => { return `*A BANNED FACEBOOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const remIg = () => { return `*A BANNED INSTAGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const remTw = () => { return `*A BANNED TWITTER LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
  const smsAllAdmin = () => { return `*I MUST BE AN ADMINISTRATOR TO BANISH INTRUDERS*`}
const smsSoloOwner = () => { return `*MY CREATOR MUST AWAKEN THIS FUNCTION*\n*#on restrict*`}

//handle r.js (Error/Handler Messages)
const smsCont1 = () => { return `*🔴 FAILURE OF THE RITE 🔴*`}
const smsCont2 = () => { return `*⚠️ SCRIPTURE:*`}
const smsCont3 = () => { return `*⚠️ SOUL:*`}
const smsCont4 = () => { return `*⚠️ DECREE:*`}
const smsCont5 = () => { return `*⚠️ MALEDICTION:*`} // Malediction/Curse
const smsCont6 = () => { return `*🪶 Something went disastrously wrong with the decree.
Use .report to relate this phenomenon to my creator*`}
const smsCont7 = () => { return `${global.langTOGGLE['smsAvisoAG']()}*DIAMONDS ARE ABSENT!! 💎 YOU MAY VISIT THE MARKET WITH THE DECREE*`}
const smsCont8 = () => { return ` *DIAMOND 💎 CONSUMED*`}
const smsCont9 = () => { return `${global.langTOGGLE['smsAvisoAG']()}*THE LEVEL REQUIRED IS ➡️*`}
const smsCont10 = () => { return `*TO INVOKE THIS DECREE. YOUR CURRENT LEVEL IS ➡️*`}
const smsCont11 = () => { return `*ASCEND WITH DECREE*`}
const smsCont12 = () => { return `A VAST CONGREGATION!! 😼`} 
const smsCont13 = () => { return `A SOUL HAS JOINED THE COVEN!! 🥳`}
const smsCont14 = () => { return `A SPIRIT HAS DEPARTED!! 🧐`}
const smsCont15 = () => { return `*HARK*`}
const smsCont16 = () => { return `*VIDEO CALLS* 📲`}
const smsCont17 = () => { return `─┅──┅❖ ❖─┅──┅`}
const smsCont18 = () => { return `\n🌒 I fear that calls are forbidden to echo in the sounds of my melancholy. Therefore, you shall be deprived of interaction with my contact and banished to the vales of nonexistence. 🚫
If you deem this banishment accidental, contact my creator`}
const smsCont19 = () => { return `─┅──┅❖ ❖─┅──┅`}
const smsCont20 = () => { return `༚ᢀ `}
const smsCont21 = () => { return `༚ᢀ Sending the deleted missive...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*THIS NUMBER*`}
const smsInt2 = () => { return `*IS NOT PERMITTED WITHIN THIS COVEN!*`}
//_antilink.js

const smsAdwa = () => { return `${global.langTOGGLE['smsAvisoEG']()}*AS YOU ARE ADMIN IN THIS GROUP YOU WILL NOT BE REMOVED*`}
const remWat = () => { return `${langTOGGLE['smsAvisoAG']()}*A BANNED WHATSAPP LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}


//_antilink2.js
const remWatt = () => { return `${langTOGGLE['smsAvisoAG']()}A FORBIDDEN LINK CONTAINING HTTPS WAS DETECTED IN THIS GROUP\n\nI PROCEED TO DELETE YOU`}

//_antispam.js
const  antiSpamMsg = () => { return `🤨 DO NOT SPAM, YOU WILL NOT BE ABLE TO USE ${global.packname} FOR ${60000 / 1000 - 59} MINUTE`}

//_antispam_.js
const  antiSpamMsg2 = () => { return `WAS UNBANNED AFTER ${60000 / 1000 - 59} MINUTE. PLEASE DO NOT SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Error
const smsMalError = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`AN UNEXPECTED ERROR HAS OCCURRED.\`\`\``}
const smsMalError2 = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`AN INCONVENIENCE HAS ARISEN. TRY AGAIN.\`\`\``}
const smsMalError3 = () => { return `${langTOGGLE['smsAvisoFG']()}\`\`\`SOMETHING WENT WRONG, REPORT THIS COMMAND USING:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `NOO!!! 🤬 SAY THIS WORD`}
const smsToxic2 = () => { return `IT IS FORBIDDEN DO NOT BE TOXIC`}
const smsToxic3 = () => { return `*WARNING*\n⚠️`}
const smsToxic4 = () => { return `😭 I'M SORRY`}
const smsToxic5 = () => { return `☢️ DISABLE ANTITOXIC`}
const smsToxic6 = () => { return `I WARNED YOU SEVERAL TIMES!!`}
const smsToxic7 = () => { return `YOU PASSED ALL 4 WARNINGS NOW YOU WILL BE ELIMINATED 🙄`}

//Tienda
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
const smsWel1 = () => { return `🎉 WELCOME`}
const smsWel2 = () => { return `Welcome Message for new Members in Groups`}
const smsDete1 = () => { return `🔔 DETECT`}
const smsDete2 = () => { return `Notices of actions within the Group`}
const smsANivel1 = () => { return `🆙 AUTO LEVEL`}
const smsANivel2 = () => { return `Level up everyone automatically; (Applies rewards for leveling up)`}
const smsRestri1 = () => { return `⛔ TO RESTRICT`}
const smsRestri2 = () => { return `Enable function to add or remove people in Groups`}
const smsLlamar1 = () => { return `🚫 ANTI CALLS`}
const smsLlamar2 = () => { return `Block people who make calls`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Ban the Use of Commands when someone performs some type of Spam`}
const smsModP1 = () => { return `🌐 PUBLIC MODE`}
const smsModP2 = () => { return `Enable function so everyone can use edgar`}
const smsModAd1 = () => { return `🛂 ADMIN MODE`}
const smsModAd2 = () => { return `Only Admins will be able to use edgar in Groups`}
const smsLect1 = () => { return `✅ AUTOMATIC READING`}
const smsLect2 = () => { return `Leave messages or chats as Read`}
const smsTempo1 = () => { return `🐈 TEMPORARY BOT`}
const smsTempo2 = () => { return `Function that allows temporary stay in Groups`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Enable automatic sending of Stickers to everyone`}
const smsStickA1 = () => { return `🪄 AUTOMATIC STICKERS`}
const smsStickA2 = () => { return `Videos, Gifs, images, jpg or jpeg links; They will be converted into Stickers Automatically`}
const smsReacc1 = () => { return `🤡 REACTION `}
const smsReacc2 = () => { return `Enable automatic sending of Reactions to messages`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Enable automatic sending of Audios to everyone`}
const smsModHor1 = () => { return `🔞 HORNY MODE`}
const smsModHor2 = () => { return `Show Adult content in Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TOXIC`}
const smsAntitoc2 = () => { return `Send Warnings those people who insult`}
const smsModOb1 = () => { return `👀 OBSERVE MODE`}
const smsModOb2 = () => { return `Make Images, Gifs, and Videos Viewable for Everyone`}
const smsAntiEli1 = () => { return `🗑️ ANTI DELETE`}
const smsAntiEli2 = () => { return `All deleted messages will be forwarded to the Chat or Group`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNATIONAL`}
const smsAntiInt2 = () => { return `Eliminate International Numbers considered fake`}
const smsAntiE1 = () => { return `🔗 ANTI LINKS`}
const smsAntiE2 = () => { return `Delete People who send links from WhatsApp Groups`}
const smsAntiEE1 = () => { return `🔗 ANTI LINKS 2`}
const smsAntiEE2 = () => { return `Remove People who send links containing https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Remove People Sending Links from TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Remove People Sending Links from YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Remove People who send links from Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Remove People Sending Facebook Links`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Remove People Sending Instagram Links`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remove People Sending Twitter Links`}
const smsSOLOP1 = () => { return `⚜️ ONLY PRIVATE`}
const smsSOLOP2 = () => { return `Allow it to be used only in Private Chats`}
const smsSOLOG1 = () => { return `⚜️ ONLY GROUPS`}
const smsSOLOG2 = () => { return `Allow it to only be used in Group Chats`}
const smsConfi1 = () => { return `SETTINGS`}
const smsConfi2 = () => { return `*¡Hello!*`}
const smsConfi3 = () => { return `┃ *Select an option from the list*`}
const smsConfi4 = () => { return `┃ *To start to configure*`}
const smsConfi5 = () => { return `┃● *Configuration Notices:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Function Activated*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *function Disabled*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *This Chat is not a Group*`}
const smsConfi9 = () => { return `┃ *Recommendation: To see the configuration*\n┃ *Complete use this Group Menu*\n┃`}
const smsConfi10 = () => { return `*~ CONFIGURATION CENTER*`}
const smsParaAdmins = () => { return `FOR ADMINS AND CREATOR : GROUPS`}
const smsParaAdYOw = () => { return `FOR ADMINS AND CREATOR : CHATS`}
const smsParaOw = () => { return `FOR CREATOR : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMMAND`} 
const smsMens2 = () => { return `CURRENTLY`} 
const smsMens3 = () => { return `IN THIS`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORT COMMAND ❕`} 
const smsMensError2 = () => { return `The following command is failing`} 

//_antiviewonce.js
const smsAntiView = () => { return `*NOTHING CAN BE HIDDEN* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NEW LEVEL 🎖️`} 
const smsAutoLv2 = () => { return `PREVIOUS LEVEL:`} 
const smsAutoLv3 = () => { return `CURRENT LEVEL:`} 
const smsAutoLv4 = () => { return `RANGE:`} 
const smsAutoLv5 = () => { return `DATE:`} 
const smsAutoLv6 = () => { return `You have reached a new level!!!`} 
const smsAutoLv7 = () => { return `🥳 REWARD FOR YOUR NEW LEVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${langTOGGLE['smsAvisoFG']()}*THE VIDEO SHOULD NOT LAST MORE THAN 7 SECONDS.*`} 

//_expired.js
const smsBottem1 = () => { return `*LEAVES THE GROUP!!! 🤝 IF YOU WANT IT TO COME BACK, USE THE COMMAND _#bottemporal_ TO GET BACK TO THE GROUP!!*`} 
const smsBottem2 = () => { return `*💕 USER ASSISTANCE*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `SEE YOU SOON 💖`} 

//_premium.js
const smsPremI = () => { return `*¡YOUR PREMIUM TIME IS OVER!* 🎟️\n*TO GET A NEW PREMIUM PASS USE THE COMMAND:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `*YOU STOPPED BEING INACTIVE AFK*`} 
const smsAfkM2 = () => { return `\n*THE REASON FOR INACTIVITY WAS:*\n`} 
const smsAfkM3 = () => { return `⏳ *INACTIVE TIME:*`} 
const smsAfkM4 = () => { return `*DO NOT TAG THIS USER!! IT IS INACTIVE*\n`} 
const smsAfkM5 = () => { return `*REASON FOR AFK INACTIVITY:*\n`} 
const smsAfkM6 = () => { return `*REASON FOR AFK INACTIVITY:\nNO REASON FOR INACTIVITY WAS SPECIFIED*`} 
const smsAfkTime = () => { return [['día(s)'], ['hours'], ['minutes'], ['seconds']] }
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => { return `${langTOGGLE['smsAvisoMG']()}*WRITE REASON WHY IT IS INACTIVE (AFK)*\n\n*EXAMPLE:*\n*${usedPrefix + command}* I'm going to do homework`} 
const smsAfkQ2 = () => { return `${langTOGGLE['smsAvisoMG']()}*MINIMUM 10 CHARACTERS MUST BE THE REASON*`} 
const smsAfkM1A = () => { return `*DO NOT TAG*`} 
const smsAfkM1B = () => { return `*WILL BE INACTIVE AFK*\n\n*REASON FOR AFK INACTIVITY:*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${langTOGGLE['smsAvisoFG']()}*YOU ARE NOT IN ANONYMOUS CHAT*`} 
const smsChatAn2 = () => { return `*IF YOU WANT TO START AN ANONYMOUS CHAT USE THE COMMAND #start OR USE THE BUTTON BELOW*\n`} 
const smsChatAn3 = () => { return `⚡ START ANONYMOUS CHAT`} 
const smsChatAn4 = () => { return `${langTOGGLE['smsAvisoRG']()}🪐 *YOU LEFT THE ANONYMOUS CHAT*`} 
const smsChatAn5 = () => { return `${langTOGGLE['smsAvisoAG']()}*THE OTHER USER LEFT THE ANONYMOUS CHAT*`}  
const smsChatAn6 = () => { return `*IF YOU WANT TO GO TO ANOTHER ANONYMOUS CHAT USE THE COMMAND #start OR USE THE BUTTON BELOW*\n`} 
const smsChatAn7 = () => { return `${langTOGGLE['smsAvisoAG']()}*YOU ARE STILL IN AN ANONYMOUS CHAT OR WAITING FOR SOMEONE TO JOIN TO CHAT*`} 
const smsChatAn8 = () => { return `*IF YOU WANT TO EXIT THE ANONYMOUS CHAT USE THE COMMAND #leave OR YOU CAN USE THE BUTTON BELOW*\n`} 
const smsChatAn9 = () => { return `🍁 EXIT ANONYMOUS CHAT`} 
const smsChatAn10 = () => { return `${langTOGGLE['smsAvisoEG']()}✨ *THEY CAN CHAT NOW*`} 
const smsChatAn11 = () => { return `*SOMEONE JOINED THE ANONYMOUS CHAT!!*`} 
const smsChatAn12 = () => { return `❇️ ANOTHER USER`} 
const smsChatAn13 = () => { return `${langTOGGLE['smsAvisoRG']()}🐈 *WAITING FOR SOMEONE TO JOIN THE ANONYMOUS CHAT, PLEASE BE PATIENT*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ START MENU ⚡`} 
const smsBotonM2 = () => { return `💫 FULL MENU 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTORY 🎒`} 
const smsBotonM4 = () => { return `USERS`}
const smsBotonM5 = () => { return `RANGE`}
const smsBotonM6 = () => { return `LEVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*SEARCH MENU*'}
const smsTex2 = () => { return '*AUDIO MODIFIER*'}
const smsTex3 = () => { return '*MENU +18*'}
const smsTex4 = () => { return '*DYNAMIC CONTENT*'}
const smsTex5 = () => { return '*SEARCH AND DOWNLOAD*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Images +18 quality and variety*\n⠇ *Videos +18 just for you*\n⠇ *Stickers +18 available*'}
const smsTex8 = () => { return '*CONVERTER MENU*'}
const smsTex9 = () => { return '*DOWNLOADS MENU*'}
const smsTex10 = () => { return '*DYNAMIC GAMES MENU*'}
const smsTex11 = () => { return '*MENU FOR GROUPS*'}
const smsTex12 = () => { return '*TOOLS MENU*'}
const smsTex13 = () => { return '*INFORMATION MENU*'}
const smsTex14 = () => { return '*EFFECTS AND LOGOS MENU*'}
const smsTex15 = () => { return '*LOGOS MENU 2*'}
const smsTex16 = () => { return 'AUDIO MENU'}
const smsTex17 = () => { return '*IT IS NOT NECESSARY TO USE PREFIX IN AUDIOS*'}
const smsTex18 = () => { return 'SOUND LIST'}
const smsTex19 = () => { return '*YOU CAN SELECT THE AUDIO!!*'}
const smsTex20 = () => { return '*OWNER MENU*'}
const smsTex21 = () => { return '*RPG MENU*'}
const smsTex22 = () => { return '*STICKERS AND FILTERS MENU*'}
const smsTex23 = () => { return '*RANDOM MEMES AND ANIME MENU*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*YOU ARE IN THESE GROUPS:*_'}
const smsLisB = () => { return '*⭔ Total Groups:*'}
const smsLisC = () => { return '*⋄ Group:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Participants:*'}

//ad
const smsMalused = () => { return '⚡ *USE THE COMMAND LIKE THIS:*\n'}
const smsMalused2 = () => { return `${langTOGGLE['smsAvisoMG']()}🐈 *YOU MUST USE THE COMMAND LIKE THIS EXAMPLE:*\n`}
const smsMalused3 = () => { return `${langTOGGLE['smsAvisoMG']()}🐈 *YOU MUST USE THE COMMAND OR RESPOND TO SOMEONE'S MESSAGE LIKE THIS EXAMPLE:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_OPEN GROUP IN ONE HOUR_*'}
const smsGrupoTime2 = () => { return '🔒 *_CLOSE GROUP IN ONE HOUR_*'}
const smsGrupoTime3 = () => { return '*GROUP'}
const smsGrupoTime4 = () => { return 'CLOSED'}
const smsGrupoTime5 = () => { return 'OPEN'}
const smsGrupoTime6 = () => { return '*DURING'}
const smsGrupoTime7 = () => { return '🔒 *THE GROUP IS CLOSED, ONLY ADMINS CAN SEND MESSAGES*'}
const smsGrupoTime8 = () => { return '🔓 *THE GROUP IS OPEN, EVERYONE CAN SEND MESSAGES*'}
const smsGrupoTime9 = () => { return '🔓 OPEN GROUP DURING '}
const smsGrupoTime10 = () => { return '🔒 CLOSE GROUP DURING '}
const smsGrupoTime11 = () => { return ' HOUR'}
const smsGrupoTime12 = () => { return 'ALLOW THE GROUP TO HAVE BEEN BY '}
const smsGrupoTime13 = () => { return 'ALLOW THE GROUP TO CLOSE BY '}

//grupo-add.js
const smsAddB1 = () => { return `${langTOGGLE['smsAvisoFG']()}*CANNOT ADD NUMBER, PLEASE VERIFY IT IS CORRECT, MAYBE IT CAME OUT RECENTLY OR YOUR PRIVACY IS SET.*`}
const smsAddB2 = () => { return `${langTOGGLE['smsAvisoFG']()}*CANNOT ADD THE NUMBER, VERIFY IT IS CORRECT, OR ADD IT MANUALLY.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICATION FOR ADMINS*`}
const smsAddB4 = () => { return `*ADMIN PRESENCE*`}
const smsAddB5 = () => { return `*MESSAGE:*`}
const smsAddB6 = () => { return `I request the admins please.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${langTOGGLE['smsAvisoAG']()}*CAN ONLY USE IF THE FUNCTION IS ACTIVATED:*\n`}
const smsAdveu2 = () => { return 'Reason'}
const smsAdveu3 = () => { return `${langTOGGLE['smsAvisoMG']()}*REMEMBER TO WRITE THE REASON FOR THE WARNING*\n`}
const smsAdveu4 = () => { return '*RECEIVED A WARNING IN THIS GROUP!!*'}
const smsAdveu5 = () => { return 'WARNING'}
const smsAdveu6 = () => { return '🎒 INVENTORY'}
const smsAdveu7 = () => { return '*I WARNED YOU SEVERAL TIMES!!*'}
const smsAdveu8 = () => { return '*NOW YOU WILL BE DELETED* 🙄'}
const smsAdveu9 = () => { return '😇 THANK YOU'}
const smsAdveu10 = () => { return '*A WARNING WAS REMOVED IN THIS GROUP!!*'}
const smsAdveu11 = () => { return 'Before:'}
const smsAdveu12 = () => { return 'Now:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return `*THE NUMBER IS INVALID, TRY AGAIN REPLY TO SOMEONE'S MESSAGE OR USE LIKE THIS EXAMPLE:*\n`}
const smsDemott2 = () => { return '*NOW HAS POWER IN THE GROUP!!*'}
const smsDemott3 = () => { return '*NO LONGER HAS POWER IN THE GROUP!!*'}

//grupo-info.js
const smsGI1 = () => { return '*GROUP INFORMATION*'}
const smsGI2 = () => { return '*GROUP ID*'}
const smsGI3 = () => { return '*GROUP NAME*'}
const smsGI4 = () => { return '*GROUP DESCRIPTION*'}
const smsGI5 = () => { return '*NO DESCRIPTION*'}
const smsGI6 = () => { return '*NUMBER OF USERS*'}
const smsGI7 = () => { return '*Users*'}
const smsGI8 = () => { return '*CREATOR OF THE GROUP*'}
const smsGI9 = () => { return '*GROUP ADMIN*'}
const smsGI10 = () => { return '⚙️ GROUP SETTINGS'}


//grupo-kick.js
const smskick1 = () => { return `${langTOGGLE['smsAvisoAG']()}*TAG THE PERSON OR REPLY TO THE MESSAGE OF THE PERSON YOU WANT TO DELETE*\n\n*EXAMPLE: `}
const smskick2 = () => { return `REMOVED 😼🫵`}
const smskick3 = () => { return `I CAN'T DELETE THE GROUP CREATOR 😆🫵`}
const smskick4 = () => { return `NOT IN THIS GROUP 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ SUMMONING THE GROUP ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${langTOGGLE['smsAvisoEG']()}*THE FAREWELL OF THE GROUP HAS BEEN CONFIGURED*`}
const smsSetB2 = () => { return `${langTOGGLE['smsAvisoIIG']()}🙌 *_WRITE THE FAREWELL MESSAGE_*\n*_OPTIONAL YOU CAN USE WHAT IS WITH "@" TO ADD MORE INFORMATION:_*\n\n*⚡ @user (Mention to the user)*\n\n*REMEMBER THAT THE "@" IT'S OPTIONAL*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${langTOGGLE['smsAvisoEG']()}*GROUP WELCOME HAS BEEN SET UP*`}
const smsSetW2 = () => { return `${langTOGGLE['smsAvisoIIG']()}🙌 *_WRITE THE WELCOME MESSAGE_*\n*_OPTIONAL YOU CAN USE WHAT IS WITH "@" TO ADD MORE INFORMATION:_*\n\n*⚡ @user (Mention to the user)*\n*⚡ @subject (Group name)*\n*⚡ @desc (Group description)*\n\n*REMEMBER THAT THE "@" ARE OPTIONAL*`}

//grupo-setdesc.js
const smsDest = () => { return `${langTOGGLE['smsAvisoEG']()}*GROUP DESCRIPTION HAS BEEN CONFIGURED*`}

//grupo-setname.js
const smsNam1 = () => { return `${langTOGGLE['smsAvisoEG']()}*THE GROUP NAME HAS BEEN SET*`}
const smsNam2 = () => { return `${langTOGGLE['smsAvisoMG']()}*🙌 WRITE THE NEW GROUP NAME*`}
const smsNam3 = () => { return `${langTOGGLE['smsAvisoFG']()}*THE NAME OF THE GROUP MUST NOT HAVE MORE THAN 25 CHARACTERS*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${langTOGGLE['smsAvisoEG']()}*THE GROUP LINK HAS BEEN RESETED*`}

//Button 
const smsSig = () => { return `➡️ NEXT ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 NEXT ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *CONTENTS* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 CONTENTS 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *CONTENTS ❤️‍🔥 PREMIUM* 🌟`} //texto
const smsCont18PornP2 = () => { return `CONTENTS ❤️‍🔥 PREMIUM`} //texto  

//propietario(a).js
const smsJoin = (user) => { return ``}
const smsJoin1 = (usedPrefix, command) => { return langTOGGLE['smsAvisoMG']() + `*INGRESE EL ENLACE DE UN GRUPO*\n*EJEMPLO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return langTOGGLE['smsAvisoEG']() + `${packname}\n*SE HA UNIDO AL GRUPO ✅*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*Respond to the message or write the used message ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*Sent official message, wait a moment...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *The message was sent   ${totalPri} to chats Private*\n\n*Total Shipping Times : ${time}*\n${totalPri >= 3000 ? '\n*They were not sent to all chats to avoid saturation*' : ''}`}
 
//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${langTOGGLE['smsAvisoMG']()}*TAG SOMEONE OR REPLY TO THE USER'S MESSAGE OR WRITE THE NUMBER YOU WANT TO BAN FROM THE COMMANDS*\n\n*EXAMPLE:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${langTOGGLE['smsAvisoFG']()}*@${bot} CANNOT BE BANNED WITH THIS COMMAND* 😹`}
const smsPropban3 = (ownerNumber) => { return `${langTOGGLE.smsAvisoIIG()}😳 *I CAN'T BAN THE OWNER @${ownerNumber} OF ${packname}*`}
const smsPropban4 = (number) => { return `${langTOGGLE.smsAvisoIIG()}*IT IS NOT NECESSARY TO BAN AGAIN @${number} YES IT ALREADY IS* 😊`}
const smsPropban5 = () => { return `${langTOGGLE['smsAvisoEG']()}*USER SUCCESSFULLY BANNED* 🙀`}
const smsPropban6 = (number, usr) => { return `${langTOGGLE.smsAvisoAG()}*@${number} YOU ARE BANNED BY @${usr} YOU CANNOT USE THE COMMANDS UNTIL SOMEONE REVERSES THE BAN* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${langTOGGLE['smsAvisoFG']()}*AN ERROR CAME UP, IT MAY BE THAT THE USER IS NOT IN MY DATABASE TRY TO WRITE ${usedPrefix + command} ${number}*\n\`\`\`IF THE ERROR CONTINUES REPORT THIS COMMAND\`\`\``}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *Message:*`}
const smsBCbot2 = () => { return `Private `}
const smsBCbot3 = () => { return `Cluster`}
const smsBCbot4 = () => { return `Total`}
const smsBCbot5 = () => { return `Total shipping time :`}
const smsBCbot6 = () => { return `They were not sent to all chats to avoid saturation`}
const smsBCbot7 = () => { return `✅ *Official statement* ✅`}

//propietario(a).js
const smsChatGP1 = () => { return "*[*] LOADING...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return ` ███████████████████████████████████████████████████████
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n`}
const smsChatGP3 = (totalGP) => { return `✅ *The message was sent to  ${totalGP} groups*`}
  
const smsContAdult = () => { return `${langTOGGLE['smsAvisoAG']()}*THE COMMANDS 🔞 THEY ARE DISABLED, IF YOU ARE MY CREATOR USE #on nsfw*`}

//comandos+18-menu.js
const smsList1 = () => { return `Don't have enough `}
const smsList2 = () => { return `\nClick here to buy `}
const smsList3 = () => { return `Available content 😸`}
const smsList4 = () => { return `Content not available 😿\nClick here to buy `}
const smsList5 = () => { return `*Select an option*\n*from the list to see the*\n*contents* 😋`}
const smsList6 = () => { return `👀 SEE LIST 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 NEW COUNCIL`}
const smsFras = () => { return `🍃 NEW SENTENCE`}

//info-contacto.js
const smsContacto1 = () => { return ' I am ' + packname + ' a WhatsApp Bot dedicated to helping with whatever you ask 😎'}
const smsContacto2 = () => { return 'I am Owner of ' + packname + ' if you have any questions you can tell me ✌️'}
const smsContacto3 = () => { return '👑 Owner'}
const smsContacto4 = () => { return 'edgar Official Contact 🐈'}
const smsContacto5 = () => { return '🐣 How can I help you?'}
const smsContacto6 = () => { return 'I do not have mail 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'This Account is Bot 👀'}


export default { idiomaX, reconnectMsg, connFail, overlapCon, smsConnected, smsExpired, smsFailed, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, funDesativado, funAtivado, remTik, remYt, remTeleg, remFb, remIg, remTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, remWat, remWatt,  antiSpamMsg,  antiSpamMsg2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eCoins, ravenTickets, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eLendario, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
   smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsAfkQ1, smsAfkQ2, smsAfkTime, smsAfkResultTime, smsMainBot   }
