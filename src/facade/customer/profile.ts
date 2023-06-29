import CustomerProfileService from '../../service/customer/profile'
import { CustomerProfileRequest } from '../../model/Customer/CustomerProfileRequest'

const profileService = new CustomerProfileService()

export default class CustomerProfileFacade {
  async createOrUpdateProfile(
    customerId: string,
    payload: CustomerProfileRequest
  ): Promise<any> {
    return await profileService.createOrUpdateProfile(customerId, payload)
  }

  async getCustomerData(
    customerId: string
  ): Promise<any> {
    return await profileService.getCustomerData(customerId)
  }
}
