import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

const snap = new Midtrans.Snap({
  isProduction: false, // Set to false for sandbox testing
  serverKey: process.env.TEST_NEXT_PUBLIC_SECRET || "",
  clientKey: process.env.TEST_NEXT_PUBLIC_CLIENT || "",
});

interface PaymentRequest {
  paymentId: string;
  nisn: string;
  price: number;
  month: string;
  year: number;
}

export async function POST(request: Request) {
  try {
    const { paymentId, nisn, price, month, year }: PaymentRequest =
      await request.json();

    const parameter = {
      transaction_details: {
        order_id: paymentId,
        gross_amount: price,
      },
      item_details: [
        {
          id: paymentId,
          name: `PEMBAYARAN ${month} - ${year} ${nisn}`,
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
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to generate token",
      },
      { status: 500 },
    );
  }
}
