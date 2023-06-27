import { integrationApi } from "../../client/integration";
import {handleData} from "../../util/handleData";

export default class CustomerProfileService {

    async createOrUpdateProfile(customerId: string, customerProfile: any): Promise<any> {
        let opts = {
            'runRuleEngine': true, // Boolean | Indicates whether to run the Rule Engine.  If `true`, the response includes: - The effects generated by the triggered campaigns are returned in the `effects` property. - The created coupons and referral objects.  If `false`: - The rules are not executed and the `effects` property is always empty. - The response time improves. - You cannot use `responseContent` in the body.
            'dry': true // Boolean | (Only works when `runRuleEngine=true`) Indicates whether to persist the changes. Changes are ignored when `dry=true`.  When set to `true`, you can use the `evaluableCampaignIds` body property to select specific campaigns to run.
        }

        console.log(`Creating or updating customer profile`)
        return integrationApi
            .updateCustomerProfileV2(customerId, customerProfile, opts)
            .then(handleData)
    }
}