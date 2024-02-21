package controllers

import (
  "log"
  "net/http"

  "github.com/gin-gonic/gin"
  "github.com/randomicon00/OCR-Webservice-frontend/service/db/models"
  "github.com/randomicon00/OCR-Webservice-frontend/service/lib"
  "github.com/randomicon00/OCR-Webservice-frontend/service/logic"
  "gorm.io/gorm"
)

func PerformOCR(c *gin.Context) {
  text, err := lib.PerformOCR(c.Request)

  if err != nil {
    c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to perform OCR"})
    return
  }
  c.JSON(http.StatusOK, gin.H{"text": text})
}

// GetAllConversions gets all conversions from the database
func GetAllConversions(c *gin.Context) {
  log.Println("GetAllConversions handler call")

  db := models.DB
  var conversions []models.Conversion
  
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
  db := models.DB
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
  db := models.DB
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
  db := models.DB
  var conversionError ConversionError
  if err := c.ShouldBindJSON(&conversionError); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // Use GORM to create a new conversion error
  if err := db.Create(&conversionError).Error; err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create conversion error"})
    return
  }

  c.JSON(http.StatusCreated, gin.H{"data": conversionError})
}

func EditConversion(c *gin.Context) {
  log.Println("EditConversion Handlers called")
  db := models.DB
  id := c.Param("id")

  var conversion models.Conversion
  if err := db.First(&conversion, id).Error; err != nil {
    c.JSON(http.StatusNotFound, gin.H{"error": "Conversion not found"})
    return
  }

  var input UpdateConversionInput
  if err := c.ShouldBindJSON(&input); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  if input.Name != "" {
    conversion.Name = input.Name
  }
  if input.Value != nil {
    conversion.Value = *input.Value
  }

  if err := db.Save(&conversion).Error; err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update conversion"})
    return
  }

  c.JSON(http.StatusOK, gin.H{"data": conversion})
}

func DeleteConversion(c *gin.Context) {
  log.Println("DeleteConversions Handlers called")
  db := models.DB
  id := c.Param("id")

  var conversion models.Conversion
  if err := db.First(&conversion, id).Error; err != nil {
    c.JSON(http.StatusNotFound, gin.H{"error": "Conversion not found"})
    return
  }

  if err := db.Delete(&conversion).Error; err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete conversion"})
    return
  }

  c.JSON(http.StatusOK, gin.H{"data": true})
}

func GetNotFound(c *gin.Context) {
  // Log the request path that triggered the 404 error
  log.Printf("404 Error: %s\n", c.Request.URL.Path)

  // Set the response status code to 404 and return an error message as JSON
  c.JSON(http.StatusNotFound, gin.H{
    "error": "Sorry, the requested resource was not found on the server.",
  })
}

func GetStats(c *gin.Context) {
  log.Println("GetStats request")
  stats, err := logic.GetStats()
  if err != nil {
    log.Println("Error getting conversion statistics:", err)
    c.JSON(http.StatusInternalServerError, gin.H{
      "error": "Failed to get conversion statistics",
    })
    return
  }
  c.JSON(http.StatusOK, stats)
}

func GetData(c *gin.Context) {
  log.Println("GetData request")

  // TODO Return the data to be displayed in the charts
  return
}

func AddData(c *gin.Context) {
  log.Println("Add Data request")

  // TODO Insert the data to be displayed in the charts
  return
}

func EditData(c *gin.Context) {
  log.Println("Edit Data request")

  // TODO Edit the data to be displayed in the charts
  return
}

func DeleteData(c *gin.Context) {
  log.Println("Delete Data request")

  // TODO Delete the data to be displayed in the charts
  return
}

func EditBulkData(c *gin.Context) {
  log.Println("Edit Bulk Data request")

  // TODO Edit the data in bulk to be displayed in the charts
  return
}
