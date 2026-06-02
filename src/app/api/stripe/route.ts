import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe 未配置" },
      { status: 500 }
    )
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const { plan } = await request.json()

    const prices: Record<string, string> = {
      pro: process.env.STRIPE_PRO_PRICE_ID || "price_pro",
      lifetime: process.env.STRIPE_LIFETIME_PRICE_ID || "price_lifetime",
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: prices[plan] || prices.pro,
          quantity: 1,
        },
      ],
      mode: plan === "lifetime" ? "payment" : "subscription",
      success_url: `${request.headers.get("origin")}/dashboard?payment=success`,
      cancel_url: `${request.headers.get("origin")}/membership?payment=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "支付创建失败" },
      { status: 500 }
    )
  }
}
