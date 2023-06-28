import config from "../../util/config"
import baseClient from "../index"

const TalonOne = require("talon_one")

const api_key_v1 = baseClient.authentications["api_key_v1"]
api_key_v1.apiKey = config.INTEGRATION_API_KEY
api_key_v1.apiKeyPrefix = "ApiKey-v1"

export const integrationApi = new TalonOne.IntegrationApi()


