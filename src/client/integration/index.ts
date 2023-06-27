const TalonOne = require("talon_one")
const { baseClient } = require("../index")

const api_key_v1 = baseClient.authentications["api_key_v1"]
api_key_v1.apiKey = process.env.INTEGRATION_API_KEY
api_key_v1.apiKeyPrefix = "ApiKey-v1"

export const integrationApi = new TalonOne.IntegrationApi()


