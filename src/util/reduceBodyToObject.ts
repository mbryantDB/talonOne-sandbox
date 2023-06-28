import _ from "lodash";

// Provide a class to
export function reduceBodyToObject(reduced: any, body: any){
    _.assign(reduced, _.pick(body, _.keys(reduced)))
    return reduced
}