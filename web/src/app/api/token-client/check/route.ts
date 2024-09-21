import { NextResponse } from "next/server";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order_id");

  if (!orderId) {
    return new Response(
      JSON.stringify({ error: "order_id parameter is missing" }),
      { status: 400 },
    );
  }

  const midtransUrl = `${process.env.NEXT_PUBLIC_API}/v2/${orderId}/status`;

  const serverKey = process.env.NEXT_PUBLIC_SECRET;
  const encodedCredentials = Buffer.from(serverKey + ":").toString("base64");

  try {
    const response = await fetch(midtransUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching transaction status:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch transaction status" }),
      { status: 500 },
    );
  }
}
