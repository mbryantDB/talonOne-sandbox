import { integrationApi } from "../../client/integration"
import {handleData} from "../../util/handleData";

export default class CustomerSessionService {

    // Create session
    async createOrUpdateSession(integrationId: string, customerSession: any): Promise<any> {

        console.log('Creating customer session with Integration API')

        return integrationApi
            .updateCustomerSessionV2(integrationId, customerSession)
            .then(handleData)
    }
}