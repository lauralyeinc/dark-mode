/* - Build a function called `useLocalStorage`. 
Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). 
To retrieve something from localStorage, we need the key. 
To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage.
 Knowing this, let's add `key` and `initialValue` as parameters to the hook. */

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {     // function useLocalStorage 
    const [storedValue, setStoredValue] = useState(() => {     // set something to localStorage need key and value 
        const item = window.localStorage.getItem(key);       // retrieving something from localStorage using the key 
        return item ? JSON.parse(item) : initialValue; 
    });
    const setValue = value => {                             // updating something  
        setStoredValue(value);                                          
        window.localStorage.setItem(key, JSON.stringify(value));   // replacing the old key/value pair,
                                                                        // with the new "value"  and setting it to the localStorage 
    };
    return [storedValue, setValue];
}; 