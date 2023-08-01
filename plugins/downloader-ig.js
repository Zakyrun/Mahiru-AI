/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


import axios from 'axios'

let handler = async (m, { conn, text, command }) => {
  if (!text) {
    throw `*Example*: ${command} https://www.instagram.com/p/ABC123/`;
  }

  let url = encodeURIComponent(text);
  let apiKey = `Rs-AgesuXD`;
  let apiUrl = `https://api.itsrose.life/downloader/ig?url=${url}&apikey=${apiKey}`;

  try {
    let startTime = new Date();

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data.status === true) {
      let result = data.result[0];
      let caption = `🐱 *Sukses Mengambil:* ${(new Date() - startTime) / 1000} Detik`;
      conn.sendFile(m.chat, result.url, '', caption, m);
    } else {
      throw '🐱 Gagal mengunduh konten dari Instagram.';
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengunduh konten dari Instagram.');
    m.reply(`Detail Error:\n\n${error.message}`);
  }
};

handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

export default handler