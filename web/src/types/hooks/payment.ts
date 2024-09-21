export interface Siswa {
  id: string;
  nisn: string;
  nama: string;
  kelas: string;
}

export interface Pembayaran {
  id: string;
  siswa_id: string;
  bulan: string;
  tahun: number; // Assuming this is a number based on your previous response
  nominal: number; // Change this to number for consistency
  status: string;
}

export interface PaymentStatusResponse {
  pembayaran: Pembayaran[]; // Changed to an array of Pembayaran
  siswa: Siswa;
}

export interface PaymentCheckResponse {
  message: string;
}

export interface PaymentCreateResponse {
  success: boolean;
  data: any; // Adjust this type based on your actual response structure
}

export interface PaymentHistoryResponse {
  history: Array<{
    date: string;
    amount: number;
    status: string;
  }>;
}
