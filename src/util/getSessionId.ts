import * as crypto from "crypto";

export const getSessionId = (): string => {
    return process.env.npm_package_name ?
        process.env.npm_package_name + '-' + crypto.randomInt(10000)
        : 'test-session'
}