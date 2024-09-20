package entity

import (
	"time"
)

type Payments struct {
	ID        uint       `json:"id"`
	SiswaID   uint       `json:"siswa_id"`
	Siswa     *Students  `json:"siswa"`
	Bulan     string     `json:"bulan"`
	Tahun     int        `json:"tahun"`
	Nominal   int        `json:"nominal"`
	Status    string     `json:"status"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at,omitempty"`
}
