import { motion } from "framer-motion";
import { Play } from "lucide-react";

const FeaturedShowcase = ({ onOpen }) => {
  return (
    
<section className="relative py-20 md:py-28 px-5 sm:px-8 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4B67A]/10 blur-[180px] rounded-full"></div>

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16 md:mb-20">

      <p className="uppercase tracking-[6px] text-[#D4B67A] text-sm mb-5">
        Featured Showcase
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#123D79] leading-tight">
        Experience Our
        <span className="block">
          Craftsmanship
        </span>
      </h2>

    </div>

    {/* Main Card */}
    <div
      className="
        relative
        rounded-[32px]
        md:rounded-[48px]
        border
        border-[#D4B67A]/20
        bg-white/50
        backdrop-blur-xl
        px-6
        py-12
        md:px-16
        md:py-16
        overflow-hidden
      "
    >

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-80px] w-[250px] h-[250px] bg-[#D4B67A]/10 blur-[120px] rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-[#D4B67A] text-sm mb-6">
            Showroom Experience
          </p>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123D79] leading-tight mb-8">
            Discover Every Detail Up Close
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Step inside our showroom and explore the craftsmanship,
            elegance and attention to detail behind every creation.
          </p>

          <p className="italic text-[#D4B67A] text-lg md:text-xl leading-relaxed mb-10">
            "Every creation reflects devotion, precision and timeless craftsmanship."
          </p>

          <div className="space-y-5 mb-10">

            {[
              "Premium Stainless Steel Craftsmanship",
              "500+ Installations",
              "Custom Sacred Solutions",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="w-3 h-3 rounded-full bg-[#D4B67A]"></div>

                <p className="text-gray-700 text-base md:text-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>

          <button
            onClick={onOpen}
            className="
              bg-[#123D79]
              text-white
              px-9
              py-4
              rounded-full
              font-medium
              flex
              items-center
              gap-3
              hover:scale-105
              transition
              duration-300
              shadow-lg
              w-fit
            "
          >

            <Play size={20} />

            Watch Showcase

          </button>

        </motion.div>

        {/* RIGHT REEL */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center relative mt-10 lg:mt-0"
        >

          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              bg-[#D4B67A]/10
              blur-[140px]
              rounded-full
              -z-10
            "
          ></div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >

            {/* Badge */}
            <div
              className="
                absolute
                top-4
                left-4
                md:top-6
                md:left-6
                z-20
                px-4
                py-2
                md:px-5
                rounded-full
                bg-white/80
                backdrop-blur-xl
                text-[#123D79]
                text-xs
                md:text-sm
                font-medium
                shadow-lg
              "
            >
              ★ Featured Reel
            </div>

            <div
              onClick={onOpen}
              className="
                relative
                w-[280px]
                h-[500px]
                sm:w-[320px]
                sm:h-[560px]
                md:w-[360px]
                md:h-[620px]
                lg:w-[400px]
                lg:h-[650px]
                rounded-[45px]
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                cursor-pointer
              "
            >

              <video
                src="/videos/showroom.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 animate-ping"></div>

                <div
                  className="
                    w-16
                    h-16
                    md:w-24
                    md:h-24
                    rounded-full
                    bg-white/90
                    flex
                    items-center
                    justify-center
                    shadow-2xl
                  "
                >

                  <Play
                    size={28}
                    className="md:w-[34px] md:h-[34px] text-[#123D79]"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </div>

  </div>

</section>


  );
};

export default FeaturedShowcase;