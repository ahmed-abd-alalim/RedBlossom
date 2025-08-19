import { useEffect } from "react";

const ResizeRefresh = () => {
  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Scroll to top before reload
        window.scrollTo(0, 0);
        window.location.reload();
      }, 300); // refresh 300ms after resize stops
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
};

export default ResizeRefresh;
