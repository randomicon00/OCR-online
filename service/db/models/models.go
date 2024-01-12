package models

import "gorm.io/gorm"

type User struct {
  gorm.Model
  Username string `json:"username"`
  Email string `json:"email"`
  Password string `json:"password"`
}

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

type ConversionError struct {
  Message string
  Code int
}
