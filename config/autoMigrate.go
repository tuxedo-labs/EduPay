package config

import "EduPay/database"

func RunMigrate(dataModel interface{}) {
	database.DB.AutoMigrate(dataModel)
}
