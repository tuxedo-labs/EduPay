package entity

type Students struct {
	ID    uint   `gorm:"primaryKey" json:"id"`
	NISN  string `gorm:"unique" json:"nisn"`
	Nama  string `json:"nama"`
	Kelas string `json:"kelas"`
}
