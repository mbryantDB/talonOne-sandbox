import dotenv from 'dotenv'
dotenv.config()

const config = {
  PORT: process.env?.port ? process.env.port : 3000,
  TALON_URL: process.env.TALON_URL,
  INTEGRATION_API_KEY: process.env.INTEGRATION_API_KEY,
  MANAGEMENT_API_KEY: process.env.MANAGEMENT_API_KEY,
  DRY_RUN: process.env?.DRY_RUN ? process.env.DRY_RUN : true
}

export default config