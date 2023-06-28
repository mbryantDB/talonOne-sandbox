import express, { Express } from 'express'
import cors from 'cors'
import config from "./util/config"
import customerSessionRouter from "./routes/customer/session"
import customerProfileRouter from "./routes/customer/profile"

const app: Express = express()
const port = config.PORT

const allowedOrigins = [
    'http://localhost:3000'
]
const options: cors.CorsOptions = {
    origin: allowedOrigins
}

app.use(cors(options))
app.use(express.json())

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

// Middleware
app.use((req, res, next) => {
    console.log(`Request: method: ${req.method} | host: ${req.socket.remoteAddress} | path: ${req.path} | query: ${JSON.stringify(req.query)}`)
    next()
})

// Creating endpoint mapping
app.use('/customer/session', customerSessionRouter)
app.use('/customer/profile', customerProfileRouter)


app.get('/', (req, res) => {
    console.trace('Health Check')
    return res.sendStatus(200)
})
