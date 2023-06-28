import CustomerSessionService from "../../service/customer/session"
import {CustomerSessionRequest} from "../../model/Customer/CustomerSessionRequest"

// Creates the web request through an object.
//
// API Ref: https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2
const sessionService = new CustomerSessionService()

export default class CustomerSessionFacade {

    // CustomerSession is being mocked above.
    async createOrUpdateSession(integrationId: string, customerSession: CustomerSessionRequest): Promise<any> {
        return await sessionService.createOrUpdateSession(integrationId, customerSession)
    }

    async reopenCustomerSession(integrationId :string): Promise<any> {
        return await sessionService.reopenCustomerSession(integrationId)
    }

}