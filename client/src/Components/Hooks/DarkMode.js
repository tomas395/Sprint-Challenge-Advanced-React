import useLocalStorage from "./local-storage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [enableDarkMode, setEnableDarkMode] = useLocalStorage(
    "darkModeEnabled",
    false
  );

  useEffect(() => {
    const body = document.querySelector("body");
    enableDarkMode
      ? body.classList.remove("dark-mode")
      : body.classList.add("dark-mode");
  }, [enableDarkMode]);

  return [enableDarkMode, setEnableDarkMode];
};

export default useDarkMode;