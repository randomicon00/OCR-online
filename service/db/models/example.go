package models

type User struct {
  ID          uint   `json:"id" gorm:"primary_key"`
  UserName    string `json:"username"` 
  Age         uint   `json:"age"`
}

type Entry struct {
  ID       uint   `json:"id" gorm:"primary_key"`
  Uri      string `json:"uri"`
  Created  string `json:"created"`
}

