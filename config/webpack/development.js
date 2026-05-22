process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { webpackConfig, merge } = require('shakapacker')

module.exports = merge({}, webpackConfig)
