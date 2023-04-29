package logic

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
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

func GetAllByDate(c *gin.Context) {
	date := c.Param("date")

	// Assuming you have some kind of database connection or data store
	// where you can fetch the data by date
	//data, err := fetchDataByDate(date)
	data, err := "", nil

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch data by date",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}

func CreateOne(item interface{}) (interface{}, error) {
	log.Println("CreateOne request")

	// TODO implementation here

	return nil, nil
}

func EditOne(id string) (interface{}, error) {
	log.Println("EditOne request")

	// TODO implementation here

	return nil, nil
}

func DeleteOne(id string) (interface{}, error) {
	log.Println("DeleteOne request")

	// TODO implementation here

	return nil, nil
}

func GetStats() (interface{}, error) {
	log.Println("GetStats request")

	// TODO implementation here

	return nil, nil
}
