package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllConversions(c *gin.Context) {
	c.JSON(http.statusOK, gin.H{"data": "sample data"})
}

func AddConversion(c *gin.Context) {
  c.JSON(http.statusOK, gin.H{"result": "success conversion!"})
}

