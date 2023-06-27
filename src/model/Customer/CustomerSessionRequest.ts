export interface CustomerSessionRequest {
    customerSession: CustomerSession
    responseContent: string[]
}

export interface CustomerSession {
    profileId: string
    evaluableCampaignIds?: string[]
    couponCodes?: string[]
    referralCode?: string
    loyaltyCards?: string[]
    state?: string
    cartItems?:  CartItem[]
    additionalCosts?: object
    identifiers?: string[]
    attributes?: object

}

export interface CartItem {

    name: string
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