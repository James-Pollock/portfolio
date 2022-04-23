import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function FloatingPictures() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ref, inView] = useInView();
  const [banner, bannerInView] = useInView();
  const animationControl = useAnimation();
  
  const variants = {
    initial: {
      opacity: 0,
      y: "100px",
    },
    animate: {
      opacity: 1,
      y: `100px`,
    },
  };

  useEffect(() => {
    if (inView) {
      animationControl.start("animate");
    } else {
      animationControl.start("initial");
    }
  }, [animationControl, inView]);

  useEffect(() => {
    if (bannerInView) {
      animationControl.start("animate");
    } else {
      animationControl.start("initial");
    }
  }, [animationControl, bannerInView]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(position);
    // console.log(bannerInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <motion.div
          ref={banner}
          className="bg-warning"
          variants={variants}
          animate={animationControl}
        >
          <h1 className="text-dark">THIS IS SOME TEXT TO ANIMATE</h1>
        </motion.div>
      </div>
    </>
  );
}
// <div ref={ref} className=" container-fluid bg-light">
//   <motion.img
//     variants={variants}
//     animate={animationControl}
//     initial={{ y: 100 }}
//     className="img-fluid"
//     style={{ maxWidth: "600px" }}
//     src="fishing.jpg"
//     alt=""
//   />
// </div>
