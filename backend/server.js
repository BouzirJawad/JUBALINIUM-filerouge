const express = require('express')
const cors = require('cors')
//const Routes = require("./routes/")
const setUpProxies =  require("./routes/proxies")
require('dotenv').config()

const app = express()
app.use(cors())

//routes here

setUpProxies(app);

const PORT = process.env.PORT || 7460

app.listen(PORT, () => {
    console.log(`API Gateaway running on port ${PORT}`)
})