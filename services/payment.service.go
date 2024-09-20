package services

import (
	"EduPay/database"
	"EduPay/models/entity"
	"EduPay/models/request"
	"errors"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func GetSiswaByNISN(nisn string) (*entity.Students, error) {
	var siswa entity.Students
	err := database.DB.First(&siswa, "nisn = ?", nisn).Error
	return &siswa, err
}

func GetPembayaranBySiswaID(siswaID uuid.UUID, status string) ([]entity.Payments, error) {
	var pembayaran []entity.Payments
	if err := database.DB.Where("siswa_id = ? AND status = ?", siswaID, status).Find(&pembayaran).Error; err != nil {
		return nil, err
	}
	return pembayaran, nil
}

func ProcessPayment(nisn string, bulan string, tahun int) (*entity.Payments, *entity.Students, error) {
	var siswa entity.Students
	if err := database.DB.Where("nisn = ?", nisn).First(&siswa).Error; err != nil {
		return nil, nil, err
	}

	pembayaran := entity.Payments{
		ID:        uuid.New(),
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

func GetPaymentByMonthAndYear(nisn string, bulan string, tahun int) (*request.PaymentResponse, error) {
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

	response := &request.PaymentResponse{
		ID:      pembayaran.ID,
		NISN:    siswa.NISN,
		Bulan:   pembayaran.Bulan,
		Tahun:   pembayaran.Tahun,
		Nominal: pembayaran.Nominal,
		Status:  pembayaran.Status,
	}

	return response, nil
}
