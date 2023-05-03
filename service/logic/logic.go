package logic

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
)

func GetAll() ([]models.Entry, error) {
	log.Println("GetAll handler")
	db := models.DB
	var entries []models.Entry
	result := db.Find(&entries)
	if result.Error != nil {
		return nil, result.Error
	}

	return entries, nil
}

func GetAllByDate(date string) {
  log.Println("GetAllByDate handler")
  // TODO implement this handler
}

func CreateOne(item interface{}) {
	log.Println("CreateOne handler")

	// TODO implment the handler

	return
}

func EditOne(id string) {
	log.Println("EditOne handler")

	// TODO implment the handler

	return
}

func DeleteOne(id string) {
	log.Println("DeleteOne handler")

	// TODO implment the handler

	return 
}


	log.Println("GetStats handler")

	// TODO implment the handler

	return
}
