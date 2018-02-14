const express = require('express')
const app = express()
const useragent = require('express-useragent')
const getIP = require('ipware')().get_ip;

app.use(useragent.express())

app.get('/', function(req, res) {
  const { os, browser } = req.useragent
  const { clientIp } = getIP(req)

  res.json( {os, browser, clientIp} )
});

const port = process.env.PORT || 4567
app.listen(4567, () => console.log(`listening on ${port}`))