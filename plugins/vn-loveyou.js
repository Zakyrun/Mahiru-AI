import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${love.getRandom()}`, "lopyou.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|loveyou|love|lope| love you)$/i;
handler.command = new RegExp();

export default handler;


const love = [
"./mp3/lopyou.mp3",
"./mp3/lopyou1.mp3"
]
