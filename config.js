import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59894808483', 'creador', true],
  ['5492266613038']
] //Numeros de owner 

global.mods = [] 
global.prems = []
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

//❑ ━━━━━.⋅ Sticker WM ⋅.━━━━ ❐

global.packname = '🔰 CuriosityBot-MD 🔰'
global.author = '🍓 WhatsApp Bot\n+591'

//❑━━━━━━━━━━━━━━━━━━━━ ❐

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ツ

//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '「✅」 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 「✅」\n\n'
global.resultado = rg

global.ag = '「⚠️」 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 「⚠️」\n\n'
global.advertencia = ag

global.iig = '「❕」 𝐈𝐍𝐅𝐎𝐌𝐀𝐂𝐈𝐎𝐍 「❕」\n\n'
global.informacion = iig

global.fg = '「❌」 𝐅𝐀𝐋𝐋𝐎 「❌」\n\n'
global.fallo = fg
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ
//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = 'curiosity'
global.igfg = 'CURIOSITY'
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.nomorown = '5214531106422'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.fgig = '® Curiosity*\n' 
global.dygp = 'https://chat.whatsapp.com/IO9jmpI72ejHiN4unRZleU'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
