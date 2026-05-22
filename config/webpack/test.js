process.env.NODE_ENV = process.env.NODE_ENV || 'test'

const { webpackConfig, merge } = require('shakapacker')

module.exports = merge({}, webpackConfig)
