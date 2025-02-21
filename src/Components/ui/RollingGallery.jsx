import { useEffect, useState } from "react";
import {
motion,
useMotionValue,
useAnimation,
useTransform,
} from "framer-motion";

const RollingGallery = ({
autoplay = false,
pauseOnHover = false,
images = ['Assets/Homepage/t1.webp','Assets/Homepage/t2.webp','Assets/Homepage/t3.webp','Assets/Homepage/t4.webp','Assets/Homepage/t4.webp','Assets/Homepage/t4.webp'],
}) => {
const [isScreenSizeSm, setIsScreenSizeSm] = useState(
  window.innerWidth <= 640
);
useEffect(() => {
  const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed
const cylinderWidth=((isMobile)?1800:3600);
const faceCount = images.length;
// Check if the user is on mobile

// Calculate faceWidth based on screen size
const faceWidth=(isMobile)?(cylinderWidth/faceCount)*2.5:(cylinderWidth/faceCount)*4
const faceHeight=isMobile?180:340;

console.log(`Face Width: ${faceWidth}`);

const radius = cylinderWidth / (2 * Math.PI);

const dragFactor = 0.5;
const rotation = useMotionValue(0);
const controls = useAnimation();

const transform = useTransform(
  rotation,
  (val) => `rotate3d(0,1,0,${val}deg)`
);

const startInfiniteSpin = (startAngle) => {
  controls.start({
    rotateY: [startAngle, startAngle - 360],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  });
};

useEffect(() => {
  if (autoplay) {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
  } else {
    controls.stop();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [autoplay]);

const handleUpdate = (latest) => {
  if (typeof latest.rotateY === "number") {
    rotation.set(latest.rotateY);
  }
};

// const handleDrag = (_, info) => {
//   controls.stop();
//   rotation.set(rotation.get() + info.offset.x * dragFactor);
// };

// const handleDragEnd = (_, info) => {
//   const finalAngle = rotation.get() + info.velocity.x * dragFactor;
//   rotation.set(finalAngle);

//   if (autoplay) {
//     startInfiniteSpin(finalAngle);
//   }
// };

const handleMouseEnter = () => {
  if (autoplay && pauseOnHover) {
    controls.stop();
  }
};
const handleMouseLeave = () => {
  if (autoplay && pauseOnHover) {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
  }
};

return (
  <div className="relative mb-6 w-full overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full w-[48px] z-10"
      style={{
        background:
          "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
      }}
    />
    <div
      className="absolute top-0 right-0 h-full w-[48px] z-10"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
      }}
    />

    <div className="flex mt-8 h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
      <motion.div
        drag="x"
        dragElastic={0}
        // onDrag={handleDrag}
        // onDragEnd={handleDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={controls}
        onUpdate={handleUpdate}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          height: faceHeight,
          transformStyle: "preserve-3d",
        }}
        className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="group absolute flex h-fit items-center justify-center m-[8%] [backface-visibility:hidden] md:m-[6%]"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${(360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
            }}
          >
            <img
              src={url}
              alt="gallery"
              className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-white object-cover
                         transition-transform duration-300 ease-out group-hover:scale-105
                         sm:h-[100px] sm:w-[220px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);
};

export default RollingGallery;