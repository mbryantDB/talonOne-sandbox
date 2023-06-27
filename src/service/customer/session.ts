import { integrationApi } from "../../client/integration";

const TalonOne = require("talon_one")

export default class CustomerSessionService {

    // Create session
    async createSession(integrationId: string, customerSession: any): Promise<any> {
        const integrationRequest = new TalonOne.IntegrationRequest(customerSession)

        console.log('Creating customer session with Integration API')
        return await integrationApi
            .updateCustomerSessionV2(integrationId, integrationRequest)
            .then(
                (data: any) => {
                    return JSON.stringify(data, null, 2)
                }
            )
            .catch(
                (error: Error) => {
                    return error
                }
            )
    }
}