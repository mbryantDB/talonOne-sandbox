import config from '../../util/config'
import baseClient from '../index'

const TalonOne = require('talon_one')

const management_key = baseClient.authentications['management_key']
management_key.apiKey = config.MANAGEMENT_API_KEY
management_key.apiKeyPrefix = 'ManagementKey-v1'

export const managementApi = new TalonOne.ManagementApi(management_key)
