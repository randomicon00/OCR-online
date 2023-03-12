package controllers

import (
  "log"
  "net/http"

  "github.com/gin-gonic/gin"
)

func GetAll(c *gin.Context) {
  log.Println("GetAll request");
  c.JSON(http.StatusOK, gin.H{"response": "got all entries!"})
}

func GetAllByDate(c *gin.Context) {
  log.Println("GetAllByDate request");
  c.JSON(http.StatusOK, gin.H{"response": "got all entries by date"})
}

func CreateOne(c *gin.Context) {
  log.Println("CreateOne request");
  c.JSON(http.StatusOK, gin.H{"response": "created one entry!"})
}

func EditOne(c *gin.Context) {
  log.Println("EditOne request");
  c.JSON(http.StatusOK, gin.H{"response": "edited one entry!"})
}

func DeleteOne(c *gin.Context) {
  log.Println("DeleteOne request");
  c.JSON(http.StatusOK, gin.H{"response": "deleted one entry!"})
}

func GetStats(c *gin.Context) {
  log.Println("GetStats request");
  c.JSON(http.StatusOK, gin.H{"response": "got stats!"})
}

func HealthCheck(c *gin.Context) {
  log.Println("HealthCheck request");
  c.JSON(http.StatusOK, gin.H{"response": "all is ok"})
}

