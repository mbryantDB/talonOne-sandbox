import CustomerSessionService from "../../service/customer/session"
import {CustomerSessionRequest} from "../../model/Customer/CustomerSessionRequest"
import {getSessionId} from "../../util/getSessionId"


// Creates the web request through an object.
//
// API Ref: https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2
const getCustomerSession = (state: string): CustomerSessionRequest => {
    return {
        customerSession: {
            profileId: 'MB1994',
            state,
            cartItems: [
                {
                    name: 'Döner King',
                    sku: 'kd-100',
                    quantity: 1,
                    price: 100.00,
                    category: 'pizzas'
                },
                {
                    name: 'Spezi 500ml',
                    sku: 'sp-50',
                    quantity: 1,
                    price: 250.50,
                    category: 'beverages'
                }
            ],
            couponCodes: [
                '95XL-KDK8'
            ],
            additionalCosts: {
                shipping_cost: {
                    price: 10
                }
            }
        },
        responseContent: [
            "customerSession",
            "customerProfile",
            "coupons"
        ]
    }
}

const sessionService = new CustomerSessionService()

export default class CustomerSessionFacade {

    // CustomerSession is being mocked above.
    async createOrUpdateSession(req: any): Promise<any> {
        // TODO check req for proper auth
        if(!req.query.profileId) { throw new Error('Must include \'profileId\' as a query param.') }

        const state = req.query.state ? req.query.state : 'open'
        return await sessionService.createOrUpdateSession(getSessionId(), getCustomerSession(state))
    }

    async reopenCustomerSession(req :any): Promise<any> {
        if(!req.query.customerSessionId) {
            console.log('No query param customerSessionId')
            throw new Error('Must include \'customerSessionId\' as a query param.')
        }

        return await sessionService.reopenCustomerSession(req.query.customerSessionId)
    }

}