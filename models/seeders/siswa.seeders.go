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
			{ID: uuid.New(), NISN: "00070001", Nama: "Ahmad Rafi", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070002", Nama: "Siswa Kedua", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070003", Nama: "Siswa Ketiga", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070004", Nama: "Siswa Keempat", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070005", Nama: "Siswa Kelima", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070006", Nama: "Siswa Keenam", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070007", Nama: "Siswa Ketujuh", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070008", Nama: "Siswa Kedelapan", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070009", Nama: "Siswa Kesembilan", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070010", Nama: "Siswa Kesepuluh", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070011", Nama: "Siswa Kesebelas", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070012", Nama: "Siswa Keduabelas", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070013", Nama: "Siswa Ketigabelas", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070014", Nama: "Siswa Keempatbelas", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070015", Nama: "Siswa Kelimabelas", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070016", Nama: "Siswa Keenambelas", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070017", Nama: "Siswa Ketujuhbelas", Kelas: "11B"},
			{ID: uuid.New(), NISN: "00070018", Nama: "Siswa Kedelapanbelas", Kelas: "12C"},
			{ID: uuid.New(), NISN: "00070019", Nama: "Siswa Kesembilanbelas", Kelas: "10A"},
			{ID: uuid.New(), NISN: "00070020", Nama: "Siswa Kedua Puluh", Kelas: "11B"},
		}

		for _, student := range students {
			database.DB.Create(&student)
		}

		fmt.Println("Seeding students completed successfully!")
	} else {
		fmt.Println("Students already seeded!")
	}
}
