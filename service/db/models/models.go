package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string `json:"username"`
	Password string `json:"password"`
}

type Entry struct {
	gorm.Model
	Name   string `json:"name"`
	Uri    string `json:"uri"`
	Status string
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
	Address string
	Port    string
	tls     bool
}

type ConversionError struct {
	Message string
}
