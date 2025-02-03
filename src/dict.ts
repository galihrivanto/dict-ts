/**
 * Generic dictionary interface that maps string keys to values of type T
 */
export interface Dictionary<T> {
    [Key: string]: T;
}

/**
 * Creates a shallow copy of the provided dictionary
 * @param dict The dictionary to clone
 * @returns A new dictionary with the same key-value pairs
 */
export function clone<T>(dict: Dictionary<T>): Dictionary<T> {
    return { ...dict };
}

/**
 * Checks if two dictionaries have exactly the same key-value pairs
 * @param dict1 First dictionary to compare
 * @param dict2 Second dictionary to compare
 * @returns True if dictionaries are equal, false otherwise
 */
export function equal<T>(dict1: Dictionary<T>, dict2: Dictionary<T>): boolean {
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => 
        key in dict2 && dict1[key] === dict2[key]
    );
}

/**
 * Checks if one dictionary is a subset of another (all key-value pairs in subset exist in superset)
 * @param subset The potential subset dictionary
 * @param superset The potential superset dictionary
 * @returns True if subset is contained within superset, false otherwise
 */
export function isSubset<T>(subset: Dictionary<T>, superset: Dictionary<T>): boolean {
    return Object.entries(subset).every(([key, value]) =>
        key in superset && superset[key] === value
    );
}

/**
 * Merges multiple dictionaries into a new dictionary. If dictionaries have the same key,
 * the value from the later dictionary takes precedence.
 * @param dicts An array of dictionaries to merge
 * @returns A new dictionary containing all key-value pairs from all dictionaries
 */
export function merge<T>(...dicts: Dictionary<T>[]): Dictionary<T> {
    return Object.assign({}, ...dicts);
}

