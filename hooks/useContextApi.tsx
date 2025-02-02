'use client'
import React, { createContext, useContext, useMemo, useState } from "react";
import { AppContextType, Laptop, User } from "./declare";

const appContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<string|null>(null);
  const [laptops, setLaptops] = useState<Laptop[]>([]);

  const value: AppContextType = useMemo(
    () => ({
      theme,
      setTheme,
      user,
      setUser,
      isLoading,
      setIsLoading,
      category,
      setCategory,
      laptops,
      setLaptops,
      // loginUser, // Pass functions as needed
    }),
    [
      theme,
      setTheme,
      user,
      setUser,
      isLoading,
      setIsLoading,
      category,
      setCategory,
      laptops,
      setLaptops,
    ]
  );

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

// context/AppContext.tsx
export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
