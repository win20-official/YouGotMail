const express = require("express")
const favicon = require("serve-favicon")
const path = require("path")
const mail = require("mail.tm-api")
const app = express()
const port = 8080

app.use(favicon(path.join(__dirname, "public", "favicon.ico")))

app.get("/", async function (req, res) {
  const numbers = Math.floor(Math.random() * 80000000)
  const name = "hellowater"
  const pass = "1234"
  const account = await mail.createAccount(`${name}${numbers}@karenkey.com`, pass)
  res.send(`<title>Mail.tm custom mail creator</title> <style> body { font-family: sans-serif; background-color: black; color: white; } </style> <h1>Mail.tm random e-mail generator</h1> <p>E-mail: ${name}${numbers}@karenkey.com</p> <p>Password: ${pass}</p> <button onclick="location.replace('https://mail.tm');">Go to Mail.tm</button> <button onclick="location.reload();">Create new e-mail</button>`)
})

app.listen(port, () => {
  console.log(`Temporary mail server is running on port ${port}`)
})