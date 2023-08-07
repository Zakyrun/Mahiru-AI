import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Baka|baka)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./mp3/baka.mp3",
"./mp3/baka1.mp3",
]