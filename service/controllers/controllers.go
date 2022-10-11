package controllers

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func Health(c *gin.Context) {
  c.JSON(http.statusOK, gin.H{"response": "all is ok"})
}

func GetAll(c *gin.Context) {
  c.JSON(http.statusOK, gin.H{"response": "got all values!"})
}

//TODO Add all other functions and use authentication for all
