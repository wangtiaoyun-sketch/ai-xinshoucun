import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "未配置" }, { status: 500 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const sig = request.headers.get("stripe-signature")!
  const body = await request.text()

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch {
    return NextResponse.json({ error: "签名验证失败" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // 更新用户会员状态
    const userId = session.metadata?.user_id
    const plan = session.metadata?.plan

    if (userId) {
      await supabase
        .from("profiles")
        .update({ role: plan || "pro", updated_at: new Date().toISOString() })
        .eq("id", userId)
    }
  }

  return NextResponse.json({ received: true })
}
