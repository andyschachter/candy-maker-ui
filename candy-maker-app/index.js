const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:id', getManufacturerById)

app.get('/api/products', getAllProducts)

app.get('/api/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(8291, () => {
  console.log('Listening on port 8291...') // eslint-disable-line no-console
})
