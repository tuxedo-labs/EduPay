package seeders

import (
	"EduPay/database"
	"EduPay/models/entity"
	"fmt"
	"github.com/google/uuid"
)

func SiswaSeeders() {
	var count int64
	database.DB.Model(&entity.Students{}).Count(&count)

	if count == 0 {
		students := []entity.Students{
			{ID: uuid.New(), NISN: "001", Nama: "Siswa Pertama", Kelas: "10A"},
			{ID: uuid.New(), NISN: "002", Nama: "Siswa Kedua", Kelas: "11B"},
			{ID: uuid.New(), NISN: "003", Nama: "Siswa Ketiga", Kelas: "12C"},
		}

		for _, student := range students {
			database.DB.Create(&student)
		}

		fmt.Println("Seeding students completed successfully!")
	} else {
		fmt.Println("Students already seeded!")
	}
}
