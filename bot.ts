import { Bot } from 'grammy';

const botToken: string = process.env.TELEGRAM_BOT_TOKEN ?? '';
const domain = process.env.VERCEL_URL || 'http://localhost:3000';

const bot = new Bot(botToken);

// Обработчик сообщений
bot.on('message', (ctx) => {
  ctx.reply('Привет! Как дела?');
});

// Установите вебхук (делается один раз при запуске приложения)
async function setWebhook() {
  try {
    await bot.api.setWebhook("https://" + domain + '/api/');
    console.log("Webhook установлен!");
  } catch (err) {
    console.error("Ошибка при установке вебхука:", err);
  }
}
// Вызовите установку вебхука
setWebhook();

export default bot;