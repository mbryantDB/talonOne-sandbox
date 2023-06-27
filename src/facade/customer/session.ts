import CustomerSessionService from "../../service/customer/session"
import { CustomerSession } from "../../model/CustomerSessionRequest"
import { getApplicationName } from "../../util/getApplicationInfo"


// Creates the web request through an object.
//
// API Ref: https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2
const TalonOne = require("talon_one")
const customerSession = TalonOne.NewCustomerSessionV2.constructFromObject({
    profileId: 'example_prof_id',
    cartItems: [
        {
            name: 'Döner King',
            sku: 'kd-100',
            quantity: 1,
            price: 2.00,
            category: 'pizzas'
        },
        {
            name: 'Spezi 500ml',
            sku: 'sp-50',
            quantity: 1,
            price: 2,
            category: 'beverages'
        }
    ],
    couponCodes: [
        'Cool-Summer!'
    ]
} as CustomerSession)

const sessionService = new CustomerSessionService()

export default class CustomerSessionFacade {

    // CustomerSession is being mocked above.
    async createSession(req: any): Promise<any> {
        return await sessionService.createSession(getApplicationName(), customerSession)
    }

}