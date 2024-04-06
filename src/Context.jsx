import React, { useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [products,setProducts] = useState();
    const[darkMode,setDarkMode] = useState(false);
    const toggleTheme = ()=>{
        setDarkMode(!darkMode)
        const rootElement = document.documentElement;
        if (rootElement.getAttribute('data-theme') === 'dark') {
          rootElement.setAttribute('data-theme', 'light');
        } else {
          rootElement.setAttribute('data-theme', 'dark');
        }
    }
    useEffect(()=>{
        const baseURL = import.meta.env.VITE_BaseURL;
        fetch(baseURL)
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
    },[])
    return <AppContext.Provider value={{products,setProducts,darkMode,setDarkMode,toggleTheme}}>{children}</AppContext.Provider>
}
export  {AppProvider,AppContext};