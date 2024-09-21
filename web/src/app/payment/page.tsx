'use client'
import { useEffect, useState } from "react";
import { usePaymentStatus } from "@/hooks/payment.hooks";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import axios from "axios";
import { Pembayaran } from "@/types/hooks/payment";

export default function Page() {
  const [nisn, setNisn] = useState<string | null>(null);
  const { paymentStatus, loading, error } = usePaymentStatus(nisn);

  useEffect(() => {
    const storedNisn = localStorage.getItem('nisn');
    if (storedNisn) {
      setNisn(storedNisn);
    }
  }, []);

  useEffect(() => {
    if (nisn) {
      console.log(paymentStatus);
    }
  }, [nisn, paymentStatus]);

  const handlePay = async () => {
    const paymentData: Pembayaran | undefined = paymentStatus?.pembayaran?.[0];

    if (!paymentData) {
      console.error("No payment data available.");
      return;
    }

    try {
      const response = await axios.post('/api/token-client', {
        paymentId: paymentData?.id,
        nisn: paymentStatus?.siswa.nisn,
        price: paymentData?.nominal,
        month: paymentData?.bulan,
        year: paymentData?.tahun,
      });

      const { token } = response.data;

      window.location.href = `https://app.sandbox.midtrans.com/snap/v2/vtweb/${token}`;
    } catch (error) {
      console.error("Payment request failed:", error);
    }
  }

  return (
    <>
      <NavbarLayout />
      <div className="mx-auto max-w-[90%] lg:max-w-[40%] space-y-6 p-6 bg-white rounded-lg shadow-md">
        {loading && <p>Loading...</p>}
        {paymentStatus && (
          <>
            <p><b>NISN</b>: {paymentStatus.siswa.nisn}</p>
            <p><b>NAMA</b>: {paymentStatus.siswa.nama}</p>
            <p><b>KELAS</b>: {paymentStatus.siswa.kelas}</p>

          </>
        )}
        <button
          className="w-full bg-black text-white p-2 rounded shadow"
          onClick={handlePay}
        >
          Bayar
        </button>
        {!loading && !error && !paymentStatus && <p>No payment status available.</p>}
      </div>
    </>
  );
}

