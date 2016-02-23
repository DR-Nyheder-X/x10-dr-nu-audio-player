require('babel-core/register')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

var port = process.env.PORT || 8000
require('./src/server')(port)
