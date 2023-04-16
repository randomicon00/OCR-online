package logic

import (
  "log"
  "net/http"

  "example/models"
)

func GetAll() ([]models.Entry, int) {
  log.Println("GetAll request")

  var entries []models.Entry
  result := models.GetDB().Find(&entries)
  if result.Error != nil {
    return nil, http.StatusInternalServerError
  }

  return entries, http.StatusOK
}

func GetAllByDate(date string) (interface{}, int) {
  log.Println("GetAllByDate request")

  // implementation here

  return nil, http.StatusOK
}

func CreateOne(item interface{}) (interface{}, int) {
  log.Println("CreateOne request")

  // implementation here

  return nil, http.StatusOK
}

func EditOne(id string) (interface{}, int) {
  log.Println("EditOne request")

  // implementation here

  return nil, http.StatusOK
}

func DeleteOne(id string) (interface{}, int) {
  log.Println("DeleteOne request")

  // implementation here

  return nil, http.StatusOK
}

func GetStats() (interface{}, int) {
  log.Println("GetStats request")

  // implementation here

  return nil, http.StatusOK
}
