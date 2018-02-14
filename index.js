const express = require('express')
const app = express()
const useragent = require('express-useragent')

app.use(useragent.express())

app.get('/', function(req, res) {
  const { os, browser } = req.useragent
  const ip = req.ip

  res.json( {os, browser, ip} )
});

const port = process.env.PORT || 4567
app.listen(port, () => console.log(`listening on ${port}`))