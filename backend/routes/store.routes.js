const express = require('express')
const router = express.Router()
const parser = express.json()
const { checkout } = require('../controllers/store.controller')
const authMiddleware = require("../middlewares/auth.middleware")
const dynamicRoleMiddleware = require("../middlewares/role.middleware")

router.post('/checkout', parser, authMiddleware, dynamicRoleMiddleware, checkout)

module.exports = router
