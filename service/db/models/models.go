package models

import "gorm.io/gorm"

type User struct {
  gorm.Model
  Username string `json:"username"`
  Email string `json:"email"`
  Password string `json:"password"`
}

// Conversion represents the model for a conversion
type Conversion struct {
  gorm.Model
  Amount     float64
  From       string
  To         string
  Result     float64
  Success    bool
}

type Config struct {
  Address string
  Port    int
  TLS     bool
}

// Conversion error is for logging purposes
type ConversionError struct {
  Text string
  Code int
}
