import CustomerProfileFacade from '../../facade/customer/profile'
import {
  CustomerProfileRequest,
  isCustomerProfileRequest,
} from '../../model/Customer/CustomerProfileRequest'
import { Request, Response, Router } from 'express'
import { reduceBodyToObject } from '../../util/reduceBodyToObject'

const customerProfileRouter = Router()
const profileFacade = new CustomerProfileFacade()

// PUT Create Or Update Profile
// Effect Responses: [Talon.One 'effect' response docs](https://docs.talon.one/docs/dev/integration-api/api-effects)
customerProfileRouter.put(
  '/:customerId',
  async (req: Request, res: Response): Promise<any> => {
    const { customerId } = req.params

    // Request validation
    if (!customerId) {
      res.status(400).json({ message: "No param: 'customerId'" })
    }
    if (!isCustomerProfileRequest(req.body)) {
      res
        .status(400)
        .json({ message: "Body isn't of type: CustomerProfileRequest" })
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

    if (!customerId) {
      res.status(400).json({ message: "No param: 'customerId'" })
    }

    profileFacade
      .getCustomerData(customerId)
      .then((data: any) => res.send(data))
      .catch((err: Error) => res.status(400).send(err))
  }
)

export default customerProfileRouter
