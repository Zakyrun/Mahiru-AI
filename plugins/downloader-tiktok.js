import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "🕖",key: m.key,}
  })  
  await m.reply('```Tunggu sebentar```')
 let cap = `*ᴅᴏᴡɴʟᴏᴀᴅ ⓉⒾⓀⓉⓄⓚ*

_*ᴀᴜᴛʜᴏʀ :*_ *${f.nickname}*
_*sᴛᴀᴛᴜs :*_ *𝘴𝘶𝘤𝘤𝘦𝘴*
_*ᴅᴜʀᴀsɪ :*_ *${f.duration}*
_*ᴛᴀɢ :*_ ${f.description}`
conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
}
handler.help = ['tiktok', 'tt'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt)$/i
handler.limit = true
export default handler