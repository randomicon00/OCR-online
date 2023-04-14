package models

import (
  "time"
)

type User struct {
  ID          uint   `json:"id" gorm:"primary_key"`
  Username    string `json:"username"` 
  Password    string `json:"password"`
}

type Entry struct {
  ID         uint      `json:"id" gorm:"primary_key"`
  Name       string    `json:"name"`
  Uri        string    `json:"uri"`
  CreatedAt  time.Time `json:"created_at"`
  UpdatedAt  time.Time `json:"updated_at"`
  Status     string 
}

// Conversion represents the model for a conversion
type Conversion struct {
	gorm.Model
	Amount     float64
	From       string
	To         string
	Result     float64
	Successful bool
}

type Config struct {
  Address    string
  Port       string
  tls        bool
}

