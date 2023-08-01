let handler = async (m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastrob)
    let _timers = (3600000 - __timers) 
    let timers = clockString(_timers)
  if (new Date - global.db.data.users[m.sender].lastrob > 3600000){
    let kylimit = `${Math.floor(Math.random() * 10000000000000000000000000000000000000000)}`.trim()
	let kylevel = `${Math.floor(Math.random() * 10000000)}`.trim()
	let kydiamond = `${Math.floor(Math.random() * 1000000000000000000000000000000000000000000000000000000000000)}`.trim()
	let kyexp = `${Math.floor(Math.random() * 100000000000000000000000000000000000000000)}`.trim()
        global.db.data.users[m.sender].limit += kylimit * 1
        global.db.data.users[m.sender].level += kylevel * 1
        global.db.data.users[m.sender].diamond += kydiamond * 1
        global.db.data.users[m.sender].exp +=  kyexp * 1
        global.db.data.users[m.sender].lastrob = new Date * 1
    conn.reply(m.chat, `ᴋᴀᴍᴜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʙᴏɴᴜs ᴅᴀʀɪ ᴏᴡɴᴇʀ sᴇʙᴀɴʏᴀᴋ: \n+${kylimit} 𝐋𝐢𝐦𝐢𝐭\n+${kylevel} 𝐋𝐞𝐯𝐞𝐥\n+${kydiamond} 𝐃𝐢𝐚𝐦𝐨𝐧𝐝\n+${kyexp} 𝐄𝐱𝐩`, m)
    
}else conn.reply(m.chat, `*😑Lu Udah Ngambil Bonus Anjirr Tunggu Sampai*\n${timers}`, m)
}
handler.command = /^(curang2|mahirubonus|kybonus)$/i
handler.register = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d,' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}