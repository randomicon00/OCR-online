package controllers

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Conversion represents the model for a conversion
type Conversion struct {
	gorm.Model
	Amount     float64
	From       string
	To         string
	Result     float64
	Successful bool
}

// GetAllConversions gets all conversions from the database
func GetAllConversions(c *gin.Context) {
	log.Println("GetAllConversions handler called")

	var conversions []Conversion
	if err := db.Find(&conversions).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to retrieve conversions from database",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": conversions,
	})
}

// GetConversion gets a single conversion by ID from the database
func GetConversion(c *gin.Context) {
	log.Println("GetConversion handler called")

	id := c.Param("id")
	var conversion Conversion
	if err := db.First(&conversion, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Conversion not found",
			})
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to retrieve conversion from database",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": conversion,
	})
}

// AddConversion adds a conversion to the database
func AddConversion(c *gin.Context) {
	log.Println("AddConversion handler called")

	var conversion Conversion
	if err := c.ShouldBindJSON(&conversion); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to parse request body",
		})
		return
	}

	if err := db.Create(&conversion).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to add conversion to database",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"result": "Conversion added",
	})
}

// GetAllConversionErrors gets all conversion errors from the database
func GetAllConversionErrors(c *gin.Context) {
	log.Println("GetAllConversionErrors handler called")

	var conversions []Conversion
	if err := db.Where("successful = ?", false).Find(&conversions).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to retrieve conversion errors from database",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": conversions,
	})
}

func AddConversionError(c *gin.Context) {
  log.Println("AddConversionError Handlers called")
  c.JSON(http.statusCreated, gin.H{"result": "add conversion!"})
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
  // Log the request path that triggered the 404 error
  log.Printf("404 Error: %s\n", c.Request.URL.Path)
  
  // Set the response status code to 404 and return an error message as JSON
  c.JSON(http.StatusNotFound, gin.H{
    "error": "The requested resource was not found on this server.",
  })
}

func GetStats(c *gin.Context) {
    log.Println("GetStats request")
    stats, err := logic.GetConversionStats()
    if err != nil {
        log.Println("Error getting conversion statistics:", err)
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to get conversion statistics",
        })
        return
    }
    c.JSON(http.StatusOK, stats)
}

