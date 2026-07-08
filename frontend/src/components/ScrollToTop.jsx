import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures the browser scrolls to the top whenever the route changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
