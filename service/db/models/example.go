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

type Config struct {
  Address    string
  Port       string
  tls        bool
}

