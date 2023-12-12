"use client";
import { createContext, useState } from "react";
export const dataContext = createContext({ data: { userInfo: null, setUserInfo: () => {}, productsInCart: null, setProductsInCart: () => {} } });

export const BasketProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  return <dataContext.Provider value={{ userInfo, setUserInfo, productsInCart, setProductsInCart }}>{children}</dataContext.Provider>;
};
