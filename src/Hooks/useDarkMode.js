import { useLocalStorage } from "./useLocalStorage"; 
import { useEffect } from "react"; 



export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(key); 
    useEffect(() => {
        const localValue = window.localStorage.getItem('darkMode')
        if (value) {
        setValue(localValue)
        } else {
        setValue(value); 
        }
    }, [])
    return [value, localValue]; 
}; 