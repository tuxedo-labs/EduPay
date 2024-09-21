import {
  PaymentCreate,
  PaymentHistory,
  PaymentStatus,
  PaymentCheck,
} from "@/repository/payment";
import {
  PaymentCheckResponse,
  PaymentStatusResponse,
} from "@/types/hooks/payment";
import { useEffect, useState } from "react";

export const usePaymentStatus = (nisn: string | null) => {
  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatusResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (nisn === null) return;

      setLoading(true);
      try {
        const result = await PaymentStatus(nisn);
        setPaymentStatus(result.data);
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

export const usePaymentCreate = (nisn: string | null) => {
  const [paymentCreate, setPaymentCreate] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentCreate = async () => {
      if (nisn === null) return;

      setLoading(true);
      try {
        const result = await PaymentCreate(nisn);
        setPaymentCreate(result.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentCreate();
  }, [nisn]);

  return {
    paymentCreate,
    loading,
    error,
  };
};

export const usePaymentHistory = (nisn: string | null) => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      if (nisn === null) return;

      setLoading(true);
      try {
        const result = await PaymentHistory(nisn);
        setPaymentHistory(result.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, [nisn]);

  return {
    paymentHistory,
    loading,
    error,
  };
};

export const usePaymentCheck = (nisn: string | null) => {
  const [paymentCheck, setPaymentCheck] = useState<PaymentCheckResponse | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPaymentCheck = async () => {
      if (nisn === null) return;

      setLoading(true);
      try {
        const result = await PaymentCheck(nisn);
        setPaymentCheck(result.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentCheck();
  }, [nisn]);

  return {
    paymentCheck,
    loading,
    error,
  };
};
