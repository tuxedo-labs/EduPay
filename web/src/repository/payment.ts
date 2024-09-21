import { Fetch } from "@/utils/Fetch";
import axios from "axios";

export const PaymentStatus = async (nisn: string) => {
  try {
    const result = await Fetch.get(`/payment/status/${nisn}`);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};

export const PaymentCreate = async (nisn: string) => {
  try {
    const result = await Fetch.post(`/payment/${nisn}`);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};

export const PaymentHistory = async (nisn: string | null) => {
  try {
    const result = await Fetch.get(`/payment/history/${nisn}`);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};

export const PaymentCheck = async (nisn: string) => {
  try {
    const result = await Fetch.get(`/payment/check/${nisn}`);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};
