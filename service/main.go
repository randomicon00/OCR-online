package main

import (
  "fmt"
  "net/http"
  
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
  "github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
)

func main() {
  r := gin.Default()

  // TODO add the right import and understand how it works
  // TODO 
  models.ConnectDatabase()

  router.Use(cors.Default())
  // TODO: Router should be in its own file/package
  r.POST("/upload", func(c *gin.Context) {
     c.JSON(http.StatusOK, gin.H{
        "message": "upload success!",
     })
  })

  r.GET("/heatlh", func(c *gin.Context) {
     c.JSON(http.StatusOK, gin.H{
        "message": "is online!",
     })
  })

  r.GET("/result". func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "my ocr text!",
    })
  })

  fmt.Println("Starting OCR web service on port 8080...")
  r.Run()
}

