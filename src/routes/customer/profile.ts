import CustomerProfileFacade from "../../facade/customer/profile"
import {CustomerProfileRequest, isCustomerProfileRequest} from "../../model/Customer/CustomerProfileRequest"
import {Request, Response} from "express";
import {reduceBodyToObject} from "../../util/reduceBodyToObject";


const profileFacade = new CustomerProfileFacade()

export class CustomerProfile {
    async createOrUpdateProfile(req: Request, res: Response): Promise<any> {

        // Request validation
        if(!req.params.customerId){ res.status(400).json( {message: 'No param: \'customerId\''}) }
        if(!isCustomerProfileRequest(req.body)){ res.status(400).json({message: 'Body isn\'t of type: CustomerProfileRequest'}) }

        // Reduces the body to only fields within CustomerProfileRequest
        // this is a workaround since types aren't compiled down to JS.
        let reduced = reduceBodyToObject(new CustomerProfileRequest(), req.body)

        profileFacade.createOrUpdateProfile(req.params.customerId, reduced)
            .then( (data: any) => res.send(data))
            .catch((err: Error) => res.status(400).send(err))
    }
}
