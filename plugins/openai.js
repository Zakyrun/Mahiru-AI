/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import axios from 'axios'
let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .ai apa itu ai?'

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
// the body data is same like openai have.
const payloads = {
	model: "gpt-4",

	// more higher more smart/uncute conversation
	max_tokens: 2000,

	// example of setting the system role;
	// then you can add user role;
	messages: [
		{
			role: "system",
			content:
				"Anda adalah Asisten AI bernama Mahiru Ai. Anda dapat memahami bahasa yang berbeda, tetapi Anda lebih suka berbicara bahasa Indonesia. Kepribadian Anda: Menyenangkan, seperti membuat lelucon, santai. Anda membantu orang dengan pertanyaan apa pun yang mereka ajukan. Anda diciptakan oleh pemilik Anda Zaky",
		},
	],
};

// Push the user question to { messages };
const question = text;
payloads["messages"].push({
	role: "user",
	content: question,

	// also you can set object { name } if using gpt-4
	name: "mahiru ai",
});

const fkontak = {
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
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/chatGPT/turbo",
		method: "POST",
		params: {
			apikey: 'Rs-AgesuXD',
		},
		headers: {
			"Content-Type": "application/json",
		},
		data: payloads,
	})
	.catch((e) => e?.response);

const { status, message, result } = data;

if (!status) {
	// error
	return m.reply(message);
}
let ai = result.messages.content
conn.sendMessage(m.chat, {
    text: ai,
    contextInfo: {
      externalAdReply: {
        title: "Mahiru Ai - Chat Gpt Ai",
        body: "Ini Adalah Jawaban Dari Mahiru Ai",
        thumbnailUrl: thumbnailUrl,
        sourceUrl: sig,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak });
};

handler.command = /^ai$/i
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.register = true
handler.limit = true

export default handler