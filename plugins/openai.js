import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
  let jam = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '✔️', ''];
  
  for (let i = 0; i < jam.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    await conn.sendMessage(m.chat, {
      react: {
        text: jam[i],
        key: m.key
      }
    });
  }
  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let thumbnailUrl = "https://link.sazumiviki.me/zuFd2g"
// make a question to our api
    let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=haikalgans&text=${text}`)
    let zel = await res.json()
   let ai = zel.result
   conn.sendMessage(m.chat, {
    text: ai,
    contextInfo: {
      externalAdReply: {
        title: "Mahiru Ai - Chat Gpt",
        body: "Ini Adalah Jawaban Dari Mahiru Ai",
        thumbnailUrl: thumbnailUrl,
        sourceUrl: 'Created By Zaky',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak });
}
handler.help = ['openai']
handler.tags = ['tools']
handler.command = /^(ai|openai)$/i
handler.limit = true
export default handler
