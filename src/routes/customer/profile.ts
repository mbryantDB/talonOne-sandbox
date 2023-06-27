import CustomerProfileFacade from "../../facade/customer/profile"

const profileFacade = new CustomerProfileFacade()

export class CustomerProfile {
    async createOrUpdateProfile(req: any, res: any): Promise<any> {
        profileFacade.createOrUpdateProfile(req)
            .then( (data: any) => res.send(data))
            .catch((err: Error) => res.status(400).send(err))
    }
}
