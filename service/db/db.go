package main

import (
  "database/sql"
  "fmt"
 
  // importing sql drivers as the blank identifier
  // more info: https://www.calhoun.io/why-we-import-sql-drivers-with-the-blank-identifier/
  _ "github.com/lib/pq"
)

const (
  host     = "localhost"
  port     = 5432
  user     = "postgres"
  password = "password"
  dbname   = "dbname"
)

func DB() {
  fmt.Println("this is where db code should be..")
}

