import { ProfileAudiencesChanges } from 'talon_one'

export class CustomerProfileRequest {
  attributes?: object = undefined
  evaluableCampaignIds?: number[] = undefined
  audiencesChanges?: ProfileAudiencesChanges = undefined
  responseContent?: string[] = undefined
}

// As requirements are defined these validation methods need to be updated
// as well.
export function isCustomerProfileRequest(obj: any) {
  return (
    obj?.attributes ||
    obj?.evaluableCampaignIds ||
    obj?.audiencesChanges ||
    obj?.responseContent
  )
}
