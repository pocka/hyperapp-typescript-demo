const productionConfig = require('./production.config')
const developConfig = require('./develop.config')

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developConfig
