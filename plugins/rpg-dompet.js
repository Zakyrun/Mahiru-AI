let handler = async (m, { conn, args }) => {
if (args[0] == 'reset') {
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 1000 : isNumber(args[0]) ? parseInt(args[0]) : 1000
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
		}
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let cap  = `*么 - DOMPET* @${who.split(`@`)[0]}
┌  ◦  *Role:* ${user.role}
│  ◦  *exp:* ${user.exp}
│  ◦  *Limit:* ${user.limit}
│  ◦  *Money:* ${user.money}
│  ◦  *Bank:* ${user.bank} 
╰───────···`
conn.sendMessage(m.chat, {
    text: cap,
    contextInfo: {
      externalAdReply: {
        title: "Mahiru AI - KY",
        body: "Ini adalah informasi saldo Anda.",
        thumbnailUrl: 'https://telegra.ph/file/2cc26e0a05891a5df3f2f.jpg',
        sourceUrl: sig,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
handler.help = ['dompet', 'limit']
handler.tags = ['rpg']
handler.command = /^(dompet|dp)$/i

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}