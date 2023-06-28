import { integrationApi } from "../../client/integration"
import {handleData} from "../../util/handleData";

export default class CustomerSessionService {

    // Create session
    async createOrUpdateSession(integrationId: string, customerSession: any): Promise<any> {

        return integrationApi
            .updateCustomerSessionV2(integrationId, customerSession)
            .then(handleData)
            .catch((err: Error) => console.error(err))
    }

    async reopenCustomerSession(customerSessionId: string): Promise<any> {

        return integrationApi
            .reopenCustomerSession(customerSessionId)
            .then(handleData)
    }

}