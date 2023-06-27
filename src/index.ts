import express, { Express } from 'express'
import dotenv from 'dotenv'
dotenv.config()


const app: Express = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

// Controller imports
import { CustomerSession } from "./routes/customer/session"
import { CustomerProfile } from "./routes/customer/profile"

// Initializing APIs
const customerSession = new CustomerSession()
const customerProfile = new CustomerProfile()

// Creating endpoint mapping
//PUT /customer/session
app.put('/customer/session', customerSession.createOrUpdateSession)

// PUT /customer/profile
app.put('/customer/profile', customerProfile.createOrUpdateProfile)
