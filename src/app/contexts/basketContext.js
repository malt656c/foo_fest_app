	"use client"
    //contexts/numberContext.js
	import { createContext, useState } from "react";
	 
	export const StateContext = createContext([]);
	export const UpdaterContext = createContext(null);
	
	 
	export const BasketProvider = ({ children }) => {
        const [productsInCart, setProductsInCart] = useState([])
	  return (
	    <StateContext.Provider value={productsInCart}>
            <UpdaterContext.Provider value={setProductsInCart}>
	            {children}
            </UpdaterContext.Provider>
	    </StateContext.Provider>
	  );
	};