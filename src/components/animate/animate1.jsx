import { useState } from 'react';

function useAnimation(animationClass, initialState = false) {
  const [isAnimating, setIsAnimating] = useState(initialState);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const animationClassName = isAnimating ? `animate__animated ${animationClass}` : '';

  return [animationClassName, toggleAnimation];
}

export default useAnimation;
