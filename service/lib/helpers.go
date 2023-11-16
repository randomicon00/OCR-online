package lib

import (
  "io/ioutil"
  "net/http"

  "github.com/otiai10/gosseract/v2"
)

// PerformOCR performs OCR on an image file attached to a multipart form request.
func PerformOCR(req *http.Request) (string, error) {
  // Get image file from request body
  file, _, err := req.FormFile("image")
  if err != nil {
    return "", err
  }
  defer file.Close()

  // Read image file bytes
  imgBytes, err := ioutil.ReadAll(file)
  if err != nil {
    return "", err
  }

  // Perform OCR on the source image 
  client := gosseract.NewClient()
  defer client.Close()
  client.SetImageFromBytes(imgBytes)
  text, err := client.Text()
  if err != nil {
    return "", err
  }

  return text, nil
}
