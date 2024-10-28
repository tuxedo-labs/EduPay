package main

import (
	"EduPay/database"
	"EduPay/routes"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	app := fiber.New(fiber.Config{
		AppName:      "Tuxedo BackEnd",
		ServerHeader: "Tuxedo",
		BodyLimit:    10 * 1024 * 1024,
	})

	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	database.Connect()

	routes.AutoMigrate()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:3001, http://localhost:8081",
		AllowMethods:     "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization, x-token",
		ExposeHeaders:    "Content-Length",
		AllowCredentials: true,
	}))

	app.Static("/", "./public")
	routes.SetupRouter(app)

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "3000"
	}

	log.Printf("Listening on port %s", port)
	if err := app.Listen(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
