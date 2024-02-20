package lib

import (
  "io/ioutil"
  "net/http"

  "github.com/otiai10/gosseract/v2"
)

func PerformOCR(req *http.Request) (string, error) {
  file, _, err := req.FormFile("image")
  if err != nil {
    return "", err
  }
  defer file.Close()

  imgBytes, err := ioutil.ReadAll(file)
  if err != nil {
    return "", err
  }

  client := gosseract.NewClient()
  defer client.Close()
  
  client.SetImageFromBytes(imgBytes)
  
  text, err := client.Text()
  if err != nil {
    return "", err
  }

  return text, nil
}

func AddWatermarkToImage() {
  // TODO implement watermark in an image
  // TODO this should be processed as a background process
}

