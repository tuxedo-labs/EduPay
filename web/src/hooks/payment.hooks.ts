import {
  PaymentCreate,
  PaymentHistory,
  PaymentStatus,
  PaymentCheck,
} from "@/repository/payment";
import { PaymentStatusResponse } from "@/types/hooks/payment";
import { useEffect, useState } from "react";

export const usePaymentStatus = (nisn: string | null) => {
  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatusResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (nisn === null) return;

      setLoading(true);
      try {
        const result = await PaymentStatus(nisn);
        setPaymentStatus(result.data);
        console.log(process.env.NEXT_PUBLIC_API_URL);
        console.log(result.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, [nisn]);

  return {
    paymentStatus,
    loading,
    error,
  };
};

export const usePaymentCreate = async (nisn: number) => {
  const [paymentCreate, setPaymentCreate] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentCreate = async () => {
      try {
        const result = await PaymentCreate(nisn);
        setPaymentCreate(result.data);
        setLoading(true);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentCreate();
  }, []);
  return {
    paymentCreate,
    loading,
    error,
  };
};

export const usePaymentHistory = async (nisn: number) => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const result = await PaymentHistory(nisn);
        setPaymentHistory(result.data);
        setLoading(true);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentHistory();
  }, []);
  return {
    paymentHistory,
    loading,
    error,
  };
};

export const usePaymentCheck = async (nisn: number) => {
  const [paymentCheck, setPaymentCheck] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentCheck = async () => {
      try {
        const result = await PaymentCheck(nisn);
        setPaymentCheck(result.data);
        setLoading(true);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentCheck();
  }, []);
  return {
    paymentCheck,
    loading,
    error,
  };
};
