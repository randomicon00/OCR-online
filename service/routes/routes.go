package routes

import (
  "log"
  "net/http"

	"github.com/gin-gonic/gin"
)

// Todo complete the whole list of handlers
func GetAllConversions(c *gin.Context) {
  log.Println("GetAllConversions Handlers called")
	c.JSON(http.statusOK, gin.H{"data": "all conversions sent"})
}

func GetConversion(c *gin.Context) {
  log.Println("GetConversion Handlers called")
  c.JSON(http.statusOK, gin.H{"data": "conversion sent"})
}

func AddConversion(c *gin.Context) {
  log.Println("AddConversion Handlers called")
  c.JSON(http.statusOK, gin.H{"result": "add conversion!"})
}

func GetAllConversionErrors(c *gin.Context) {
  log.Println("GetAllConversionErrors Handlers called")
  c.JSON(http.statusOK, gin.H{"result": "add conversion!"})
}

func AddConversionError(c *gin.Context) {
  log.Println("AddConversionError Handlers called")
  c.JSON(http.statusOK, gin.H{"result": "add conversion!"})
}

func EditConversion(c *gin.Context) {
  log.Println("EditConversion Handlers called")
  c.JSON(http.statusOK, gin.H{"result": "edit conversion!"})
}

func DeleteConversion(c *gin.Context) {
  log.Println("DeleteConversions Handlers called")
  c.JSON(http.statusOK, gin.H{"result": "delete conversion!"})
}

func NotFoundHandler(c *gin.Context) {
  log.Println("NotFoundHandler Handlers called")
  c.JSON(http.statusNotFound, gin.H{"error": "Not found!"})
}

