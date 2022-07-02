package main

import (
  "fmt"
  "github.com/gin-gonic/gin"
  "net/http"
  "github.com/gin-contrib/cors"
)

func main() {
  r := gin.Default()

  router.Use(cors.Default())

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

  fmt.Println("Starting OCR web service...")
  r.Run()
}

