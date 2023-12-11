"use client";
//contexts/numberContext.js
import { createContext, useState } from "react";

export const StateContext = createContext([]);
export const UpdaterContext = createContext(null);
export const userContext = createContext({userInfo:null, setUserInfo:()=>{}});

export const BasketProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo)
  return (
    <StateContext.Provider value={productsInCart}>
      <UpdaterContext.Provider value={setProductsInCart}>
        <userContext.Provider value={{userInfo, setUserInfo}}>{children}</userContext.Provider>
      </UpdaterContext.Provider>
    </StateContext.Provider>
  );
};
