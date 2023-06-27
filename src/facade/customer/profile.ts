import CustomerProfileService from "../../service/customer/profile";
import {CustomerProfileRequest} from "../../model/Customer/CustomerProfileRequest";
import {getCustomerId} from "../../util/getCustomerId";

const profileService = new CustomerProfileService()

const payload: CustomerProfileRequest = {
    attributes: {
        language: "en",
        shippingCountry: "US"
    },
    responseContent: [
        "customerProfile",
        "loyalty",
        "event",
        "awardedGiveaways",
        "ruleFailureReasons"
    ]
}

export default class CustomerProfileFacade {

    async createOrUpdateProfile(req: any): Promise<any> {
        // TODO check `req` for proper auth
        return await profileService.createOrUpdateProfile(getCustomerId(), payload)
    }
}