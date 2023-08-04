import fs from 'fs'
import fetch from "node-fetch"
let handler = async (m, { conn, args, usedPrefix: _p, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = process.uptime();
  let hari = Math.floor(uptime / 86400);
  uptime %= 86400;
  let jam = Math.floor(uptime / 3600);
  uptime %= 3600;
  let menit = Math.floor(uptime / 60);
  let detik = Math.floor(uptime % 60);
    let sender = m.sender
    let ky = `*ʀᴜɴᴛɪᴍᴇ ᴍᴀʜɪʀᴜ ᴀɪ*\n\n*${hari} ʜᴀʀɪ, ${jam} ᴊᴀᴍ, ${menit} ᴍᴇɴɪᴛ, ${detik} ᴅᴇᴛɪᴋ*\n`
 let ppp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/8315c8d1aa61b2a563c19.jpg")
const ziv = {
	 key: { 
          fromMe: false,
	   participant: '0@s.whatsapp.net', ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${_p}${command}`,
                 'jpegThumbnail': await conn.resize(ppp, 300, 300)
                        }
	                  } 
                     }
 conn.sendFile(m.chat, 'https://telegra.ph/file/8fa9fe38d65f510a728e6.mp4', 'zaky.png', ky, ziv, true, { gifPlayback: true, jpegThumbnail: await conn.resize('https://telegra.ph/file/b4c5c2d1a1c546659f0c3.jpg', 300, 200), contextInfo:{ forwardingScore: 99, isForwarded: true, externalAdReply :{
    mediaType: 1, 
    title: 'Mahiru AI - Runtime',
    body: 'ini adalah informasi lama aktif mahiru ai',
    thumbnail: await(await fetch('https://telegra.ph/file/eb7c75a6874e882130cb4.jpg')).buffer(),
    renderLargerThumbnail: true, 
    sourceUrl: `https://www.tiktok.com/@colindonesia?_t=8VTagbEgl7Z&_r=1`
     }}
   })
}
handler.help = ['runtime']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *ʜᴀʀɪ ☀️*\n ', h, ' *ᴊᴀᴍ 🕐*\n ', m, ' *ᴍᴇɴɪᴛ ⏰*\n ', s, ' *ᴅᴇᴛɪᴋ ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}