import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
  width?: number;
  height?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = 200,
  height = 200,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      // Cleanup animation when component unmounts
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieAnimation;
