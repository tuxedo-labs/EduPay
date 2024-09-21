import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans({
  isProduction: process.env.NEXT_PUBLIC_STATUS === "true", // Ensure boolean conversion
  serverKey: process.env.NEXT_PUBLIC_SECRET || "", // Ensure env vars are available
  clientKey: process.env.NEXT_PUBLIC_CLIENT || "", // Ensure env vars are available
});

export async function POST(request: any) {
  try {
    const { paymentId, nisn, price, month, year } = await request.json();

    const parameter = {
      transaction_details: {
        order_id: paymentId,
        gross_amount: price,
      },
      item_details: [
        {
          id: paymentId,
          name: `PEMBAYARAN UANG SEKOLAH ${month} - ${year} NISN : ${nisn}`,
          price: price,
          quantity: 1,
        },
      ],
    };

    const token = await snap.createTransactionToken(parameter);

    return NextResponse.json({
      token,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to generate token",
      },
      { status: 500 },
    );
  }
}
