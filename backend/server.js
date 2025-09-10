const express = require('express')
const cors = require('cors')
const healthRoute = require("./routes/health")
const setUpProxies =  require("./routes/proxies")
require('dotenv').config()

const app = express()
app.use(cors())

//routes here
app.use("/health", healthRoute)

setUpProxies(app);

const PORT = process.env.PORT || 7460

app.listen(PORT, () => {
    console.log(`API Gateaway running on port ${PORT}`)
})