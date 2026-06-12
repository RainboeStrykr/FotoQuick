import { useEffect, useState } from "react";

function useThemeSwitcher(key, initialTheme) {
  const [theme, setTheme] = useState(() => {
    try {
      const storagedTheme = localStorage.getItem(key);
      return storagedTheme ? JSON.parse(storagedTheme) : initialTheme;
    } catch {
      // Stale plain-string value in localStorage — clear it and use default
      localStorage.removeItem(key);
      return initialTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}

export default useThemeSwitcher;
