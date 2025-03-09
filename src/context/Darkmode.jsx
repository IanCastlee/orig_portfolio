import { createContext, useEffect, useState } from "react";
import Toastmessage from "../components/toastmessage/Toastmessage";

export const DarkModeContext = createContext();

export const DarkmodeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [showMessage, setshowMessage] = useState(false);

  const handleShowMessage = () => {
    setshowMessage(true);

    setTimeout(() => {
      setshowMessage(false);
    }, 3000);
  };

  console.log("SHOW : ", showMessage);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <DarkModeContext.Provider value={{ toggleTheme, theme, handleShowMessage }}>
      {children}

      {showMessage && <Toastmessage />}
    </DarkModeContext.Provider>
  );
};
