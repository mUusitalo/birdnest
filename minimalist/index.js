import { getRefreshedViolators } from './src/refreshLogic/getRefreshedViolators.js'
import { PORT, UPDATE_INTERVAL_MILLISECONDS } from './src/utils/config.js'
import fs from 'fs/promises'
import http from 'http'

var currentViolators = []

async function update() {
  try {
    currentViolators = await getRefreshedViolators(currentViolators)
    console.log(currentViolators)
  } catch (e) {
    console.error(e)
  }
}

http.createServer(async (req, res) => {
  const { url } = req
  switch(url) {
    case "/":
      res.writeHead(200, {'Content-Type': 'text/html'})
      // Reading the file every time for easier debugging
      res.write(await fs.readFile('index.html'))
      res.end()
      break
    case "/api/violators":
      const json = JSON.stringify(currentViolators)
      res.writeHead(200, {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(json)})
      res.write(JSON.stringify(currentViolators))
      res.end()
      break
    default:
      res.end('Not found')
      break
  }
}).listen(PORT)

update()
setInterval(update, UPDATE_INTERVAL_MILLISECONDS)

