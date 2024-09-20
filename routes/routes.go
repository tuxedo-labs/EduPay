package routes

import (
	"EduPay/config"
	"EduPay/handler"
	"EduPay/models/entity"

	"github.com/gofiber/fiber/v2"
)

func SetupRouter(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/payment/status/:nisn", handler.GetPaymentStatus)

	api.Post("/payment/:nisn", handler.PaymentHandler)

	api.Get("/payment/history/:nisn", handler.GetPaymentHistoryHandler)

	api.Get("/payment/check/:nisn", handler.CheckCurrentMonthPayment)

}

func AutoMigrate() {
	config.RunMigrate(&entity.Students{})
	config.RunMigrate(&entity.Payments{})
}
