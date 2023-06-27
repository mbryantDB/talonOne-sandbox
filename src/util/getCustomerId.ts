export const getCustomerId = (): string => {
    return process.env.CUSTOMER_ID ? process.env.CUSTOMER_ID : 'test_client'
}