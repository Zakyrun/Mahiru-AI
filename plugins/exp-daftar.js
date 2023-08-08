/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	if (user.registered === true) throw `𝙺𝚊𝚖𝚞 𝚜𝚞𝚍𝚊𝚑 𝚖𝚎𝚗𝚍𝚊𝚏𝚝𝚊𝚛\n𝚊𝚙𝚊 𝚒𝚗𝚐𝚒𝚗 𝚖𝚎𝚗𝚍𝚊𝚏𝚝𝚊𝚛 𝚞𝚕𝚊𝚗𝚐? ${usedPrefix}unreg 90259a21exxxxxx`;
	if (!Reg.test(text)) throw `ᴋᴀʏᴀᴋ ɢɪɴɪ ʏᴀ ᴋᴀᴋ ᴄᴏɴᴛᴏʜ:\n*${usedPrefix}register zaky.18*`;
	let [_, name, splitter, age] = text.match(Reg);
	if (!name) throw 'Namanya mana bnjir (Alphanumeric)';
	if (!age) throw 'Umurnya mana aelah (Numeric)';
	age = parseInt(age);
	if (age > 120) throw 'Serius Lah Pantek.';
	if (age < 5) throw 'Bocil Asu.';
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	let balanceBonus = getRandomInt(1000, 10000);
	let limitBonus = getRandomInt(10, 20);
	let expBonus = getRandomInt(1000, 1000);

	m.reply(
		`
*❑ ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ sᴜᴋsᴇs!*

╭─「 ɪɴғᴏ 」
│ *ɴᴀᴍᴀ:* ${name}
│ *ᴜᴍᴜʀ:* ${age}
│ *ᴍᴏɴᴇʏ:* +${balanceBonus}
│ *ʟɪᴍɪᴛ:* +${limitBonus}
│ *ᴇxᴘ:* +${expBonus}
│ *sɴ:* ${sn}
╰────•
    `
	);
};

handler.help = ['register', 'daftar'].map((v) => v + ' <name>.<age>');
handler.tags = ['start'];
handler.command = /^(register|daftar)$/i;

export default handler

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}