package controllers

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func Health(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "all is ok"})
}

func GetAll(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "got all entries!"})
}

func CreateOne(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "created one entry!"})
}

func EditOne(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "edited one entry!"})
}

func DeleteOne(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "deleted one entry!"})
}

//TODO Add all other functions and use authentication for all

func GetAllByDate(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{"response": "got all entries by date"})
}

