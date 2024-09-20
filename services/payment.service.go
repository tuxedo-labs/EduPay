package services

import (
	"EduPay/database"
	"EduPay/models/entity"
	"errors"
	"time"

	"gorm.io/gorm"
)

func GetSiswaByNISN(nisn string) (*entity.Students, error) {
	var siswa entity.Students
	err := database.DB.First(&siswa, "nisn = ?", nisn).Error
	return &siswa, err
}

func GetPembayaranBySiswaID(siswaID uint, status string) ([]entity.Payments, error) {
	var pembayaran []entity.Payments
	var err error

	if status != "" {
		err = database.DB.Where("siswa_id = ? AND status = ?", siswaID, status).Find(&pembayaran).Error
	} else {
		err = database.DB.Where("siswa_id = ?", siswaID).Find(&pembayaran).Error
	}

	return pembayaran, err
}

func ProcessPayment(nisn string, bulan string, tahun int) (*entity.Payments, *entity.Students, error) {
	var siswa entity.Students
	if err := database.DB.Where("nisn = ?", nisn).First(&siswa).Error; err != nil {
		return nil, nil, err
	}

	pembayaran := entity.Payments{
		SiswaID:   siswa.ID,
		Nominal:   100000,
		Bulan:     bulan,
		Tahun:     tahun,
		Status:    "pending",
		CreatedAt: time.Now(),
	}

	if err := database.DB.Create(&pembayaran).Error; err != nil {
		return nil, nil, err
	}

	return &pembayaran, &siswa, nil
}

func GetPaymentHistory(nisn string) ([]entity.Payments, *entity.Students, error) {
	var siswa entity.Students
	if err := database.DB.Where("nisn = ?", nisn).First(&siswa).Error; err != nil {
		return nil, nil, err
	}

	var pembayaran []entity.Payments
	if err := database.DB.Where("siswa_id = ?", siswa.ID).Find(&pembayaran).Error; err != nil {
		return nil, nil, err
	}

	return pembayaran, &siswa, nil
}

func GetPaymentByMonthAndYear(nisn string, bulan string, tahun int) (*entity.Payments, error) {
	var siswa entity.Students
	if err := database.DB.Where("nisn = ?", nisn).First(&siswa).Error; err != nil {
		return nil, err
	}

	var pembayaran entity.Payments
	if err := database.DB.Where("siswa_id = ? AND bulan = ? AND tahun = ?", siswa.ID, bulan, tahun).First(&pembayaran).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}

	return &pembayaran, nil
}
