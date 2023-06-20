import { useState } from "react";

export function useTheme() {
  const defaultTheme = localStorage.getItem("theme");

  if (!defaultTheme) {
    document.querySelector("html").setAttribute("data-bs-theme", "auto");
    localStorage.setItem("theme", "auto");
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", defaultTheme);
  }

  const getTheme = () =>
    document.querySelector("html").getAttribute("data-bs-theme");

  const [currentTheme, setCurrentTheme] = useState(getTheme());

  const changeTheme = (mode) => {
    document.querySelector("html").setAttribute("data-bs-theme", mode);
    localStorage.setItem("theme", mode);
    setCurrentTheme(getTheme());
  };

  return { currentTheme, changeTheme };
}
