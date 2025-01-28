"use client";
import React, { createContext, useRef, useState } from "react";
export const UserContext = createContext();

function UserContextProvider({ children }) {
  const contactRef = useRef(null);
  const [showEffect, setShowEffect]=useState(true)
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <UserContext.Provider value={{ contactRef, scrollToContact,setShowEffect,showEffect }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
