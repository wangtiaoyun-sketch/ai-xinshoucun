import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "支付系统未配置" }, { status: 500 })
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { plan } = await request.json()
    const origin = request.headers.get("origin") || "https://ai-xinshoucun.vercel.app"

    // Price IDs — 从 Stripe Dashboard 获取后替换
    const priceMap: Record<string, string> = {
      pro: process.env.STRIPE_PRO_PRICE_ID || "",
      lifetime: process.env.STRIPE_LIFETIME_PRICE_ID || "",
    }

    const priceId = priceMap[plan]
    if (!priceId) {
      // 没有配置 Price ID，用演示模式
      return NextResponse.json({ error: "请先在 Stripe 创建产品价格，然后把 Price ID 配置到环境变量" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: plan === "lifetime" ? "payment" : "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/payment?success=true&plan=${plan}`,
      cancel_url: `${origin}/membership?cancelled=true`,
      metadata: { plan },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
