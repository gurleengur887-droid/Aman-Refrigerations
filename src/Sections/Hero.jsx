import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section
  className="
  relative
  w-full

  h-[85vh]
  md:h-[88vh]

  overflow-hidden
  bg-[#F7F2EB]

  flex
  items-center
  justify-center
  "
>
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-[0.25] bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Top White Glow */}
      <div className="absolute top-[-280px] left-1/2 -translate-x-1/2 w-[1300px] h-[550px] bg-white blur-3xl opacity-90 rounded-full" />

      {/* Left Silk Ribbon */}
      <div className="absolute bottom-0 left-0 w-[380px] h-[130px] bg-gradient-to-r from-[#1E4E79] to-transparent opacity-80 blur-2xl rounded-tr-full" />

      {/* Right Silk Ribbon */}
      <div className="absolute bottom-0 right-0 w-[380px] h-[130px] bg-gradient-to-l from-[#D98B3A] to-transparent opacity-80 blur-2xl rounded-tl-full" />

      {/* Golden Glow */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FFD89B] opacity-20 blur-3xl rounded-full" />

      {/* Main Content */}
      <div
        className="
        relative
        z-20
        flex
        flex-col
        items-center
        text-center
        w-full
        px-4
        pt-24
        md:pt-32
        lg:pt-36
        "
      >
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          mb-6
          mt-8
          md:mt-10
          "
        >
          <div className="flex items-center gap-5 justify-center">
            <div className="w-10 sm:w-16 md:w-28 h-[1px] bg-[#C6A76A]" />

            <p
              className="
              uppercase
              tracking-[0.25em]
              md:tracking-[0.45em]
              text-[#1E3A5F]
              text-[11px]
              sm:text-xs
              md:text-sm
              font-medium
              "
            >
              Crafted With Faith, Built To Last
            </p>

            <div className="w-10 sm:w-16 md:w-28 h-[1px] bg-[#C6A76A]" />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          relative
          flex
          items-center
          justify-center
          -mt-6
          md:-mt-20
          lg:-mt-24
          "
        >
          {/* Orange Glow */}
         <div className="absolute bottom-8 md:bottom-12 w-[80%] h-[100px] md:h-[160px] bg-orange-300 blur-3xl opacity-30 rounded-full" />
          {/* Logo Image */}
          <img
  src="/logo/logo.png"
  alt="Aman Refrigeration"
  className="
    w-[68vw]
    sm:w-[80vw]
    md:w-[86vw]
    lg:w-[78vw]
    xl:w-[72vw]

    max-h-[32vh]
    md:max-h-[66vh]

    object-contain
    object-top

    relative
    z-10

    drop-shadow-[0_0_40px_rgba(255,170,70,0.38)]
  "
/>
        </motion.div>

        {/* Reflection Glow */}
       <div className="w-[65%] h-[20px] bg-gradient-to-r from-transparent via-orange-200 to-transparent blur-2xl opacity-30 -mt-2 md:-mt-24" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.7,
            ease: [0.22, 1, 0.36, 1],
          }}
         className="
-mt-2
md:-mt-6

text-[#163B68]

text-2xl
sm:text-4xl
md:text-6xl
lg:text-7xl

font-semibold
tracking-tight
drop-shadow-sm
"
        >
          Premium Gurudwara Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          mt-2
          mb-1

          text-gray-700

          text-sm
          sm:text-base
          md:text-lg

          max-w-3xl

          leading-relaxed

          px-4
          "
        >
          Crafted Stainless Steel Solutions for Gurudwaras,
          Mandirs & Sacred Spaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          flex
          flex-col
          sm:flex-row

          gap-5

          mt-8

          mb-20
          lg:mb-28
          "
        ></motion.div>
      </div>
    </section>
  );
}