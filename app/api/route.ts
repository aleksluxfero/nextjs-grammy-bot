import bot from "@/bot";
import {NextRequest} from "next/server";

export async function GET() {
  return Response.json({ message: "Hello" })
}

export async function POST(req: NextRequest) {
  const update = await req.json();  // Получаем обновление от Telegram
  await bot.handleUpdate(update);   // Передаем обновление боту
  return new Response(null, { status: 200 });
}