import { useLocalStorage } from "./useLocalStorage"; 
import { useEffect } from "react"; 



export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);    
    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [darkMode]);
    return [darkMode, setDarkMode]; 
}; 




// styling set styling if on or off. 
// const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };

// .dark-mode {
//     color: #fff;
//     background-color: #313843;
//     .navbar {
//       background-color: #1F2022;
//       border: none;
//     }
//   }

