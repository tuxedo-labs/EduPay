package routes

import (
	"EduPay/config"
	"EduPay/handler"
	"EduPay/middleware"
	"EduPay/models/entity"

	"github.com/gofiber/fiber/v2"
)

var auth = middleware.Auth

func SetupRouter(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/payment/status/:nisn", handler.GetPaymentStatus)

	api.Post("/payment/:nisn", handler.PaymentHandler)

	api.Get("/payment/history/:nisn", handler.GetPaymentHistoryHandler)

	api.Get("/payment/check/:nisn", handler.CheckCurrentMonthPayment)
	api.Put("/payments/:id", auth, handler.UpdatePaymentStatusHandler)

}

func AutoMigrate() {
	config.RunMigrate(&entity.Students{})
	config.RunMigrate(&entity.Payments{})
}
