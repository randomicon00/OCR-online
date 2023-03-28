package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
)

func SetupRouter() *gin.Engine {
   r := gin.Default()
   return r
}

func main() {
	r := SetupRouter()

	// TODO Add the right import and understand how it works
	models.ConnectDatabase()

	router.Use(cors.Default())
	// TODO Router should be in its own file/package
	r.POST("/upload", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "upload success!",
		})
	})

  // TODO Move callback to controller
	r.GET("/heatlh", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
      "message": "OCR service status: Online",
		})
	})
  

  // TODO Move callback to controller
	r.GET("/result", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "my ocr text!",
		})
	})

	log.Println("Starting OCR web service on port 8080...")
  r.Run(":8080")
}
