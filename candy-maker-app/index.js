const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static('public'))

app.use((req, res, next) => {
  res.setHeader(
    "content-security-policy-report-only",
    "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://api.github.com; font-src 'self'; frame-src 'self'; img-src 'self' https://*.githubusercontent.com; manifest-src 'self'; media-src 'self'; report-uri https://5f723390a82aebac90867ce8.endpoint.csper.io/; worker-src 'none';"
  );
  next();
});

app.use(cors({ origin: "http://localhost:3000" }));

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:id', getManufacturerById)

app.get('/api/products', getAllProducts)

app.get('/api/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(8291, () => {
  console.log('Listening on port 8291...') // eslint-disable-line no-console
})
