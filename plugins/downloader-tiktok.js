import axios from "axios"
import fetch from "node-fetch"
import { Tiktokdl } from '../lib/scrape.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`
    await conn.sendMessage(m.chat, { react: { text: "🕚",key: m.key,}})  
    m.reply(md)
    let spas = "                "
    let ler = await Tiktokdl(text)
    let cer = ler.result
	let cap = `*「 🅃🄸🄺🅃🄾🄺 」*

*👤ᴀᴜᴛʜᴏʀ:* ${cer.author.nickname}
*🔖ᴊᴜᴅᴜʟ:* ${cer.desc}

${footer}`
conn.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
};
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

export default handler