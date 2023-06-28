import config from '../util/config'
const TalonOne = require("talon_one")

// Configure baseClient
const baseClient: any = TalonOne.ApiClient.instance
baseClient.basePath = config.TALON_URL


// export
export default baseClient