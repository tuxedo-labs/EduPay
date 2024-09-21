import React, { useState, useEffect } from "react";
import { Button } from "../elements/Button";
import { usePaymentCheck } from "@/hooks/payment.hooks";
import { InputField } from "./InputField";

interface PaymentCheckFormProps {
  onCheckComplete: (message: string) => void;
  message: string | null;
}

export const PaymentCheckForm: React.FC<PaymentCheckFormProps> = ({ onCheckComplete, message }) => {
  const [nisn, setNisn] = useState<string>("");
  const [submittedNisn, setSubmittedNisn] = useState<string | null>(null);
  const { paymentCheck, loading, error } = usePaymentCheck(submittedNisn);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (nisn) {
      setSubmittedNisn(nisn);
    }
  };

  useEffect(() => {
    if (paymentCheck) {
      onCheckComplete(paymentCheck.message);
    }
  }, [paymentCheck, onCheckComplete]);

  return (
    <div className="mx-auto max-w-md space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Cek NISN Siswa</h2>
        <p className="text-gray-500">
          Masukkan NISN (Nomor Induk Siswa Nasional) untuk melihat informasi pembayaran
        </p>
      </div>

      {!message && error && (
        <p className="text-center text-red-500">NISN SISWA TIDAK DI TEMUKAN</p>
      )}
      {message && (
        <div className="mt-4 text-center">
          <p>{message}</p>
        </div>
      )}

      <form onSubmit={handleCheck} className="space-y-4">
        <div className="space-y-2">
          <InputField
            label="NISN"
            value={nisn}
            onChange={(e) => setNisn(e.target.value)}
            placeholder="Masukkan 10 digit NISN"
            required={true}
            type="number"
          />
        </div>
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        <Button type="submit" className="w-full bg-black text-white p-2 rounded shadow">
          Cek Pembayaran
        </Button>
      </form>
    </div>
  );
};

