import CustomerSessionFacade from "../../facade/customer/session"

const sessionFacade = new CustomerSessionFacade()
export const createSession = (async (req: any, res: any): Promise<any> => {
    res.send(await sessionFacade.createSession(req))
})