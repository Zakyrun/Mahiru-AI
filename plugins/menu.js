/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import axios from 'axios'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let glb = global.db.data.users
  let name = conn.getName(m.sender);
  let regky = Object.keys(glb).length
  let time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  let author = 'Zaky iky';
  let greeting = '';

  if (new Date().getHours() >= 0 && new Date().getHours() < 4) {
    greeting = '👋 Good night';
  } else if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
    greeting = '👋 Good morning';
  } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
    greeting = '👋 Good afternoon';
  } else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
    greeting = '👋 Good evening';
  }
  
  let mainmenu = `ʜᴀɪ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴍᴀʜɪʀᴜ ᴀɪ ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ ᴢᴀᴋʏ.

ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇʙᴀɢᴀɪ *ᴇᴅᴜᴋᴀsɪ ᴘᴇʟᴀᴊᴀʀᴀɴ*, *ᴜɴᴅᴜʜᴀɴ ᴍᴇᴅɪᴀ*, *ɢᴀᴍᴇ*, *ᴘᴇɴᴊᴀɢᴀ ɢʀᴜᴘ*, ᴅᴀɴ ʟᴀɪɴɴʏᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ᴋᴀᴍᴜ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪ ʜᴀʀɪ-ʜᴀʀɪ:>

╭  ◦ ᴄʀᴇᴀᴛᴏʀ: *ImZaky*
│  ◦ ʏᴏᴜᴛᴜʙᴇ: *[Not]*
╰  ◦ ᴘʀᴇғɪx: *.*

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

┌ ◦ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇᴛɪᴋ: *.ᴠᴇʀɪғʏ*
│ ◦ ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ ᴍᴀʜɪʀᴜ ᴀɪ: *${regky}* 
└ ◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ: *.ᴀʟʟᴍᴇɴᴜ*

ʜᴀʀᴀᴘ ᴜɴᴛᴜᴋ ʙᴇʀɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ ʙᴏᴛ ᴀɢᴀʀ ᴍᴇɴɢᴇᴛᴀʜᴜɪ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ᴊɪᴋᴀ *ᴇʀʀᴏʀ/ʙᴀɴɴᴇᴅ*`;

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

  let thumbnailUrl = "https://telegra.ph/file/54aae240d8337b8c6af57.jpg";
  
  let sourceUrl = "https://sazumiviki.me";
  let wait = '```Loading completed```';

  const arr = [
    '```███ 40% *___*```',
    '```████ 60% *___*```',
    '```█████ 80% *___*```',
    '```██████ 100% *___*```',
    `${greeting} *${user.name}!*`
  ];
  
  const jam = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '✔️', ''];
  
  for (let i = 0; i < jam.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 300));
    await conn.sendMessage(m.chat, {
      react: {
        text: jam[i],
        key: m.key
      }
    });
  }

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });
  
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i]
        },
        contextInfo: { 
          mentionedJid: [m.sender]
        }
      }
    }, { quoted: fkontak });
  }
  
  await conn.sendMessage(m.chat, {
    text: mainmenu,
    contextInfo: {
      externalAdReply: {
        title: "Mahiru AI - KY",
        body: "Hai kak senang bisa membantu",
        thumbnailUrl: thumbnailUrl,
        sourceUrl: sig,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak });
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^menu$/i;

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}