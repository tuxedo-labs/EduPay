package handler

import (
	"EduPay/models/entity"
	"EduPay/models/request"
	"EduPay/services"
	"net/http"
	"time"

	"github.com/gofiber/fiber/v2"
)

func CheckCurrentMonthPayment(c *fiber.Ctx) error {
	nisn := c.Params("nisn")
	now := time.Now()
	bulan := now.Format("January")
	tahun := now.Year()

	if nisn == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "NISN is required",
		})
	}

	payment, err := services.GetPaymentByMonthAndYear(nisn, bulan, tahun)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error checking payment status",
		})
	}

	if payment != nil {
		return c.JSON(fiber.Map{
			"message": "Pembayaran untuk bulan ini sudah dilakukan",
			"pembayaran": fiber.Map{
				"id":      payment.ID,
				"bulan":   payment.Bulan,
				"tahun":   payment.Tahun,
				"nominal": payment.Nominal,
				"status":  payment.Status,
			},
		})
	}

	return c.JSON(fiber.Map{
		"message": "Pembayaran untuk bulan ini belum dilakukan",
	})
}

func GetPaymentStatus(c *fiber.Ctx) error {
	nisn := c.Params("nisn")

	if nisn == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "NISN is required",
		})
	}

	siswa, err := services.GetSiswaByNISN(nisn)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Siswa not found",
		})
	}

	pembayaran, err := services.GetPembayaranBySiswaID(siswa.ID, "pending")
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error retrieving payment status",
		})
	}

	var pendingPembayaran []entity.Payments
	for _, payment := range pembayaran {
		if payment.Status == "pending" {
			pendingPembayaran = append(pendingPembayaran, payment)
		}
	}

	return c.JSON(fiber.Map{
		"siswa":      siswa,
		"pembayaran": pendingPembayaran,
	})
}

func PaymentHandler(c *fiber.Ctx) error {
	nisn := c.Params("nisn")
	now := time.Now()
	bulan := now.Format("January")
	tahun := now.Year()

	if nisn == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "NISN is required",
		})
	}

	existingPayment, err := services.GetPaymentByMonthAndYear(nisn, bulan, tahun)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error checking existing payments",
		})
	}

	if existingPayment != nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Pembayaran untuk bulan dan tahun ini sudah dilakukan",
		})
	}

	pembayaran, siswa, err := services.ProcessPayment(nisn, bulan, tahun)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Siswa tidak ditemukan atau pembayaran gagal",
		})
	}

	response := fiber.Map{
		"message": "Pembayaran berhasil",
		"pembayaran": fiber.Map{
			"id":   pembayaran.ID,
			"nisn": siswa.NISN,
			"detail": fiber.Map{
				"nama":  siswa.Nama,
				"kelas": siswa.Kelas,
			},
			"bulan":   pembayaran.Bulan,
			"tahun":   pembayaran.Tahun,
			"nominal": pembayaran.Nominal,
			"status":  pembayaran.Status,
		},
	}

	return c.JSON(response)
}

func GetPaymentHistoryHandler(c *fiber.Ctx) error {
	nisn := c.Params("nisn")

	pembayaran, siswa, err := services.GetPaymentHistory(nisn)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Siswa tidak ditemukan atau riwayat pembayaran tidak tersedia",
		})
	}

	for i := range pembayaran {
		pembayaran[i].Siswa = siswa
	}

	return c.JSON(fiber.Map{
		"pembayaran": pembayaran,
		"siswa": fiber.Map{
			"id":    siswa.ID,
			"nisn":  siswa.NISN,
			"nama":  siswa.Nama,
			"kelas": siswa.Kelas,
		},
	})
}

func UpdatePaymentStatusHandler(c *fiber.Ctx) error {
	var request request.UpdatePaymentRequest
	if err := c.BodyParser(&request); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid JSON format",
			"error":   err.Error(),
		})
	}

	if request.Status == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Status is required",
		})
	}

	paymentID := c.Params("id")
	if paymentID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Payment ID is required",
		})
	}

	err := services.UpdatePaymentStatus(paymentID, request.Status)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to update payment status",
			"error":   err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"message": "Payment status updated successfully",
	})
}
