package request

import "github.com/google/uuid"

type PaymentResponse struct {
	ID      uuid.UUID `json:"id"`
	NISN    string    `json:"nisn"`
	Bulan   string    `json:"bulan"`
	Tahun   int       `json:"tahun"`
	Nominal int       `json:"nominal"`
	Status  string    `json:"status"`
}
