"use client";
import { useState, useEffect } from "react";
import Loader from "../ui/RocketLoader";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem("firstVisit");

    if (!hasVisited) {
      // If first time, show loader for 3 seconds
      localStorage.setItem("firstVisit", "true"); // Mark as visited
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Adjust time as needed
    } else {
      setIsLoading(false); // If already visited, don't show loader
    }
  }, []);

  return isLoading ? <Loader /> : children;
};

export default Layout;
