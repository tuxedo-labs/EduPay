package middleware

import (
	"EduPay/database"
	"EduPay/models/entity"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func Auth(c *fiber.Ctx) error {
	paymentID := c.Get("x-token")
	if paymentID == "" {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"message": "Unauthorized, token not provided",
		})
	}

	var payment entity.Payments
	if err := database.DB.Where("id = ?", paymentID).First(&payment).Error; err != nil {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"message": "Unauthorized, payment ID not found",
		})
	}

	return c.Next()
}
