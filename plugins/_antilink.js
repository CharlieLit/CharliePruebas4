const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return m.reply('[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo')
        }
        if (!isBotAdmin)
      await conn.reply(m.chat, `*⚠️ ENLACE DETECTADO ⚠️*\nPor suerte no soy acmin, asi que no puedo hacer nada :v`, null, { mentions: [aa] })
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `*⚠️ ENLACE DETECTADO ⚠️*\n\n*Valiste vrg @${m.sender.split("@")[0]} Adios..._\n`, null, { mentions: [aa] })}
        /*if (!isBotAdmin) return conn.sendButton(m.chat, `*⚠️ ENLACE DETECTADO ⚠️*\n`, `Por suerte no soy acmin, asi que no puedo hacer nada :v`, wm, ['[ DESACTIVAR ANTILINK ]', usedPrefix+'disable antilink'], m)
        await  conn.sendMessage(m.chat, { text: `*⚠️ ENLACE DETECTADO ⚠️*\n\n*Valiste vrg @${m.sender.split("@")[0]} Adios..._\n`, mentions: [m.sender] }) */
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
setTimeout(() => { 
	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
        /**if (isBotAdmin && bot.restrict) {   
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')**/
    }
    return !0
}
