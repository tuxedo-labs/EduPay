export interface PaymentStatusResponse {
  status: string;
  nominal: number;
  month: string;
  year: number;
}

export interface PaymentCheckResponse {
  message: string;
}

export interface PaymentCreateResponse {
  success: boolean;
  data: any; // Adjust this type based on the actual response data structure
}

export interface PaymentHistoryResponse {
  history: Array<{
    date: string; // or Date type, depending on your use case
    amount: number;
    status: string;
  }>;
}
