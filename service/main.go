package main

import (
  "fmt"
  "github.com/gin-gonic/gin"
  "net/http"
)

func main() {
  r := gin.Default()
  r.GET("/hello". func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "hello world!",
    })
  })
  fmt.Println("Starting hello world web service...")
  r.Run()
}

