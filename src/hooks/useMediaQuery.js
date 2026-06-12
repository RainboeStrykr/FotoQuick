import { useEffect, useState } from "react";

const useMediaQuery = () => {
  // Get current screen's width
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    // "Watch" while it is being resized
    window.addEventListener("resize", handleWindowSizeChange);
    // Clean up side-effects after stop resizing
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useMediaQuery;
