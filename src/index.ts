import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


// Customer Session API
const {
    createSession
} = require('./routes/customer/session')


//PUT /customer/session
app.put('/customer/session', createSession)