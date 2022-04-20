import { useState, useEffect } from "react";
// Delayed component will delay rendering of component
const Delayed = ({ children, wait = 100 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, wait);
    return () => clearTimeout(timer);
  }, [wait]);
  return isShown ? children : null;
};

export default Delayed;
