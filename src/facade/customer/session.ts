import CustomerSessionService from "../../service/customer/session"
import {CustomerSessionRequest} from "../../model/Customer/CustomerSessionRequest"
import {getApplicationName} from "../../util/getApplicationInfo"


// Creates the web request through an object.
//
// API Ref: https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2
const customerSession: CustomerSessionRequest = {
    customerSession: {
        profileId: 'MB1994',
        cartItems:
            [
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
        couponCodes:
            [
                '95XL-KDK8'
            ]
    },
    responseContent: [
        "customerSession",
        "customerProfile",
        "coupons"
    ]
}

const sessionService = new CustomerSessionService()

export default class CustomerSessionFacade {

    // CustomerSession is being mocked above.
    async createOrUpdateSession(req: any): Promise<any> {
        // TODO check req for proper auth
        return await sessionService.createOrUpdateSession(getApplicationName(), customerSession)
    }

}