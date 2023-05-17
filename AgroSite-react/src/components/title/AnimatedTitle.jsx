import { useSpring, animated } from "react-spring";
import { v4 } from "uuid";

const AnimatedTitle = () => {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: {
      tension: 120,
      friction: 14,
    },
  });

  const letterAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 600,
    config: {
      tension: 150,
      friction: 12,
    },
  });
  const title = "Agrosite";

  return (
    <animated.div style={titleAnimation}>
      <div className="text-[#d36938] text-4xl font-bold tracking-wide">
        {title.split("").map((v) => {
          return (
            <animated.span
              style={letterAnimation}
              className="inline-block mr-2"
              key={v4()}
            >
              {v}
            </animated.span>
          );
        })}
      </div>
    </animated.div>
  );
};

export default AnimatedTitle;
