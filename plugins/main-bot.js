import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(clara|Clara|bot|ping|p)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./mp3/clara.mp3",
	"./mp3/clara1.mp3",
	"./mp3/clara2.mp3",
	"./mp3/clara3.mp3",
	"./mp3/clara4.mp3",
];