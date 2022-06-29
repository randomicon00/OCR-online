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

  r.GET("/hello". func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "hello world!",
    })
  })
  fmt.Println("Starting hello world web service...")
  r.Run()
}

