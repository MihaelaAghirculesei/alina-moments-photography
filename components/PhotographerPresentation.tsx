"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photographerImages = [
  { src: "/images/photographer/photo-1.jpg", title: "Kunst", subtitle: "Wo Kreativität auf Vision trifft" },
  { src: "/images/photographer/photo-2.jpg", title: "Herbstträume", subtitle: "Warme Farben, echte Emotionen" },
  { src: "/images/photographer/photo-3.jpg", title: "Kleiner Koch", subtitle: "Das Rezept für Glück: Liebe und Lachen" },
  { src: "/images/photographer/photo-4.jpg", title: "Liebe", subtitle: "Kostbare Erinnerungen bewahren" },
  { src: "/images/photographer/photo-5.jpg", title: "Augenblick", subtitle: "Deine Geschichte in einem Bild" },
  { src: "/images/photographer/photo-6.jpg", title: "Gemeinsam", subtitle: "Hand in Hand durch die Natur" }, 
];

export function PhotographerPresentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photographerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next >= photographerImages.length) return 0;
      if (next < 0) return photographerImages.length - 1;
      return next;
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full max-w-[1440px] mx-auto overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            rotateY: { duration: 0.8 },
          }}
          className="absolute top-[220px] sm:top-[280px] md:top-[320px] lg:top-[350px] left-0 right-0 bottom-0"
        >
          <div className="relative w-full h-full bg-black">
            <div className="relative w-full h-full flex items-start justify-center pt-2 pb-8 px-4 md:px-6 lg:px-8">
              <div className="relative w-full h-full max-w-[95vw] max-h-[95vh]">
                <Image
                  src={photographerImages[currentIndex].src}
                  alt={photographerImages[currentIndex].title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

            <motion.div
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute bottom-16 left-0 right-0 text-center px-8"
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6"
                style={{
                  textShadow: "0 0 60px rgba(236, 72, 153, 0.5), 0 0 30px rgba(0,0,0,0.8)",
                  letterSpacing: "0.1em",
                }}
              >
                {photographerImages[currentIndex].title}
              </motion.h2>
              <motion.p
                className="text-[15px] sm:text-base md:text-lg lg:text-xl xl:text-2xl text-amber-100 font-light italic"
                style={{
                  textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                }}
              >
                {photographerImages[currentIndex].subtitle}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group border border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group border border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {photographerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-pink-500"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
