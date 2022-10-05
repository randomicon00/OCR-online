package models

import (
  "fmt"

  "gorm.io/driver/postgres"
  "gorm.io/gorm"  
)

const (
   host   = "localhost"
   user   = "gorm"
   password = "gorm"
   dbname = "gorm"
   port = 9932
   sslmode = "disabled"
)

var DB *gorm.DB

func ConnectDatabase() {
	
  psqlInfo := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s" +
  "sslmode=%s TimeZone=Asia/Pacific",
  host, user, password, dbname, port sslmode)
  db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to db")
	}

	db.AutoMigrate(&Entry{})

	DB = database
}

