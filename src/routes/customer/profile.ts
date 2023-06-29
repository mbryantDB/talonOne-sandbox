import CustomerProfileFacade from '../../facade/customer/profile'
import {
  CustomerProfileRequest,
  isCustomerProfileRequest,
} from '../../model/Customer/CustomerProfileRequest'
import { Request, Response, Router } from 'express'
import { reduceBodyToObject } from '../../util/reduceBodyToObject'

const customerProfileRouter = Router()
const profileFacade = new CustomerProfileFacade()

export class CustomerDataOptions {
  profile?: boolean = undefined
  referrals?: boolean = undefined
  coupons?: boolean = undefined
  loyalty?: boolean = undefined
  giveaways?: boolean = undefined
}

// PUT Create Or Update Profile
// Effect Responses: [Talon.One 'effect' response docs](https://docs.talon.one/docs/dev/integration-api/api-effects)
customerProfileRouter.put(
  '/:customerId',
  async (req: Request, res: Response): Promise<any> => {
    const { customerId } = req.params

    // Request validation
    if (!customerId) {
      res.status(400).json({ message: "No param: 'customerId'" })
      return
    }
    if (!isCustomerProfileRequest(req.body)) {
      res
        .status(400)
        .json({ message: "Body isn't of type: CustomerProfileRequest" })
      return
    }

    // Reduces the body to only fields within CustomerProfileRequest
    // this is a workaround since types aren't compiled down to JS.
    const reduced = reduceBodyToObject(new CustomerProfileRequest(), req.body)

    profileFacade
      .createOrUpdateProfile(customerId, reduced)
      .then((data: any) => res.send(data))
      .catch((err: Error) => res.status(400).send(err))
  }
)

// GET List Customer Data
customerProfileRouter.get(
  '/:customerId',
  async (req: Request, res: Response): Promise<any> => {
    const { customerId } = req.params
    const customerOptions: CustomerDataOptions = reduceBodyToObject(new CustomerDataOptions(), req.query)

    if (!customerId) {
      res.status(400).send({ message: "No param: 'customerId'" })
      return
    }

    if(Object.values(customerOptions).indexOf("true") < 0) {
      res.status(400).send({ message: "Include at least one query param: [ 'profile', 'referrals', 'coupons', 'loyalty', 'giveaways' ]" })
      return
    }



    profileFacade
      .getCustomerData(customerId, customerOptions)
      .then((data: any) => res.send(data))
      .catch((err: Error) => res.status(400).send(err))
  }
)

export default customerProfileRouter
