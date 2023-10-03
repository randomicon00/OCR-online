package logic

import (
  "log"
  "net/http"

  "github.com/gin-gonic/gin"
  "github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
)

func GetAll() ([]models.Conversion, error) {
  log.Println("GetAll handler")

  var entries []models.Entry
  db := models.DB
  result := db.Find(&entries)
  
  if result.Error != nil {
    return nil, result.Error
  }

  return entries, nil
}

func GetAllByDate(date string) {
  log.Println("GetAllByDate handler")
  // TODO implement this handler
  return
}

func CreateOne(item interface{}) {
  log.Println("CreateOne handler")

  // TODO implement the handler

  return
}

func EditOne(id string) {
  log.Println("EditOne handler")

  // TODO implement the handler

  return
}

func DeleteOne(id string) {
  log.Println("DeleteOne handler")

  // TODO implement the handler

  return
}

