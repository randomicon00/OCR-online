package models

import (
  "time"
)

type User struct {
  ID          uint   `json:"id" gorm:"primary_key"`
  UserName    string `json:"username"` 
  Password    string `json:"password"`
  Age         uint   `json:"age"`
}

type Entry struct {
  ID         uint      `json:"id" gorm:"primary_key"`
  Uri        string    `json:"uri"`
  CreatedAt  time.Time `json:"created_at"`
  UpdatedAt  time.Time `json:"updated_at"`
  Status     string 
}

type Config struct {
  Address    string
  Port       string
}

