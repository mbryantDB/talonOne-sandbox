import CustomerSessionService from "../../service/customer/session";

const sessionService = new CustomerSessionService();

export default class CustomerSessionFacade {

    async createSession(req: any): Promise<any> {
        return await sessionService.createSession(req)
    }
}