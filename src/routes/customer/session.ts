import CustomerSessionFacade from "../../facade/customer/session"

const sessionFacade = new CustomerSessionFacade()

export class CustomerSession {
    createOrUpdateSession(req: any, res: any): any {

        sessionFacade.createOrUpdateSession(req)
            .then( (data: any) => res.send(data))
            .catch((err: Error) => res.status(400).send(err))
    }

    reopenSession(req: any, res: any): any {

        sessionFacade.reopenCustomerSession(req)
            .then( (data: any) => res.send(data))
            .catch((err: Error) => res.status(400).send(err))
    }
}