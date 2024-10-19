export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)
bot.on('message:text', async (ctx) => {
  const chatId = ctx.chat.id;
  // Отправляем сообщение обратно пользователю
  await ctx.reply(`Ваш чат ID: ${chatId}`);
})



export const POST = webhookCallback(bot, 'std/http')

export const GET = async () => {
  // Assuming you have the user's chat ID stored somewhere
  const userChatId = 5780121436; // Replace with the actual chat ID

  // Send a message to the user
  await bot.api.sendMessage(userChatId, 'Сообщение отправлено через GET запрос.');

  return new Response('Message sent', { status: 200 });
};

