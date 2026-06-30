import { useEffect, useState } from "react";
import ReelCard from "./ReelCard";
import { motion } from "framer-motion";
import ReelModal from "./ReelModal";
const reels = [
  {
    punjabi: "ਪਾਲਕੀ ਸਾਹਿਬ",
    english: "Paalki Sahib",
    video: "/videos/product1.mp4",
  },
  {
    punjabi: "ਚਾਹ ਵਾਲੀ ਮਸ਼ੀਨ",
    english: "Tea Tank Machine",
    video: "/videos/product2.mp4",
  },
  {
    punjabi: "ਕੜਾਹ ਪ੍ਰਸ਼ਾਦ ਮਸ਼ੀਨ",
    english: "Kadah Prashad Machine",
    video: "/videos/product3.mp4",
  },
  {
    punjabi: "ਪ੍ਰਭਾਤ ਫੇਰੀ ਰਿਕਸ਼ਾ",
    english: "Parbhatferi Rikshaw",
    video: "/videos/product4.mp4",
  },
  {
    punjabi: "ਖੰਡਾ",
    english: "Khanda",
    video: "/videos/product5.mp4",
  },
];

export default function PremiumReelsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="reels"
  className="
relative
overflow-hidden
bg-[#f8f6f1]

pt-[140px]
md:pt-32

pb-20
md:pb-32">
      {/* Golden glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#D4A85E]/10 blur-[120px]" />
      </div>

      {/* Heading */}
     <div className="text-center mb-7 md:mb-10 lg:mb-12 relative z-10">
        <p className="uppercase tracking-[8px] text-[#D4A85E] text-sm">
          Explore Sacred Craftsmanship
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#123D7A] mt-4">
          Featured Reels
        </h2>
      </div>

      {/* Carousel */}
    <div
  className="
  relative
  overflow-hidden
  flex
  justify-center
  items-start

  h-[420px]
  sm:h-[520px]
  md:h-[650px]
  lg:h-[720px]
"
>
  {reels.map((reel, index) => {
    let offset = index - activeIndex;

    if (offset > 2) offset -= reels.length;
    if (offset < -2) offset += reels.length;

    let x = 0;
    let scale = 1;
    let opacity = 1;
    let blur = 0;
    let zIndex = 50;

    switch (offset) {
      case -2:
        x = -430;
        scale = 0.65;
        opacity = 0.3;
        blur = 6;
        zIndex = 10;
        break;

      case -1:
        x = -220;
        scale = 0.82;
        opacity = 0.7;
        blur = 2;
        zIndex = 30;
        break;

      case 0:
        x = 0;
        scale = 1;
        opacity = 1;
        blur = 0;
        zIndex = 50;
        break;

      case 1:
        x = 220;
        scale = 0.82;
        opacity = 0.7;
        blur = 2;
        zIndex = 30;
        break;

      case 2:
        x = 430;
        scale = 0.65;
        opacity = 0.3;
        blur = 6;
        zIndex = 10;
        break;

      default:
        break;
    }

    return (
      <motion.div
        key={index}
        animate={{
          x,
          scale,
          opacity,
          filter: `blur(${blur}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        style={{
          zIndex,
        }}
        className="absolute"
      >
      <ReelCard
  reel={reel}
  offset={offset}
  isActive={offset === 0}
  onClick={() => setSelectedIndex(index)}
/>
      </motion.div>
    );
  })}
</div>
<ReelModal
  reel={selectedIndex !== null ? reels[selectedIndex] : null}
  currentIndex={selectedIndex}
  reels={reels}
  isOpen={selectedIndex !== null}
  onClose={() => setSelectedIndex(null)}
  onPrev={() =>
    setSelectedIndex(
      (selectedIndex - 1 + reels.length) % reels.length
    )
  }
  onNext={() =>
    setSelectedIndex(
      (selectedIndex + 1) % reels.length
    )
  }
/>
    </section>
  );
}