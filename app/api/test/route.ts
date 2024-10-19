import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import { Bot } from 'grammy';

const token = process.env.TELEGRAM_BOT_TOKEN;
const adminId = 5780121436; // Ваш Telegram ID

if (!token || !adminId) throw new Error('Не найдены переменные окружения TELEGRAM_BOT_TOKEN или ADMIN_CHAT_ID.');

const bot = new Bot(token);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Получаем данные из запроса

    if (!body.message) {
      return new Response('Сообщение не найдено', { status: 400 });
    }

    // Отправляем сообщение админу в Telegram
    await bot.api.sendMessage(adminId, `Уведомление: ${body.message}`);

    return new Response('Сообщение отправлено', { status: 200 });
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    return new Response('Ошибка при обработке запроса', { status: 500 });
  }
};