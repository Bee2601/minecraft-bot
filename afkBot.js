const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'DIA_CHI_SERVER_CUA_BAN.aternos.me', // <--- THAY BẰNG ĐỊA CHỈ SERVER CỦA BẠN
  port: 25565,
  username: 'AFK_Bot_Bee', // Tên bot bạn muốn đặt
  version: '1.21.1' 
})

// Chống AFK: Cứ mỗi 60 giây lại nhảy 1 lần
setInterval(() => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
}, 60000)

bot.on('login', () => console.log('Bot đã vào server thành công!'))
bot.on('error', (err) => console.log('Lỗi: ' + err))
bot.on('kicked', (reason) => console.log('Bot bị đá: ' + reason))
