"use client";
import { createContext, useState } from "react";
export const dataContext = createContext({ data: { userInfo: null, setUserInfo: () => {}, productsInCart: null, setProductsInCart: () => {}, reservationId: null, setReservationId: () => {} } });

export const BasketProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [reservationId, setReservationId] = useState(null);
  console.log(reservationId);
  return <dataContext.Provider value={{ userInfo, setUserInfo, productsInCart, setProductsInCart, reservationId, setReservationId }}>{children}</dataContext.Provider>;
};
