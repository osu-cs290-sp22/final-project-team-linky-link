var fs = require('fs')
var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

var closetData = require('./closetData.json')

var app = express()
var port = process.env.PORT || 8000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res, next) {
  res.status(200).render('homepage')
})

app.get('/closet/addShirt', function (req, res, next) {
  res.status(200).render('shirtPage', {
    shirts:closetData.shirts
  })
})

app.get('/closet', function (req, res, next) {
  res.status(200).render('closet', {
    closet: closetData
  })
})

app.get('/closet/:closetId', function (req, res, next) {
  var closetId = req.params.closetId.toLowerCase()
  if (closetData.closetId) {
    res.status(200).render('shirtPage', closetData.closetId)
  } else {
    next()
  }
})

app.post('/closet/addShirt', function (req, res) {
  // var closetId = req.params.closetId.toLowerCase()
  // if (closetData.closetId) {
    console.log("  - req.body:", req.body)
    if (req.body && req.body.id && req.body.url) {
      closetData.shirts.push({
        id: req.body.id,
        url: req.body.url
      })
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
  
})

app.get('*', function (req, res, next) {
  res.status(404).render('404', {
    page: req.url
  })
})

app.listen(port, function () {
  console.log("== Server listening on port", port)
})
