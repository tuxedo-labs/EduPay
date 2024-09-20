package entity

import (
	"github.com/google/uuid"
	"time"
)

type Payments struct {
	ID        uuid.UUID  `json:"id" gorm:"type:char(36);primary_key"`
	SiswaID   uuid.UUID  `json:"siswa_id" gorm:"type:char(36);index"`
	Siswa     *Students  `json:"siswa"`
	Bulan     string     `json:"bulan"`
	Tahun     int        `json:"tahun"`
	Nominal   int        `json:"nominal"`
	Status    string     `json:"status"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at,omitempty"`
}
