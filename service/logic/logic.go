package logic

import (
  "log"

	"github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
)

func GetAll() ([]models.Entry, error) {
  log.Println("GetAll request")
  db := models.DB
  var entries []models.Entry
  result := db.Find(&entries)
  if result.Error != nil {
    return nil, result.Error 
  }

  return entries, nil 
}

func GetAllByDate(date string) (interface{}, error) {
  log.Println("GetAllByDate request")

  // implementation here

  return nil, nil 
}

func CreateOne(item interface{}) (interface{}, error) {
  log.Println("CreateOne request")

  // implementation here

  return nil, nil
}

func EditOne(id string) (interface{}, error) {
  log.Println("EditOne request")

  // implementation here

  return nil, nil
}

func DeleteOne(id string) (interface{}, error) {
  log.Println("DeleteOne request")

  // implementation here

  return nil, nil
}

func GetStats() (interface{}, error) {
  log.Println("GetStats request")

  // implementation here

  return nil, nil
}
