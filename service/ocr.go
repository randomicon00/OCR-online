package main

import (
  "fmt"
  "github.com/otiai10/gosseract/v2"
)

// TODO Change from bin to lib
func main() {
  client := gosseract.NewClient()
  defer client.Close()
  client.SetImage("./images/english.jpeg")
  text, _ := client.Text()
  fmt.Println(text)
}
