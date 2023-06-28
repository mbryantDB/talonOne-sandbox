import CustomerSessionFacade from '../../facade/customer/session'
import {
  CustomerSessionRequest,
  isCustomerSessionRequest,
} from '../../model/Customer/CustomerSessionRequest'
import { reduceBodyToObject } from '../../util/reduceBodyToObject'
import { Router } from 'express'

const sessionFacade = new CustomerSessionFacade()

const customerSessionRouter = Router()

customerSessionRouter.put(
  '/:integrationId',
  async (req: any, res: any): Promise<any> => {
    const { integrationId } = req.params

    // Request validation
    if (!integrationId) {
      res.status(400).json({ message: "No param: 'integrationId'" })
    }
    if (!isCustomerSessionRequest(req.body)) {
      res
        .status(400)
        .json({ message: "Body is not of type: 'CustomerSessionRequest'" })
    }

    // Merge request body with CustomerSessionRequest to ensure we're not sending
    // extra fields to Talon One
    const reduced = reduceBodyToObject(new CustomerSessionRequest(), req.body)

    sessionFacade
      .createOrUpdateSession(integrationId, reduced)
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.status(400).send(err))
  }
)

customerSessionRouter.put(
  '/:integrationId/reopen',
  async (req: any, res: any): Promise<any> => {
    const { integrationId } = req.params

    // Request validation
    if (!integrationId) {
      res.status(400).json({ message: "No param: 'integrationId'" })
    }

    sessionFacade
      .reopenCustomerSession(integrationId)
      .then((data: any) => res.json(data))
      .catch((err: Error) => res.status(400).json(err))
  }
)

export default customerSessionRouter
