//minimal jangan di hapus om:v

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
*T H A N K S - TO*
➣ ZAKY (Precode)
➣ WH-MODS-DEV (Mastah)
➣ Zyko (mastah)
➣ Lolhuman (Api)

*Project BOT* : 01 September 2023
_this bot was redeveloped by zaky who recoded some of the features and menus of the bot_

*Join Om Gc Mahiru* : https://chat.whatsapp.com/Ixrfg0EkUUf6YHux63BILY`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: 'Thanks yang sudah membantu project sc ini',
thumbnailUrl: 'https://telegra.ph/file/82100f5551da26fb6f330.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command =  /^(tqto|thanksto|thanks to)$/i

export default handler
