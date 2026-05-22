const { generateWebpackConfig, merge } = require('shakapacker')

module.exports = merge({}, generateWebpackConfig())
