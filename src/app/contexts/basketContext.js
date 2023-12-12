"use client";
//contexts/numberContext.js
import { createContext, useState } from "react";

/* export const StateContext = createContext([]);
export const UpdaterContext = createContext(null); */
export const dataContext = createContext({ data: { userInfo: null, setUserInfo: () => {}, productsInCart: null, setProductsInCart: () => {} } });

export const BasketProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  return (
    /*     <StateContext.Provider value={productsInCart}>
      <UpdaterContext.Provider value={setProductsInCart}> */
    <dataContext.Provider value={{ userInfo, setUserInfo, productsInCart, setProductsInCart }}>{children}</dataContext.Provider>
    /*       </UpdaterContext.Provider>
    </StateContext.Provider> */
  );
};
