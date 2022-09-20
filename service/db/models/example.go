package models

type Example {
  ID      uint    `json:"id" gorm:"primary_key"`
  Name    string  `json:"name"`
}

