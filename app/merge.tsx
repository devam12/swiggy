import React, { useState, useEffect } from "react";
import CircleAnimation from "../components/CircleAnimation"; // Adjust the import path as needed
import LocationAnimation from "../components/LocationAnimation"; // Adjust the import path as needed

const CombinedAnimation = () => {
  const [showFirstAnimation, setShowFirstAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{showFirstAnimation ? <CircleAnimation /> : <LocationAnimation />}</>
  );
};

export default CombinedAnimation;
