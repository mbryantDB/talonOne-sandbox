const TalonOne = require("talon_one");

//Get .env vars
const env = process.env
const talonURL = env.TALON_URL

// Configure baseClient
const baseClient: any = TalonOne.ApiClient.instance;
baseClient.basePath = talonURL


// export
module.exports = {
    baseClient
}