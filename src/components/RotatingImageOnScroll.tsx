import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RotatingImageOnScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateValue = Math.min((scrollPosition / 530) * 360, 360);
  const translateYValue = Math.min(scrollPosition, 530);
  const translateXValue = Math.min(scrollPosition, 300);

  const fadeTranslateXValue = Math.min(scrollPosition * 1.2, 300);
  const fadeOpacityValue = Math.max(1 - scrollPosition / 600, 0);

  return (
    <div className="h-200vh relative hidden laptop:block">
      <motion.img
        src="https://tamkart.az/_next/static/media/tamdigi.988304eb.png"
        alt="Rotating Image"
        className="absolute top-[70px] left-0 -translate-x-1/2 w-[396px] z-10"
        animate={{
          rotate: rotateValue,
          y: translateYValue,
          x: translateXValue,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "easeOut",
        }}
      />

      <motion.img
        src="https://tamkart.az/_next/static/media/tampremiumvisa.fd5fe401.png" // Burada digər şəkilin URL-sini əlavə edin
        alt="Fading Image"
        className="absolute top-0 right-0 w-[396px] z-0"
        animate={{
          x: fadeTranslateXValue,
          opacity: fadeOpacityValue,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default RotatingImageOnScroll;
