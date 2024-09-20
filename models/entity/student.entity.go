package entity

import (
	"github.com/google/uuid"
)

type Students struct {
	ID    uuid.UUID `gorm:"primaryKey" json:"id"`
	NISN  string    `gorm:"unique" json:"nisn"`
	Nama  string    `json:"nama"`
	Kelas string    `json:"kelas"`
}
