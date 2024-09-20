package config

import (
	"EduPay/database"
	"EduPay/models/seeders"
)

func RunMigrate(dataModel interface{}) {
	database.DB.AutoMigrate(dataModel)
	seeders.SiswaSeeders()
}
