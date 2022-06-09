var fs = require('fs')
var express = require('express')
var exphbs = require('express-handlebars')

var closetData = require('./closetData.json')

var app = express()
var port = process.env.PORT || 8000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res, next) {
  res.status(200).render('homepage')
})

app.get('/closet', function (req, res, next) {
  res.status(200).render('closet', {
    closet: closetData
  })
})

app.get('/closet/:shirt', function (req, res, next) {
  var shirt = req.params.shirt.toLowerCase()
  if (closetData[shirt]) {
    res.status(200).render('shirtPage', closetData[shirt])
  } else {
    next()
  }
})

app.post('/closet/:shirt/addShirt', function (req, res, next) {
  var shirt = req.params.shirt.toLowerCase()
  if (closetData[shirt]) {
    console.log("  - req.body:", req.body)
    if (req.body && req.body.id && req.body.url) {
      closetData[shirt].shirts.push({
        id: req.body.id,
        url: req.body.url
      })
      console.log("  - closetData[" + shirt + "]:", closetData[shirt])
      fs.writeFile(
        "./closetData.json",
        JSON.stringify(closetData, null, 2),
        function (err) {
          if (!err) {
            res.status(200).send("Shirt successfully uploaded!!!")
          } else {
            res.status(500).send("Error: error uploading shirt")
          }
        }
      )
    } else {
      res.status(400).send("Error: request body needs a 'url' and 'id'")
    }
  } else {
    next()
  }
})

app.get('*', function (req, res, next) {
  res.status(404).render('404', {
    page: req.url
  })
})

app.listen(port, function () {
  console.log("== Server listening on port", port)
})
