import { useState } from "react";

const ImageWithFallback = ({ src, fallback, alt }: { src: string; fallback: string; alt: string }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setCurrentSrc(fallback);
  };

  return <img src={currentSrc} alt={alt} onError={handleError} />;
};

export { ImageWithFallback };
