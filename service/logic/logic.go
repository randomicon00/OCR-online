package logic

import (
  "log"
  "net/http"

  "github.com/example/db"
)

func GetAll() (interface{}, int) {
  log.Println("GetAll request")

  var entries []db.Entry
  result := db.GetDB().Find(&entries)
  if result.Error != nil {
    return nil, http.StatusInternalServerError
  }

  return entries, http.StatusOK
}

func GetAllByDate() (interface{}, int) {
  log.Println("GetAllByDate request")

  // implementation here

  return nil, http.StatusOK
}

func CreateOne() (interface{}, int) {
  log.Println("CreateOne request")

  // implementation here

  return nil, http.StatusOK
}

func EditOne() (interface{}, int) {
  log.Println("EditOne request")

  // implementation here

  return nil, http.StatusOK
}

func DeleteOne() (interface{}, int) {
  log.Println("DeleteOne request")

  // implementation here

  return nil, http.StatusOK
}

func GetStats() (interface{}, int) {
  log.Println("GetStats request")

  // implementation here

  return nil, http.StatusOK
}
