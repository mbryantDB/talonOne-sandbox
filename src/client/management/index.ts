const TalonOne = require("talon_one")
const { baseClient } = require("../index")

const management_key = baseClient.authentications["management_key"]
management_key.apiKey = process.env.MANAGEMENT_API_KEY
management_key.apiKeyPrefix = "ManagementKey-v1"

export const managementApi = new TalonOne.ManagementApi(management_key)