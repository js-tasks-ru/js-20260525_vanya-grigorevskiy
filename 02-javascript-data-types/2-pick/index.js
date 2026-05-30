/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const newObj = {}
    Object.entries(obj).forEach((el) => fields.includes(el[0]) ? newObj[el[0]] = el[1] : null)
    return newObj
};