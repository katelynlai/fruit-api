const express = require('express');
const fruitsApp = express();
const fruitsRoutes = require("./routes/fruits")
const nutritionRoutes = require("./routes/nutritionRoutes")

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})
fruitsApp.use(express.json());
fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp