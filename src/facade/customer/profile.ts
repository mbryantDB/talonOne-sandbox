import CustomerProfileService from '../../service/customer/profile'
import { CustomerProfileRequest } from '../../model/Customer/CustomerProfileRequest'
import { CustomerDataOptions } from '../../routes/customer/profile'

const profileService = new CustomerProfileService()

export default class CustomerProfileFacade {
  async createOrUpdateProfile(
    customerId: string,
    payload: CustomerProfileRequest
  ): Promise<any> {
    return await profileService.createOrUpdateProfile(customerId, payload)
  }

  async getCustomerData(
    customerId: string,
    customerOptions: CustomerDataOptions
  ): Promise<any> {
    return await profileService.getCustomerData(customerId, customerOptions)
  }
}
