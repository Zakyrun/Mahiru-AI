let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ Masukkan teks singkat\n\n📌 contoh  : *${usedPrefix + command}* MAHIRU`
	let too = `✳️ Pisahkan teks dengan menggunakan simbol *+* \n\n📌 contoh : \n*${usedPrefix + command}* MAHIRU *+* AI`
	
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'logo1':
		if (!text) throw tee;
		let chut = `https://oni-chan.my.id/api/canvas/kaneki?name=${encodeURIComponent(text)}&apikey=Y`;
		conn.sendFile(m.chat, chut, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'logo2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://oni-chan.my.id/api/canvas/nekosad?text1=${encodeURIComponent(a.trim())}&text2=${encodeURIComponent(b.trim())}&apikey=Y`;
		conn.sendFile(m.chat, loda, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'logo3':
		if (!text) throw tee;
		let cp = `https://oni-chan.my.id/api/canvas/loliGgo?name=${encodeURIComponent(text.trim())}&apikey=Y`;
		conn.sendFile(m.chat, cp, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'logo4': 
		if (!text) throw tee;
		let gandu = `https://oni-chan.my.id/api/canvas/gura?name=${encodeURIComponent(text)}&apikey=Y`;
		conn.sendFile(m.chat, gandu, 'logo.png', `Done Ya Kak >.<`, m);
		break;
		case 'logo5':
	if (!text) throw tee 
	let chu = global.API('https://api-fgmods.ddns.net', '/api/photooxy/naruto', { text }, 'apikey')
	conn.sendFile(m.chat, chu, 'logo.png', `Done Ya Kak >.<`, m)
	break
	case 'logo6': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	let lo = global.API('https://api-fgmods.ddns.net', '/api/photooxy/pubg', { text: c, text2: d}, 'apikey')
	conn.sendFile(m.chat, lo, 'logo.png', `Done Ya Kak >.<`, m)
	break 
	case 'logo7': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=haikalgans&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `Done Ya Kak >.<`, m);
	break 
	case 'logo8': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=haikalgans&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'logo9': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=haikalgans&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'logo10': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=haikalgans&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'logo11': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=haikalgans&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `Done Ya Kak >.<`, m)
	break 
	case 'logo12': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=haikalgans&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `Done Ya Kak >.<`, m);
	break;

	  default:
	} 
  };
  
  handler.help = ['logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6', 'logo7', 'logo8', 'logo9', 'logo10', 'logo11', 'logo12'];
  handler.tags = ['maker'];
  handler.command = /^(logo1|logo2|logo3|logo4|logo5|logo6|logo7|logo8|logo9|logo10|logo11|logo12)$/i;
  handler.limit = true
  
  export default handler;
  
