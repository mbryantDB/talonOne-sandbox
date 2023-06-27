import {ProfileAudiencesChanges} from "talon_one";

export interface CustomerProfileRequest {
    attributes?: object
    evaluableCampaignIds?: number[]
    audiencesChanges?: ProfileAudiencesChanges
    responseContent?: string[]

}