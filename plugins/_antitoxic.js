const isToxic = /(anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|asu|ktl)/i;

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    if (chat.antiToxic && isAntiToxic) {
    let vn = "./mp3/toxic.mp3"
	conn.sendFile(m.chat, vn, "toxic.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
if (isBotAdmin && chat.antiToxic) {
            await conn.sendMessage(m.chat, { delete: m.key })
            return !1
        } else if (!chat.antiToxic) {
             await conn.sendMessage(m.chat, { delete: m.key })
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    return !0
}

export const disable = true