'use client'
import React, { useState } from "react";
import { PaymentCheckForm } from "../fragments/PaymentCheckForm";

const PaymentForm: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="payment-form" id="checkPembayaran">
      <PaymentCheckForm onCheckComplete={setMessage} message={message} />
    </div>
  );
};

export default PaymentForm;

