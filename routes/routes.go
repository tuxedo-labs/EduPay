package routes

import (
	"EduPay/config"
	"EduPay/models/entity"

	"github.com/gofiber/fiber/v2"
)

func SetupRouter(r *fiber.App) {
	// app := r.Group("/api")
	// authentication
}

func AutoMigrate() {
	config.RunMigrate(&entity.Users{})
}
