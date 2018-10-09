const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = 8899
const {dbHandler, rewriterHandler} = require('./handlers')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// 获取db数据
const db = dbHandler('./data')
let rule = jsonServer.rewriter(rewriterHandler(db))
server.use(rule)

// Use router
let route = jsonServer.router(db)
server.use(route)

server.listen(port, () => {
  console.log('JSON Server is running on', port)
})