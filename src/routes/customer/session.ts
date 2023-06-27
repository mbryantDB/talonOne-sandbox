import CustomerSessionFacade from "../../facade/customer/session"

const sessionFacade = new CustomerSessionFacade()

export class CustomerSession {
    async createOrUpdateSession(req: any, res: any): Promise<any> {
        sessionFacade.createOrUpdateSession(req)
            .then( (data: any) => res.send(data))
            .catch((err: Error) => res.status(400).send(err))
    }
}