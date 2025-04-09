import React, { useEffect, useRef, useState } from "react";
import GhostIcon from "../assets/ghost.png";
import { useIncrementGhostCounter } from "../hooks/useIncrementGhostCounter";

type Axis = "x" | "y";

const Ghost: React.FC = () => {
  const ghostRef = useRef<HTMLImageElement>(null);
  const positionRef = useRef({ x: 100, y: 100 });
  const directionRef = useRef<1 | -1>(1);
  const axisRef = useRef<Axis>("x");

  const animationRef = useRef<number | null>(null);

  const speed = 2;
  const offset = 10;
  const [isVisible, setIsVisible] = useState(true);

  const incrementGhostsCaught = useIncrementGhostCounter();

  const handleClick = () => {
    console.log("ghost caught!");
    setIsVisible(false);
    incrementGhostsCaught();
  };

  useEffect(() => {
    const move = () => {
      const ghost = ghostRef.current;
      if (!ghost || !isVisible) return;

      const ghostWidth = ghost.offsetWidth;
      const ghostHeight = ghost.offsetHeight;

      const maxX = window.innerWidth - ghostWidth - offset;
      const maxY = window.innerHeight - ghostHeight - offset;
      const min = offset;

      let { x, y } = positionRef.current;
      const direction = directionRef.current;
      const axis = axisRef.current;

      if (axis === "x") {
        x += direction * speed;
        if (x <= min || x >= maxX) {
          directionRef.current *= -1;
          x = Math.max(min, Math.min(maxX, x));
        }
      } else {
        y += direction * speed;
        if (y <= min || y >= maxY) {
          directionRef.current *= -1;
          y = Math.max(min, Math.min(maxY, y));
        }
      }

      if (Math.random() < 0.005) {
        axisRef.current = axis === "x" ? "y" : "x";
      }

      positionRef.current = { x, y };
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;

      animationRef.current = requestAnimationFrame(move);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(move);
    }

    return () => {
      // cancel on unmount or visibility change
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <img
      ref={ghostRef}
      src={GhostIcon}
      alt="Ghost"
      onClick={handleClick}
      style={{
        position: "absolute",
        left: positionRef.current.x,
        top: positionRef.current.y,
        width: 50,
        height: 50,
        cursor: "pointer",
        userSelect: "none",
        pointerEvents: isVisible ? "auto" : "none",
        display: isVisible ? "block" : "none",
      }}
    />
  );
};

export default Ghost;
