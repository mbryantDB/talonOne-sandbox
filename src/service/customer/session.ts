const { integrationApi } = require("../../client/integration")
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
});

export default class CustomerSessionService {

    // Create session
    async createSession(req: any): Promise<any> {
        const integrationRequest = new TalonOne.IntegrationRequest(customerSession)

        console.log('Sending example request to Integration API.')
        return await integrationApi
            .updateCustomerSessionV2("example_integration_v2_id", integrationRequest)
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