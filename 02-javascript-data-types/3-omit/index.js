/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const newObj = {}
    Object.entries(obj).forEach((el) => !fields.includes(el[0]) ? newObj[el[0]] = el[1] : null)
    return newObj
};