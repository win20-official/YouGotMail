const express = require("express")
const favicon = require("serve-favicon")
const path = require("path")
const app = express()
const port = 2050

app.use(favicon(path.join(__dirname, "public", "favicon2.ico")))

app.get("/", (req, res) => {
  res.redirect("/health")
})

app.get("/health", async function(req, res) {
  const response = await fetch("http://localhost:8080")
  res.send(`<!DOCTYPE html> <title>Health check website</title> <style> body{ font-family: sans-serif; background-color: black; color: white; } </style> <h1>Response code for the main server</h1> <p>The response code is ${response.status}</p>`)
})

app.listen(port, () => {
  console.log(`Health check listening on port ${port}`)
})
