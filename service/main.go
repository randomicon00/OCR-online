package main

import (
  "fmt"
  "github.com/gin-gonic/gin"
  "net/http"
  "github.com/gin-contrib/cors"
)

func main() {
  r := gin.Default()

  router.Use(cors.New(cors.Config{
    AllowOrigins:     []string{"https://example.com"},
    AllowMethods:     []string{"POST", "PUT", "PATCH"},
    AllowHeaders:     []string{"Origin"},
    ExposeHeaders:    []string{"Content-Length"},
    AllowCredentials: true,
    AllowOriginFunc: func(origin string) bool {
      return origin == "https://mysite.com"
    },
    MaxAge: 60 * time.Minute,
  }))

  r.GET("/hello". func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "hello world!",
    })
  })
  fmt.Println("Starting hello world web service...")
  r.Run()
}

