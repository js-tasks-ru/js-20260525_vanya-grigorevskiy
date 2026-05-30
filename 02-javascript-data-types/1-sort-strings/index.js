/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const collator = new Intl.Collator(['RU', 'EN'], {
        sensitivity: 'variant',
        caseFirst: 'upper'
    });
    return [...arr].sort((a, b) => {
        if (param === 'asc') return collator.compare(a, b)
        else if (param === 'desc') return collator.compare(b, a)
    })
}