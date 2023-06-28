export class CustomerSessionRequest {
    customerSession?: CustomerSession = undefined
    responseContent?: string[] = undefined
}

export class CustomerSession {
    profileId?: string = undefined
    evaluableCampaignIds?: string[] = undefined
    couponCodes?: string[] = undefined
    referralCode?: string = undefined
    loyaltyCards?: string[] = undefined
    state?: string = undefined
    cartItems?:  CartItem[] = undefined
    additionalCosts?: object = undefined
    identifiers?: string[] = undefined
    attributes?: object = undefined

}

export class CartItem {

    name?: string
    sku?: string
    quantity?: number
    returnedQuantity?: string
    remainingQuantity?: string
    price?: number
    category?: string
    weight?: string
    height?: string
    width?: string
    length?: string
    position?: string
    attribute?: string
}

// As requirements are defined these validation methods need to be updated
// as well.
export function isCustomerSession(obj: any): boolean {
    return !!obj.profileId
}

export function isCustomerSessionRequest(obj: any): boolean {
    return isCustomerSession(obj.customerSession)

}