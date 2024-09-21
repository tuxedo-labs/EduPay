'use client'
import React, { useState } from "react";
import { InputField } from "../fragments/InputField";
import { Button } from "../elements/Button";
import { usePaymentStatus } from "@/hooks/payment.hooks";

const PaymentForm = () => {
  const [nisn, setNisn] = useState<string>("");
  const [submittedNisn, setSubmittedNisn] = useState<string | null>(null);
  const { paymentStatus, loading, error } = usePaymentStatus(submittedNisn);

  const handleCheck = () => {
    if (nisn) {
      setSubmittedNisn(nisn); // Keep it as string to preserve leading zeros
    }
  };

  return (
    <div className="payment-form">
      <InputField
        label="NISN"
        value={nisn}
        onChange={(e) => setNisn(e.target.value)}
        placeholder="Enter your NISN"
        id="nisn-input"
      />
      <Button onClick={handleCheck}>Check Payment Status</Button>

      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {paymentStatus && (
        <div>
          <p>Status: {paymentStatus.status}</p>
          <p>Nominal: {paymentStatus.nominal}</p>
          <p>Month: {paymentStatus.month}</p>
          <p>Year: {paymentStatus.year}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;

