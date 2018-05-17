var hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
}

export function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}





