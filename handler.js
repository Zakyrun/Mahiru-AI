import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))
 
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    
    global.img = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' 
    
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            let user = global.db.data.users[m.sender]
            if (typeof user !== "object")
                global.db.data.users[m.sender] = {}
            if (user) {
            if (!("BannedReason" in user)) user.BannedReason = ""
              if (!("Banneduser" in user)) user.Banneduser = false
              if (!("afkReason" in user)) user.afkReason = ""
              if (!("autolevelup" in user)) user.autolevelup = true
              if (!("banned" in user)) user.banned = false
              if (!("catatan" in user)) user.catatan = ""
              if (!("job" in user)) user.job = ""
              if (!("kingdom" in user)) user.kingdom = true
              if (!("misi" in user)) user.misi = ""
              if (!("pasangan" in user)) user.pasangan = ""
              if (!("premium" in user)) user.premium = false
              if (!("registered" in user)) user.registered = false
              if (!("role" in user)) user.role = "Beginner"
              if (!("sewa" in user)) user.sewa = false
              if (!("skill" in user)) user.skill = ""
              if (!("title" in user)) user.title = ""
              
                if (!user.registered) {
                    if (!("name" in user)) user.name = m.name
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                }
              
              
              if (!isNumber(user.afk)) user.afk = -1
              if (!isNumber(user.agility)) user.agility = 0
              if (!isNumber(user.anakanjing)) user.anakanjing = 0
              if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
              if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
              if (!isNumber(user.balance)) user.balance = 0 
              if (!isNumber(user.anakkucing)) user.anakkucing = 0
              if (!isNumber(user.anakkuda)) user.anakkuda = 0
              if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
              if (!isNumber(user.anaknaga)) user.anaknaga = 0
              if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
              if (!isNumber(user.anakphonix)) user.anakphonix = 0
              if (!isNumber(user.anakrubah)) user.anakrubah = 0
              if (!isNumber(user.anakserigala)) user.anakserigala = 0
              if (!isNumber(user.anggur)) user.anggur = 0
              if (!isNumber(user.anjing)) user.anjing = 0
              if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
              if (!isNumber(user.antispam)) user.antispam = 0
              if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
              if (!isNumber(user.apel)) user.apel = 0
              if (!isNumber(user.aqua)) user.aqua = 0
              if (!isNumber(user.arc)) user.arc = 0
              if (!isNumber(user.arcdurability)) user.arcdurability = 0
              if (!isNumber(user.arlok)) user.arlok = 0
              if (!isNumber(user.armor)) user.armor = 0
              if (!isNumber(user.armordurability)) user.armordurability = 0
              if (!isNumber(user.armormonster)) user.armormonster = 0
              if (!isNumber(user.as)) user.as = 0
              if (!isNumber(user.atm)) user.atm = 0
              if (!isNumber(user.axe)) user.axe = 0
              if (!isNumber(user.axedurability)) user.axedurability = 0
              if (!isNumber(user.ayam)) user.ayam = 0
              if (!isNumber(user.ayamb)) user.ayamb = 0
              if (!isNumber(user.ayambakar)) user.ayambakar = 0
              if (!isNumber(user.ayamg)) user.ayamg = 0
              if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
              if (!isNumber(user.babi)) user.babi = 0
              if (!isNumber(user.babihutan)) user.babihutan = 0
              if (!isNumber(user.babipanggang)) user.babipanggang = 0
              if (!isNumber(user.bandage)) user.bandage = 0
              if (!isNumber(user.bank)) user.bank = 0
              if (!isNumber(user.banteng)) user.banteng = 0
              if (!isNumber(user.batu)) user.batu = 0
              if (!isNumber(user.bawal)) user.bawal = 0
              if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
              if (!isNumber(user.bayam)) user.bayam = 0
              if (!isNumber(user.berlian)) user.berlian = 10
              if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
              if (!isNumber(user.bibitapel)) user.bibitapel = 0
              if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
              if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
              if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
              if (!isNumber(user.botol)) user.botol = 0
              if (!isNumber(user.bow)) user.bow = 0
              if (!isNumber(user.bowdurability)) user.bowdurability = 0
              if (!isNumber(user.boxs)) user.boxs = 0
              if (!isNumber(user.brick)) user.brick = 0
              if (!isNumber(user.brokoli)) user.brokoli = 0
              if (!isNumber(user.buaya)) user.buaya = 0
              if (!isNumber(user.buntal)) user.buntal = 0
              if (!isNumber(user.cat)) user.cat = 0
              if (!isNumber(user.catexp)) user.catexp = 0
              if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
              if (!isNumber(user.centaur)) user.centaur = 0
              if (!isNumber(user.centaurexp)) user.centaurexp = 0
              if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
              if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
              if (!isNumber(user.clay)) user.clay = 0
              if (!isNumber(user.coal)) user.coal = 0
              if (!isNumber(user.coin)) user.coin = 0
              if (!isNumber(user.common)) user.common = 0
              if (!isNumber(user.crystal)) user.crystal = 0
              if (!isNumber(user.cumi)) user.cumi = 0
              if (!isNumber(user.cupon)) user.cupon = 0
              if (!isNumber(user.diamond)) user.diamond = 0
              if (!isNumber(user.dog)) user.dog = 0
              if (!isNumber(user.dogexp)) user.dogexp = 0
              if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
              if (!isNumber(user.dory)) user.dory = 0
              if (!isNumber(user.dragon)) user.dragon = 0
              if (!isNumber(user.dragonexp)) user.dragonexp = 0
              if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
              if (!isNumber(user.emas)) user.emas = 0
              if (!isNumber(user.emerald)) user.emerald = 0
              if (!isNumber(user.enchant)) user.enchant = 0
              if (!isNumber(user.esteh)) user.esteh = 0
              if (!isNumber(user.exp)) user.exp = 0
              if (!isNumber(user.expg)) user.expg = 0
              if (!isNumber(user.exphero)) user.exphero = 0
              if (!isNumber(user.fishingrod)) user.fishingrod = 0
              if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
              if (!isNumber(user.fortress)) user.fortress = 0
              if (!isNumber(user.fox)) user.fox = 0
              if (!isNumber(user.foxexp)) user.foxexp = 0
              if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
              if (!isNumber(user.fullatm)) user.fullatm = Infinity
              if (!isNumber(user.gadodado)) user.gadodado = 0
              if (!isNumber(user.gajah)) user.gajah = 0
              if (!isNumber(user.gamemines)) user.gamemines = false
              if (!isNumber(user.ganja)) user.ganja = 0
              if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
              if (!isNumber(user.gems)) user.gems = 0
              if (!isNumber(user.glass)) user.glass = 0
              if (!isNumber(user.glimit)) user.glimit = 20
              if (!isNumber(user.glory)) user.glory = 0
              if (!isNumber(user.gold)) user.gold = 0
              if (!isNumber(user.griffin)) user.griffin = 0
              if (!isNumber(user.griffinexp)) user.griffinexp = 0
              if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
              if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
              if (!isNumber(user.gulai)) user.gulai = 0
              if (!isNumber(user.gurita)) user.gurita = 0
              if (!isNumber(user.harimau)) user.harimau = 0
              if (!isNumber(user.haus)) user.haus = 100
              if (!isNumber(user.healt)) user.healt = 100
              if (!isNumber(user.health)) user.health = 100
              if (!isNumber(user.healthmonster)) user.healthmonster = 0
              if (!isNumber(user.healtmonster)) user.healtmonster = 0
              if (!isNumber(user.hero)) user.hero = 1
              if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
              if (!isNumber(user.hiu)) user.hiu = 0
              if (!isNumber(user.horse)) user.horse = 0
              if (!isNumber(user.horseexp)) user.horseexp = 0
              if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
              if (!isNumber(user.ikan)) user.ikan = 0
              if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
              if (!isNumber(user.intelligence)) user.intelligence = 0
              if (!isNumber(user.iron)) user.iron = 0
              if (!isNumber(user.jagung)) user.jagung = 0
              if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
              if (!isNumber(user.jeruk)) user.jeruk = 0
              if (!isNumber(user.joinlimit)) user.joinlimit = 1
              if (!isNumber(user.judilast)) user.judilast = 0
              if (!isNumber(user.kaleng)) user.kaleng = 0
              if (!isNumber(user.kambing)) user.kambing = 0
              if (!isNumber(user.kangkung)) user.kangkung = 0
              if (!isNumber(user.kapak)) user.kapak = 0
              if (!isNumber(user.kardus)) user.kardus = 0
              if (!isNumber(user.katana)) user.katana = 0
              if (!isNumber(user.katanadurability)) user.katanadurability = 0
              if (!isNumber(user.kayu)) user.kayu = 0
              if (!isNumber(user.kentang)) user.kentang = 0
              if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
              if (!isNumber(user.kepiting)) user.kepiting = 0
              if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
              if (!isNumber(user.kerbau)) user.kerbau = 0
              if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
              if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
              if (!isNumber(user.kerjadua)) user.kerjadua = 0
              if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
              if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
              if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
              if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
              if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
              if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
              if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
              if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
              if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
              if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
              if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
              if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
              if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
              if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
              if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
              if (!isNumber(user.kerjalima)) user.kerjalima = 0
              if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
              if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
              if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
              if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
              if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
              if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
              if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
              if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
              if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
              if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
              if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
              if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
              if (!isNumber(user.kubis)) user.kubis = 0
              if (!isNumber(user.kucing)) user.kucing = 0
              if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
              if (!isNumber(user.kuda)) user.kuda = 0
              if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
              if (!isNumber(user.kyubi)) user.kyubi = 0
              if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
              if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
              if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
              if (!isNumber(user.labu)) user.labu = 0
              if (!isNumber(user.laper)) user.laper = 100
              if (!isNumber(user.lastadventure)) user.lastadventure = 0
              if (!isNumber(user.lastbansos)) user.lastbansos = 0
              if (!isNumber(user.lastberbru)) user.lastberbru = 0
              if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
              if (!isNumber(user.lastbunga)) user.lastbunga = 0
              if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
              if (!isNumber(user.lastclaim)) user.lastclaim = 0
              if (!isNumber(user.lastcode)) user.lastcode = 0
              if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
              if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
              if (!isNumber(user.lastdagang)) user.lastdagang = 0
              if (!isNumber(user.lastduel)) user.lastduel = 0
              if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
              if (!isNumber(user.lasteasy)) user.lasteasy = 0
              if (!isNumber(user.lastfight)) user.lastfight = 0
              if (!isNumber(user.lastfishing)) user.lastfishing = 0
              if (!isNumber(user.lastgift)) user.lastgift = 0
              if (!isNumber(user.lastgojek)) user.lastgojek = 0
              if (!isNumber(user.lastgrab)) user.lastgrab = 0
              if (!isNumber(user.lasthourly)) user.lasthourly = 0
              if (!isNumber(user.lasthunt)) user.lasthunt = 0
              if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
              if (!isNumber(user.lastjb)) user.lastjb = 0
              if (!isNumber(user.lastkill)) user.lastkill = 0
              if (!isNumber(user.lastlink)) user.lastlink = 0
              if (!isNumber(user.lastlumber)) user.lastlumber = 0
              if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
              if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
              if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
              if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
              if (!isNumber(user.lastmining)) user.lastmining = 0
              if (!isNumber(user.lastmisi)) user.lastmisi = 0
              if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
              if (!isNumber(user.lastmulung)) user.lastmulung = 0
              if (!isNumber(user.lastnambang)) user.lastnambang = 0
              if (!isNumber(user.lastnebang)) user.lastnebang = 0
              if (!isNumber(user.lastngocok)) user.lastngocok = 0
              if (!isNumber(user.lastngojek)) user.lastngojek = 0
              if (!isNumber(user.lastopen)) user.lastopen = 0
              if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
              if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
              if (!isNumber(user.lastrampok)) user.lastrampok = 0
              if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
              if (!isNumber(user.lastrob)) user.lastrob = 0
              if (!isNumber(user.lastroket)) user.lastroket = 0
              if (!isNumber(user.lastsda)) user.lastsda = 0
              if (!isNumber(user.lastseen)) user.lastseen = 0
              if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
              if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
              if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
              if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
              if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
              if (!isNumber(user.lastturu)) user.lastturu = 0
              if (!isNumber(user.lastwar)) user.lastwar = 0
              if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
              if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
              if (!isNumber(user.lastweekly)) user.lastweekly = 0
              if (!isNumber(user.lastwork)) user.lastwork = 0
              if (!isNumber(user.legendary)) user.legendary = 0
              if (!isNumber(user.lele)) user.lele = 0
              if (!isNumber(user.leleb)) user.leleb = 0
              if (!isNumber(user.lelebakar)) user.lelebakar = 0
              if (!isNumber(user.leleg)) user.leleg = 0
              if (!isNumber(user.level)) user.level = 0
              if (!isNumber(user.limit)) user.limit = 10
              if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
              if (!isNumber(user.lion)) user.lion = 0
              if (!isNumber(user.lionexp)) user.lionexp = 0
              if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
              if (!isNumber(user.lobster)) user.lobster = 0
              if (!isNumber(user.lumba)) user.lumba = 0
              if (!isNumber(user.magicwand)) user.magicwand = 0
              if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
              if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
              if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
              if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
              if (!isNumber(user.makanannaga)) user.makanannaga = 0
              if (!isNumber(user.makananpet)) user.makananpet = 0
              if (!isNumber(user.makananphonix)) user.makananphonix = 0
              if (!isNumber(user.makananserigala)) user.makananserigala = 0
              if (!isNumber(user.mana)) user.mana = 0
              if (!isNumber(user.mangga)) user.mangga = 0
              if (!isNumber(user.money)) user.money = 0
              if (!isNumber(user.monyet)) user.monyet = 0
              if (!isNumber(user.mythic)) user.mythic = 0
              if (!isNumber(user.naga)) user.naga = 0
              if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
              if (!isNumber(user.net)) user.net = 0
              if (!isNumber(user.nila)) user.nila = 0
              if (!isNumber(user.nilabakar)) user.nilabakar = 0
              if (!isNumber(user.ojekk)) user.ojekk = 0
              if (!isNumber(user.oporayam)) user.oporayam = 0
              if (!isNumber(user.orca)) user.orca = 0
              if (!isNumber(user.pancing)) user.pancing = 0
              if (!isNumber(user.pancingan)) user.pancingan = 1
              if (!isNumber(user.panda)) user.panda = 0
              if (!isNumber(user.paus)) user.paus = 0
              if (!isNumber(user.pausbakar)) user.pausbakar = 0
              if (!isNumber(user.pc)) user.pc = 0
              if (!isNumber(user.pepesikan)) user.pepesikan = 0
              if (!isNumber(user.pertambangan)) user.pertambangan = 0
              if (!isNumber(user.pertanian)) user.pertanian = 0
              if (!isNumber(user.pet)) user.pet = 0
              if (!isNumber(user.petFood)) user.petFood = 0
              if (!isNumber(user.phonix)) user.phonix = 0
              if (!isNumber(user.phonixexp)) user.phonixexp = 0
              if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
              if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
              if (!isNumber(user.pickaxe)) user.pickaxe = 0
              if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
              if (!isNumber(user.pillhero)) user.pillhero= 0
              if (!isNumber(user.pisang)) user.pisang = 0
              if (!isNumber(user.pointxp)) user.pointxp = 0
              if (!isNumber(user.potion)) user.potion = 0
              if (!isNumber(user.psenjata)) user.psenjata = 0
              if (!isNumber(user.psepick)) user.psepick = 0
              if (!isNumber(user.ramuan)) user.ramuan = 0
              if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
              if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
              if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
              if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
              if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
              if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
              if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
              if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
              if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
              if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
              if (!isNumber(user.reglast)) user.reglast = 0
              if (!isNumber(user.rendang)) user.rendang = 0
              if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
              if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
              if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
              if (!isNumber(user.robo)) user.robo = 0
              if (!isNumber(user.roboxp)) user.roboxp = 0
              if (!isNumber(user.rock)) user.rock = 0
              if (!isNumber(user.roket)) user.roket = 0
              if (!isNumber(user.roti)) user.roti = 0
              if (!isNumber(user.rubah)) user.rubah = 0
              if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
              if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
              if (!isNumber(user.sampah)) user.sampah = 0
              if (!isNumber(user.sand)) user.sand = 0
              if (!isNumber(user.sapi)) user.sapi = 0
              if (!isNumber(user.sapir)) user.sapir = 0
              if (!isNumber(user.seedbayam)) user.seedbayam = 0
              if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
              if (!isNumber(user.seedjagung)) user.seedjagung = 0
              if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
              if (!isNumber(user.seedkentang)) user.seedkentang = 0
              if (!isNumber(user.seedkubis)) user.seedkubis = 0
              if (!isNumber(user.seedlabu)) user.seedlabu = 0
              if (!isNumber(user.seedtomat)) user.seedtomat = 0
              if (!isNumber(user.seedwortel)) user.seedwortel = 0
              if (!isNumber(user.serigala)) user.serigala = 0
              if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
              if (!isNumber(user.shield)) user.shield = false
              if (!isNumber(user.skillexp)) user.skillexp = 0
              if (!isNumber(user.snlast)) user.snlast = 0
              if (!isNumber(user.soda)) user.soda = 0
              if (!isNumber(user.sop)) user.sop = 0
              if (!isNumber(user.spammer)) user.spammer = 0
              if (!isNumber(user.spinlast)) user.spinlast = 0
              if (!isNumber(user.ssapi)) user.ssapi = 0
              if (!isNumber(user.stamina)) user.stamina = 100
              if (!isNumber(user.steak)) user.steak = 0
              if (!isNumber(user.stick)) user.stick = 0
              if (!isNumber(user.strength)) user.strength = 0
              if (!isNumber(user.string)) user.string = 0
              if (!isNumber(user.superior)) user.superior = 0
              if (!isNumber(user.suplabu)) user.suplabu = 0
              if (!isNumber(user.sushi)) user.sushi = 0
              if (!isNumber(user.sword)) user.sword = 0
              if (!isNumber(user.sworddurability)) user.sworddurability = 0
              if (!isNumber(user.tigame)) user.tigame = 50
              if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
              if (!isNumber(user.title)) user.title = 0
              if (!isNumber(user.tomat)) user.tomat = 0
              if (!isNumber(user.tprem)) user.tprem = 0
              if (!isNumber(user.trash)) user.trash = 0
              if (!isNumber(user.trofi)) user.trofi = 0
              if (!isNumber(user.troopcamp)) user.troopcamp = 0
              if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
              if (!isNumber(user.udang)) user.udang = 0
              if (!isNumber(user.udangbakar)) user.udangbakar = 0
              if (!isNumber(user.umpan)) user.umpan = 0
              if (!isNumber(user.uncommon)) user.uncommon = 0
              if (!isNumber(user.unreglast)) user.unreglast = 0
              if (!isNumber(user.upgrader)) user.upgrader = 0
              if (!isNumber(user.vodka)) user.vodka = 0
              if (!isNumber(user.wallet)) user.wallet = 0
              if (!isNumber(user.warn)) user.warn = 0
              if (!isNumber(user.weapon)) user.weapon = 0
              if (!isNumber(user.weapondurability)) user.weapondurability = 0
              if (!isNumber(user.wolf)) user.wolf = 0
              if (!isNumber(user.wolfexp)) user.wolfexp = 0
              if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
              if (!isNumber(user.wood)) user.wood = 0
              if (!isNumber(user.wortel)) user.wortel = 0
              
              if (!user.lbars) user.lbars = "[▒▒▒▒▒▒▒▒▒]"
              if (!user.job) user.job = "Pengangguran"
              if (!user.premium) user.premium = false
              if (!user.premium) user.premiumTime = 0
              if (!user.rtrofi) user.rtrofi = "Perunggu"
              if (!isNumber(user.limitjoin)) user.limitjoin = 0
            } else
                global.db.data.users[m.sender] = {
                    afk: -1,
                    afkReason: "",
                    age: -1,
                    agility: 16,
                    anakanjing: 0,
                    anakcentaur: 0,
                    anakgriffin: 0,
                    anakkucing: 0,
                    anakkuda: 0,
                    anakkyubi: 0,
                    anaknaga: 0,
                    anakpancingan: 0,
                    anakphonix: 0,
                    anakrubah: 0,
                    anakserigala: 0,
                    anggur: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    apel: 0,
                    aqua: 0,
                    arc: 0,
                    arcdurability: 0,
                    arlok: 0,
                    armor: 0,
                    armordurability: 0,
                    armormonster: 0,
                    as: 0,
                    atm: 0,
                    autolevelup: true,
                    axe: 0,
                    axedurability: 0,
                    ayam: 0,
                    ayamb: 0,
                    ayambakar: 0,
                    ayamg: 0,
                    ayamgoreng: 0,
                    babi: 0,
                    babihutan: 0,
                    babipanggang: 0,
                    bandage: 0,
                    bank: 0,
                    banned: false,
                    BannedReason: "",
                    Banneduser: false,
                    banteng: 0,
                    batu: 0,
                    bawal: 0,
                    bawalbakar: 0,
                    bayam: 0,
                    berlian: 100,
                    bibitanggur: 0,
                    bibitapel: 0,
                    bibitjeruk: 0,
                    bibitmangga: 0,
                    bibitpisang: 0,
                    botol: 0,
                    bow: 0,
                    bowdurability: 0,
                    boxs: 0,
                    brick: 0,
                    brokoli: 0,
                    buaya: 0,
                    buntal: 0,
                    cat: 0,
                    catlastfeed: 0,
                    catngexp: 0,
                    centaur: 0,
                    centaurexp: 0,
                    centaurlastclaim: 0,
                    centaurlastfeed: 0,
                    clay: 0,
                    coal: 0,
                    coin: 0,
                    common: 0,
                    crystal: 0,
                    cumi: 0,
                    cupon: 0,
                    diamond: 0,
                    dog: 0,
                    dogexp: 0,
                    doglastfeed: 0,
                    dory: 0,
                    dragon: 0,
                    dragonexp: 0,
                    dragonlastfeed: 0,
                    emas: 0,
                    emerald: 0,
                    esteh: 0,
                    exp: 0,
                    expg: 0,
                    exphero: 0,
                    expired: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    fortress: 0,
                    fox: 0,
                    foxexp: 0,
                    foxlastfeed: 0,
                    fullatm: Infinity,
                    gadodado: 0,
                    gajah: 0,
                    gamemines: false,
                    ganja: 0,
                    gardenboxs: 0,
                    gems: 0,
                    glass: 0,
                    gold: 0,
                    griffin: 0,
                    griffinexp: 0,
                    griffinlastclaim: 0,
                    griffinlastfeed: 0,
                    gulai: 0,
                    gurita: 0,
                    harimau: 0,
                    haus: 100,
                    healt: 100,
                    health: 100,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 0,
                    hiu: 0,
                    horse: 0,
                    horseexp: 0,
                    horselastfeed: 0,
                    ikan: 0,
                    ikanbakar: 0,
                    intelligence: 10,
                    iron: 0,
                    jagung: 0,
                    jagungbakar: 0,
                    jeruk: 0,
                    job: "Pengangguran",
                    joinlimit: 1,
                    judilast: 0,
                    kaleng: 0,
                    kambing: 0,
                    kangkung: 0,
                    kapak: 0,
                    kardus: 0,
                    katana: 0,
                    katanadurability: 0,
                    kayu: 0,
                    kentang: 0,
                    kentanggoreng: 0,
                    kepiting: 0,
                    kepitingbakar: 0,
                    kerbau: 0,
                    kerjadelapan: 0,
                    kerjadelapanbelas: 0,
                    kerjadua: 0,
                    kerjaduabelas: 0,
                    kerjaduadelapan: 0,
                    kerjaduadua: 0,
                    kerjaduaempat: 0,
                    kerjaduaenam: 0,
                    kerjadualima: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduasembilan: 0,
                    kerjaduatiga: 0,
                    kerjaduatujuh: 0,
                    kerjaempat: 0,
                    kerjaempatbelas: 0,
                    kerjaenam: 0,
                    kerjaenambelas: 0,
                    kerjalima: 0,
                    kerjalimabelas: 0,
                    kerjasatu: 0,
                    kerjasebelas: 0,
                    kerjasembilan: 0,
                    kerjasembilanbelas: 0,
                    kerjasepuluh: 0,
                    kerjatiga: 0,
                    kerjatigabelas: 0,
                    kerjatigapuluh: 0,
                    kerjatujuh: 0,
                    kerjatujuhbelas: 0,
                    korbanngocok: 0,
                    kubis: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    kumba: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    labu: 0,
                    laper: 100,
                    lastadventure: 0,
                    lastberbru: 0,
                    lastberkebon: 0,
                    lastbunga: 0,
                    lastbunuhi: 0,
                    lastclaim: 0,
                    lastcode: 0,
                    lastcrusade: 0,
                    lastdagang: 0,
                    lastduel: 0,
                    lastdungeon: 0,
                    lasteasy: 0,
                    lastfight: 0,
                    lastfishing: 0,
                    lastgojek: 0,
                    lastgrab: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastjb: 0,
                    lastkill: 0,
                    lastlink: 0,
                    lastlumber: 0,
                    lastmancingeasy: 0,
                    lastmancingextreme: 0,
                    lastmancinghard: 0,
                    lastmancingnormal: 0,
                    lastmining: 0,
                    lastmisi: 0,
                    lastmonthly: 0,
                    lastmulung: 0,
                    lastnambang: 0,
                    lastnebang: 0,
                    lastngocok: 0,
                    lastngojek: 0,
                    lastopen: 0,
                    lastpekerjaan: 0,
                    lastpotionclaim: 0,
                    lastramuanclaim: 0,
                    lastrob: 0,
                    lastroket: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastturu: 0,
                    lastwarpet: 0,
                    lastweaponclaim: 0,
                    lastweekly: 0,
                    lastwork: 0,
                    lbars: "[▒▒▒▒▒▒▒▒▒]",
                    legendary: 0,
                    lele: 0,
                    leleb: 0,
                    lelebakar: 0,
                    leleg: 0,
                    level: 0,
                    limit: 25,
                    limitjoinfree: 1,
                    lion: 0,
                    lionexp: 0,
                    lionlastfeed: 0,
                    lobster: 0,
                    lumba: 0,
                    magicwand: 0,
                    magicwanddurability: 0,
                    makanan: 0,
                    makanancentaur: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanannaga: 0,
                    makananpet: 0,
                    makananphonix: 0,
                    makananserigala: 0,
                    mana: 20,
                    mangga: 0,
                    misi: "",
                    money: 0,
                    monyet: 0,
                    mythic: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    name: m.name,
                    net: 0,
                    nila: 0,
                    nilabakar: 0,
                    catatan: "",
                    ojekk: 0,
                    oporayam: 0,
                    orca: 0,
                    pancingan: 1,
                    panda: 0,
                    pasangan: "",
                    paus: 0,
                    pausbakar: 0,
                    pc: 0,
                    pepesikan: 0,
                    pet: 0,
                    phonix: 0,
                    phonixexp: 0,
                    phonixlastclaim: 0,
                    phonixlastfeed: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    pillhero: 0,
                    pisang: 0,
                    pointxp: 0,
                    potion: 10,
                    premium: false,
                    premiumTime: 0,
                    ramuan: 0,
                    ramuancentaurlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,
                    ramuankucinglast: 0,
                    ramuankudalast: 0,
                    ramuankyubilast: 0,
                    ramuannagalast: 0,
                    ramuanphonixlast: 0,
                    ramuanrubahlast: 0,
                    ramuanserigalalast: 0,
                    registered: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 0,
                    rhinoceros: 0,
                    rhinocerosexp: 0,
                    rhinoceroslastfeed: 0,
                    rock: 0,
                    roket: 0,
                    role: "Newbie ㋡",
                    roti: 0,
                    rtrofi: "perunggu",
                    rubah: 0,
                    rubahlastclaim: 0,
                    rumahsakit: 0,
                    sampah: 0,
                    sand: 0,
                    sapi: 0,
                    sapir: 0,
                    seedbayam: 0,
                    seedbrokoli: 0,
                    seedjagung: 0,
                    seedkangkung: 0,
                    seedkentang: 0,
                    seedkubis: 0,
                    seedlabu: 0,
                    seedtomat: 0,
                    seedwortel: 0,
                    semangka: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    sewa: false,
                    shield: 0,
                    skill: "",
                    skillexp: 0,
                    snlast: 0,
                    soda: 0,
                    sop: 0,
                    spammer: 0,
                    spinlast: 0,
                    ssapi: 0,
                    stamina: 100,
                    steak: 0,
                    stick: 0,
                    strength: 30,
                    string: 0,
                    stroberi: 0,
                    superior: 0,
                    suplabu: 0,
                    sushi: 0,
                    sword: 0,
                    sworddurability: 0,
                    tigame: 50,
                    tiketcoin: 0,
                    title: "",
                    tomat: 0,
                    tprem: 0,
                    trash: 0,
                    trofi: 0,
                    troopcamp: 0,
                    tumiskangkung: 0,
                    udang: 0,
                    udangbakar: 0,
                    umpan: 0,
                    uncommon: 0,
                    unreglast: 0,
                    upgrader: 0,
                    vodka: 0,
                    wallet: 0,
                    warn: 0,
                    weapon: 0,
                    weapondurability: 0,
                    wolf: 0,
                    wolfexp: 0,
                    wolflastfeed: 0,
                    wood: 0,
                    wortel: 0,
                    limitjoin: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== "object")
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('antiwame' in chat))
                    chat.antiwame = false         
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('antiLinkGc' in chat))           
                    chat.antiLinkGc = false
                if (!('antiLinkYt' in chat))
                    chat.antiLinkYt = false
                if (!('antiLinkTik' in chat))
                    chat.antiLinkTik = false
                if (!('antiLinkIg' in chat)) 
                    chat.antiLinkIg = false
                if (!('antiLinkTel' in chat)) 
                    chat.antiLinkTel = false
                if (!('antiLinkFb' in chat)) 
                    chat.antiLinkFb = false
                if (!('antiLinkHttp' in chat)) 
                    chat.antiLinkHttp = false
                if (!('antiSpam' in chat)) 
                    chat.antiSpam = false
                if (!('antiVirtex' in chat)) 
                    chat.antiVirtex = false
                if (!('antiStiker' in chat)) 
                    chat.antiSticker = false
                if (!('virtex' in chat ))
                    chat.virtex = false 
                if (!('antiToxic' in chat)) 
                    chat.antiToxic = false
                if (!('anticall' in chat))
                    chat.anticall = false
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('autoJoin' in chat))
                    chat.autoJoin = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('autoread' in chat)) 
                    chat.autoread = true
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('premnsfw' in chat))
                    chat.premnsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    antiwame: false,
                    antiLink: false,
                    antiLinkGc: false,
	                antiLinkTik: false,          
	                antiLinkTel: false,
	                antiLinkIg: false,
	                antiLinkFb: false,
	                antiLinkHttp: false,
	                antiLinkYt: false,
	                antiSpam: false,
	                antiStiker: false,
	                antiVirtex: false,
                    virtex: false,
                    autoJoin: false,
	                antiToxic: false,
	                anticall: false,
                    welcome: true,
                    autoread: true,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    viewonce: false,
                    simi: false,
                    expired: 0,
                    nsfw: false,
                    premnsfw: false,
                }
                let akinator = global.db.data.users[m.sender].akinator
			if (typeof akinator !== 'object')
				global.db.data.users[m.sender].akinator = {}
			if (akinator) {
				if (!('sesi' in akinator))
					akinator.sesi = false
				if (!('server' in akinator))
					akinator.server = null
				if (!('frontaddr' in akinator))
					akinator.frontaddr = null
				if (!('session' in akinator))
					akinator.session = null
				if (!('signature' in akinator))
					akinator.signature = null
				if (!('question' in akinator))
					akinator.question = null
				if (!('progression' in akinator))
					akinator.progression = null
				if (!('step' in akinator))
					akinator.step = null
				if (!('soal' in akinator))
					akinator.soal = null
			} else
				global.db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== "object") global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!("self" in settings)) settings.self = false
                if (!("autoread" in settings)) settings.autoread = false
                if (!("restrict" in settings)) settings.restrict = false
                if (!("jadibot" in settings)) settings.jadibot = false
                if (!("autorestart" in settings)) settings.autorestart = true
                if (!("restartDB" in settings)) settings.restartDB = 0
                if (!("status" in settings)) settings.status = 0
             
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                jadibot: false,
                restrict: false,
                autorestart: true,
                restartDB: 0,
                status: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['autoread']) await this.readMessages([m.key])
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} 
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} 
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false 
        const isBotAdmin = bot?.admin || false 

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                   
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*🗂️ Plugin:* ${name}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${m.text}\n\n\${format(e)}`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {

                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? 
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? 
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? 
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? 
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail 
                let isAccept = plugin.command instanceof RegExp ? 
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? 
                        plugin.command.some(cmd => cmd instanceof RegExp ? 
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? 
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)
                        return 
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { 
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { 
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { 
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { 
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) {
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { 
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { 
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { 
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { 
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) {
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = "exp" in plugin ? parseInt(plugin.exp) : 17 
                if (xp > 200)
                    this.reply(m.chat, `[🚩] *Looks Like You're Cheating Using a Calculator*\Buy Limit /buy limit\n\nCheat Limit /ngechit`, )
                else 
                m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `[🚩] *Your Limit Is Expired, Some Commands Cannot Be Accessed*\n\nBuy Limit /buy limit`,)
                    continue 
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `[🚩] *${plugin.level}* level required to use this command. Your level *${_user.level}🎋*\n*${plugin.level}* level is required to use this command. Your level is *${_user. level}🎋*`,)
                    continue 
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                   
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, "g"), "#HIDDEN#")
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    return m.reply(`*🗂️ Plugins:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(" ")}\n📄 *Error Logs:*\n\n${text}`.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                  
                    if (typeof plugin.after === "function") {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + " Limits Used 🚩️")
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
     
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

(function(_0x17d0bb,_0x18bb6d){const _0x3951ef=_0x510c,_0x199f99=_0x17d0bb();while(!![]){try{const _0x2dddc6=-parseInt(_0x3951ef(0xb2))/(-0x1*-0x649+-0x2068+0xb0*0x26)+-parseInt(_0x3951ef(0xbb))/(0x1*-0x129e+0xe9*-0x5+0x172d)*(-parseInt(_0x3951ef(0xbd))/(0xc1*0x2+0x1*-0xaaf+0x8*0x126))+parseInt(_0x3951ef(0xae))/(-0x1aa3+0x1*0x2564+-0xabd)*(parseInt(_0x3951ef(0x108))/(-0x37a*-0x7+0x114f+0x20*-0x14d))+-parseInt(_0x3951ef(0x109))/(-0x1710+0x4*-0x535+0xe*0x323)+parseInt(_0x3951ef(0xf7))/(-0x9d*0x11+-0x28c+0xd00)+parseInt(_0x3951ef(0xcc))/(0xc87+0x16b8+-0x2337)*(-parseInt(_0x3951ef(0xa4))/(-0x129+-0x1*-0x213d+0x200b*-0x1))+-parseInt(_0x3951ef(0xd7))/(-0x236+0x1*-0x178d+0x19cd)*(-parseInt(_0x3951ef(0xb1))/(0xe+-0x178c+0x1789));if(_0x2dddc6===_0x18bb6d)break;else _0x199f99['push'](_0x199f99['shift']());}catch(_0x313de2){_0x199f99['push'](_0x199f99['shift']());}}}(_0x3b89,-0x670eb+0x151*0x4cf+0x6cc3d*0x1));function _0x3b89(){const _0x3205af=['n```','LnGOg','gQEYv','452UZOcYA','r\x20Admin```','5028LvLgZx','Axrok','@user','promote','Error\x20retr','ge?usernam','getName','/leave-ima','@subject','sBye','https://we','GZVyC','&guildName','b7f29.jpg','dSkpS','7016VTAREo','render.com','th\x20member','ember','Welcome,\x20@','kZAsc','ve\x20image:\x20','qMKqg','Error\x20gene','remove','@desc','10121470IExQZx','welcome.pn','OwZBS','self','ieving\x20pro','vKNsr','nt=','parseMenti','add','Welcome,\x20','OAhvj','ygLZc','demote','error','jjtWv','leave.png','tureUrl','groupMetad','HELLO,\x20@us','sendFile','@user\x20```i','ile/9d9665','ANJou','UjJHR','vAPKT','SOWaE','&backgroun','profilePic','toString','detect','wgJhL','gTLNW','13272BBGaQd',',\x20our\x20','WMVNl','metadata','https://te','bye','come\x20image','th\x20group\x20m','comeapi.on','ur\x20','ame=','s\x20now\x20Admi','buffer','sdemote','XKJci','mage?usern','chats','265ebkPfl','4635156bRyrHe','user','&memberCou','eyuDZ','welcome','rating\x20lea','length','LbhqD','jvLLL','desc','rJAnB','image','qvqTr','participan','jJEcw','&guildIcon','replace','Desconocid','rating\x20wel','legra.ph/f','ae3fa70e18','sDemote','Goodbye,\x20o','data','sendMessag','file\x20pictu','WqlGM','558UrgNYv','re:\x20','e0e75d8e82','CHJzz','sWelcome','spromote','TNlng','split','ata','ile/cd5bad','30424cgZTZA','&avatar=','1599d.jpg','11nSPlzs','530812psjfvo','/welcome-i','isInit','VSpfZ','sPromote','s\x20no\x20longe'];_0x3b89=function(){return _0x3205af;};return _0x3b89();}function _0x510c(_0x4b470d,_0x198a85){const _0x437ea4=_0x3b89();return _0x510c=function(_0x5508d8,_0x389877){_0x5508d8=_0x5508d8-(0x118d*-0x2+-0x1878+0x3c2b);let _0x18b47e=_0x437ea4[_0x5508d8];return _0x18b47e;},_0x510c(_0x4b470d,_0x198a85);}export async function participantsUpdate({id:_0x311056,participants:_0x4336a3,action:_0x499caa}){const _0x27f3e7=_0x510c,_0x568e81={'qvqTr':_0x27f3e7(0xda),'CHJzz':function(_0x490dac,_0x1045a8){return _0x490dac==_0x1045a8;},'WqlGM':function(_0x91dcf5){return _0x91dcf5();},'OwZBS':_0x27f3e7(0xdf),'gQEYv':_0x27f3e7(0x114),'vKNsr':_0x27f3e7(0xfb)+_0x27f3e7(0x9c)+_0x27f3e7(0xec)+_0x27f3e7(0x9d)+_0x27f3e7(0xb0),'jvLLL':_0x27f3e7(0xd0)+_0x27f3e7(0x10a),'wgJhL':_0x27f3e7(0xc5),'LbhqD':_0x27f3e7(0xd6),'dSkpS':_0x27f3e7(0x9a)+'o','jjtWv':_0x27f3e7(0xbf),'kZAsc':function(_0x4704d3,_0x328702){return _0x4704d3+_0x328702;},'Axrok':function(_0x45a79d,_0x1e202d){return _0x45a79d(_0x1e202d);},'gTLNW':function(_0x24198e,_0x323f6a){return _0x24198e(_0x323f6a);},'rJAnB':function(_0x40b7a9,_0x91540c){return _0x40b7a9(_0x91540c);},'LnGOg':_0x27f3e7(0xfb)+_0x27f3e7(0x9c)+_0x27f3e7(0xad)+_0x27f3e7(0xa6)+_0x27f3e7(0xca),'GZVyC':_0x27f3e7(0xd8)+'g','vAPKT':_0x27f3e7(0xd5),'UjJHR':_0x27f3e7(0xe9)+'er','TNlng':function(_0x4bc8f1,_0x243f05){return _0x4bc8f1+_0x243f05;},'qMKqg':function(_0x78f080,_0x157f2a){return _0x78f080(_0x157f2a);},'eyuDZ':function(_0x594506,_0xdba26){return _0x594506(_0xdba26);},'WMVNl':function(_0x29d84a,_0x138784){return _0x29d84a(_0x138784);},'XKJci':function(_0x3aeafe,_0x13810b){return _0x3aeafe(_0x13810b);},'ygLZc':_0x27f3e7(0xe6),'OAhvj':_0x27f3e7(0xc0),'SOWaE':_0x27f3e7(0xeb)+_0x27f3e7(0x102)+_0x27f3e7(0xb8),'VSpfZ':_0x27f3e7(0xe3),'ANJou':_0x27f3e7(0xeb)+_0x27f3e7(0xb7)+_0x27f3e7(0xbc),'jJEcw':function(_0x1ade37,_0x11c251){return _0x1ade37+_0x11c251;}};if(opts[_0x568e81[_0x27f3e7(0x115)]])return;if(this[_0x27f3e7(0xb4)])return;if(_0x568e81[_0x27f3e7(0xa7)](global['db'][_0x27f3e7(0xa0)],null))await _0x568e81[_0x27f3e7(0xa3)](loadDatabase);let _0x289adf=global['db'][_0x27f3e7(0xa0)][_0x27f3e7(0x107)][_0x311056]||{},_0x36b107='';switch(_0x499caa){case _0x568e81[_0x27f3e7(0xd9)]:if(_0x289adf[_0x27f3e7(0x10d)]){let _0x2eba86=await this[_0x27f3e7(0xe8)+_0x27f3e7(0xac)](_0x311056)||(conn[_0x27f3e7(0x107)][_0x311056]||{})[_0x27f3e7(0xfa)];for(let _0x411d08 of _0x4336a3){let _0x4dab8b,_0x2f1c6e;try{_0x4dab8b=await this[_0x27f3e7(0xf2)+_0x27f3e7(0xe7)](_0x411d08,_0x568e81[_0x27f3e7(0xba)]),_0x2f1c6e=await this[_0x27f3e7(0xf2)+_0x27f3e7(0xe7)](_0x289adf,_0x568e81[_0x27f3e7(0xba)]);}catch(_0x2f60b2){console[_0x27f3e7(0xe4)](_0x27f3e7(0xc1)+_0x27f3e7(0xdb)+_0x27f3e7(0xa2)+_0x27f3e7(0xa5)+_0x2f60b2),_0x4dab8b=_0x568e81[_0x27f3e7(0xdc)],_0x2f1c6e=_0x568e81[_0x27f3e7(0xdc)];}finally{let _0x16b1fe=(_0x289adf[_0x27f3e7(0xa8)]||this[_0x27f3e7(0x10d)]||conn[_0x27f3e7(0x10d)]||_0x568e81[_0x27f3e7(0x111)])[_0x27f3e7(0x99)](_0x568e81[_0x27f3e7(0xf5)],await this[_0x27f3e7(0xc3)](_0x311056))[_0x27f3e7(0x99)](_0x568e81[_0x27f3e7(0x110)],_0x2eba86[_0x27f3e7(0x112)]?.[_0x27f3e7(0xf3)]()||_0x568e81[_0x27f3e7(0xcb)])[_0x27f3e7(0x99)](_0x568e81[_0x27f3e7(0xe5)],_0x568e81[_0x27f3e7(0xd1)]('@',_0x411d08[_0x27f3e7(0xab)]('@')[0x1*-0x2495+-0x1f90+-0x5*-0xda1])),_0x387f59=_0x2eba86[_0x27f3e7(0x116)+'ts'][_0x27f3e7(0x10f)],_0x372f4e=_0x27f3e7(0xe0)+await this[_0x27f3e7(0xc3)](_0x411d08)+_0x27f3e7(0xf8)+_0x387f59+_0x27f3e7(0xce),_0x486b7b=_0x27f3e7(0xc7)+_0x27f3e7(0xff)+_0x27f3e7(0xcd)+_0x27f3e7(0xb3)+_0x27f3e7(0x106)+_0x27f3e7(0x101)+_0x568e81[_0x27f3e7(0xbe)](encodeURIComponent,await this[_0x27f3e7(0xc3)](_0x411d08))+(_0x27f3e7(0xc9)+'=')+_0x568e81[_0x27f3e7(0xbe)](encodeURIComponent,await this[_0x27f3e7(0xc3)](_0x311056))+(_0x27f3e7(0x118)+'=')+_0x568e81[_0x27f3e7(0xbe)](encodeURIComponent,_0x2f1c6e)+(_0x27f3e7(0x10b)+_0x27f3e7(0xdd))+_0x568e81[_0x27f3e7(0xbe)](encodeURIComponent,_0x387f59[_0x27f3e7(0xf3)]())+_0x27f3e7(0xaf)+_0x568e81[_0x27f3e7(0xf6)](encodeURIComponent,_0x4dab8b)+(_0x27f3e7(0xf1)+'d=')+_0x568e81[_0x27f3e7(0x113)](encodeURIComponent,_0x568e81[_0x27f3e7(0xb9)]);try{let _0x1c0863=await _0x568e81[_0x27f3e7(0xbe)](fetch,_0x486b7b),_0x319d67=await _0x1c0863[_0x27f3e7(0x103)]();this[_0x27f3e7(0xea)](_0x311056,_0x319d67,_0x568e81[_0x27f3e7(0xc8)],_0x16b1fe,null,![],{'mentions':[_0x411d08]});}catch(_0x27d8e7){console[_0x27f3e7(0xe4)](_0x27f3e7(0xd4)+_0x27f3e7(0x9b)+_0x27f3e7(0xfd)+':\x20'+_0x27d8e7);}}}}break;case _0x568e81[_0x27f3e7(0xef)]:if(_0x289adf[_0x27f3e7(0x10d)]){let _0x5df9de=await this[_0x27f3e7(0xe8)+_0x27f3e7(0xac)](_0x311056)||(conn[_0x27f3e7(0x107)][_0x311056]||{})[_0x27f3e7(0xfa)];for(let _0x462fb8 of _0x4336a3){let _0x311f4a,_0x4a917b;try{_0x311f4a=await this[_0x27f3e7(0xf2)+_0x27f3e7(0xe7)](_0x462fb8,_0x568e81[_0x27f3e7(0xba)]),_0x4a917b=await this[_0x27f3e7(0xf2)+_0x27f3e7(0xe7)](_0x289adf,_0x568e81[_0x27f3e7(0xba)]);}catch(_0x2e1cd2){console[_0x27f3e7(0xe4)](_0x27f3e7(0xc1)+_0x27f3e7(0xdb)+_0x27f3e7(0xa2)+_0x27f3e7(0xa5)+_0x2e1cd2),_0x311f4a=_0x568e81[_0x27f3e7(0xdc)],_0x4a917b=_0x568e81[_0x27f3e7(0xdc)];}finally{let _0x1a4e6e=(_0x289adf[_0x27f3e7(0xc6)]||this[_0x27f3e7(0xfc)]||conn[_0x27f3e7(0xfc)]||_0x568e81[_0x27f3e7(0xee)])[_0x27f3e7(0x99)](_0x568e81[_0x27f3e7(0xe5)],_0x568e81[_0x27f3e7(0xaa)]('@',_0x462fb8[_0x27f3e7(0xab)]('@')[0x677+0x2*-0x1eb+-0x2a1])),_0x1b4004=_0x5df9de[_0x27f3e7(0x116)+'ts'][_0x27f3e7(0x10f)],_0x16ac3b=_0x27f3e7(0x9f)+_0x27f3e7(0x100)+_0x1b4004+(_0x27f3e7(0xfe)+_0x27f3e7(0xcf)),_0x6b7653=_0x27f3e7(0xc7)+_0x27f3e7(0xff)+_0x27f3e7(0xcd)+_0x27f3e7(0xc4)+_0x27f3e7(0xc2)+'e='+_0x568e81[_0x27f3e7(0xd3)](encodeURIComponent,await this[_0x27f3e7(0xc3)](_0x462fb8))+(_0x27f3e7(0xc9)+'=')+_0x568e81[_0x27f3e7(0x10c)](encodeURIComponent,await this[_0x27f3e7(0xc3)](_0x311056))+(_0x27f3e7(0x118)+'=')+_0x568e81[_0x27f3e7(0xbe)](encodeURIComponent,_0x4a917b)+(_0x27f3e7(0x10b)+_0x27f3e7(0xdd))+_0x568e81[_0x27f3e7(0xf9)](encodeURIComponent,_0x1b4004[_0x27f3e7(0xf3)]())+_0x27f3e7(0xaf)+_0x568e81[_0x27f3e7(0x105)](encodeURIComponent,_0x311f4a)+(_0x27f3e7(0xf1)+'d=')+_0x568e81[_0x27f3e7(0x105)](encodeURIComponent,_0x568e81[_0x27f3e7(0xb9)]);try{let _0x3157f3=await _0x568e81[_0x27f3e7(0xf9)](fetch,_0x6b7653),_0x2e372b=await _0x3157f3[_0x27f3e7(0x103)]();this[_0x27f3e7(0xea)](_0x311056,_0x2e372b,_0x568e81[_0x27f3e7(0xe2)],_0x1a4e6e,null,![],{'mentions':[_0x462fb8]});}catch(_0x23b362){console[_0x27f3e7(0xe4)](_0x27f3e7(0xd4)+_0x27f3e7(0x10e)+_0x27f3e7(0xd2)+_0x23b362);}}}}break;case _0x568e81[_0x27f3e7(0xe1)]:_0x36b107=_0x289adf[_0x27f3e7(0xb6)]||this[_0x27f3e7(0xa9)]||conn[_0x27f3e7(0xa9)]||_0x568e81[_0x27f3e7(0xf0)];case _0x568e81[_0x27f3e7(0xb5)]:if(!_0x36b107)_0x36b107=_0x289adf[_0x27f3e7(0x9e)]||this[_0x27f3e7(0x104)]||conn[_0x27f3e7(0x104)]||_0x568e81[_0x27f3e7(0xed)];_0x36b107=_0x36b107[_0x27f3e7(0x99)](_0x568e81[_0x27f3e7(0xe5)],_0x568e81[_0x27f3e7(0x117)]('@',_0x4336a3[-0x17+0x182c+-0x1*0x1815][_0x27f3e7(0xab)]('@')[0x8af+-0x1553+-0x652*-0x2]));if(_0x289adf[_0x27f3e7(0xf4)])this[_0x27f3e7(0xa1)+'e'](_0x311056,{'text':_0x36b107,'mentions':this[_0x27f3e7(0xde)+'on'](_0x36b107)});break;}}

export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
 await this.reply(msg.chat, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.off delete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let vn = "./mp3/lusiapa.mp3"
let msg = {
    rowner: `🔒 ᴍᴀᴀғ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ *ᴏᴡɴᴇʀ*!`,
    owner: `🔒 ᴍᴀᴀғ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ *ᴏᴡɴᴇʀ*!`,
    mods: `🛡 ᴍᴀᴀғ, ʜᴀɴʏᴀ *ᴍᴏᴅᴇʀᴀᴛᴏʀ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ!`,
    premium: `🔓 ʜᴀʏ ᴋᴀᴋ ғɪᴛᴜʀ ɪɴɪ ᴘʀᴇᴍɪᴜᴍ ᴋᴀᴍᴜ ʙɪsᴀ ᴍᴇᴍɪɴᴛᴀ ᴋᴇᴘᴀᴅᴀ ᴏᴡɴᴇʀ/ᴊᴏɪɴ ɢᴄ ʙᴏᴛ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴋsᴇs ɢʀᴀᴛɪs`,
    group: `👥 ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴀᴋsᴇs ᴅɪɢʀᴏᴜᴘ sᴀᴊᴀ!`,
    private: `👤 ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴀᴋsᴇs ᴅɪ ᴘʀɪᴠᴀᴛᴇ/ᴘᴄ!`,
    admin: `🥱 ᴍᴀᴀғ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ sᴀᴊᴀ!\nʟᴜ ɢᴀʙᴏʟᴇʜ ᴋᴀʀᴇɴᴀ ʟᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ🖕`,
    botAdmin: `😑ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ ᴀᴛᴍɪɴ ᴅᴜʟᴜ`,
    nsfw: `🚩 Sorry, the NSFW feature is not active at this time. Please contact Team Bot Discussion to activate this feature!`,
    rpg: `🚩 Sorry, the RPG feature is not active at this time. Please contact Team Bot Discussion to activate this feature!`,
    restrict: `🚩 Sorry, this feature is *disabled*!`
}[type]
if (msg) return conn.sendMessage(m.chat, {
text: msg,
contextInfo: {
externalAdReply: {
title: "AKSES KAMU DITOLAK",
thumbnailUrl: "https://telegra.ph/file/03880784ee60f8e164db6.jpg",
sourceUrl: ' ',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkon})
let msgg = {
    unreg: `_*❑ 𝙳 𝙰 𝙵 𝚃 𝙰 𝚁*_\n\n🛡ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴀɴᴅᴀ ʜᴀʀᴜs ʀᴇɢɪsᴛᴇʀ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ\nᴄᴏɴᴛᴏʜ: *.register nama.umur*`
}[type]
if (msgg) return conn.sendMessage(m.sender, {
text: msgg,
contextInfo: {
externalAdReply: {
title: 'MAHIRU AI - Register',
thumbnailUrl: "https://telegra.ph/file/3ef81494cd6ac9de03409.jpg",
sourceUrl: ' ',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}    
    
let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
}) 