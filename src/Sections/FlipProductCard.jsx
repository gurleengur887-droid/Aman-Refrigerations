
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function FlipProductCard({ product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="
      w-[180px]
      sm:w-[220px]
      md:w-[260px]
      lg:w-[280px]
      aspect-[3/4]
      flex-shrink-0
      perspective-[1500px]
      cursor-pointer
      "
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        relative
        w-full
        h-full
        preserve-3d
        "
      >
        {/* FRONT */}
        <div
          className="
          absolute
          inset-0
          overflow-hidden
          rounded-[30px]
          bg-white
          border border-[#D4A85E]/30
          shadow-xl
          backface-hidden
          "
        >
          <img
            src={product.image}
            alt={product.english}
            className={`
              absolute inset-0
              w-full h-full

              ${
                product.fit === "contain"
                  ? "object-contain p-4 bg-[#f8f4ee]"
                  : "object-cover"
              }
            `}
          />

          {/* Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
          />

          {/* Content */}
          <div
            className="
            absolute
            bottom-0
            left-0
            w-full
            p-4
            z-10
          "
          >
            <h3
              className="
              text-white
              text-lg
              md:text-xl
              font-semibold
            "
            >
              {product.punjabi}
            </h3>

            <p
              className="
              text-gray-200
              text-xs
              md:text-sm
              tracking-[2px]
              mt-1
            "
            >
              {product.english}
            </p>

            <p
              className="
              mt-3
              text-[#D4A85E]
              text-[10px]
              uppercase
              tracking-[4px]
            "
            >
              Tap To Explore
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="
          absolute
          inset-0
          rounded-[30px]
          bg-white
          border border-[#D4A85E]/30
          shadow-xl
          rotate-y-180
          backface-hidden
          flex
          flex-col
          justify-between
          p-5
          "
        >
          <div>
            {/* Badge */}
            <div
              className="
              inline-flex
              px-3
              py-1
              rounded-full
              bg-[#D4A85E]
              text-white
              text-[10px]
              uppercase
              tracking-[2px]
              mb-5
            "
            >
              Custom Made
            </div>

            {/* Name */}
            <h3
              className="
              text-[#163B68]
              text-xl
              font-semibold
            "
            >
              {product.punjabi}
            </h3>

            <p
              className="
              text-[#C6A76A]
              uppercase
              tracking-[3px]
              text-xs
              mt-2
            "
            >
              {product.english}
            </p>

            {/* Description */}
            <p
              className="
              text-gray-600
              text-sm
              leading-6
              mt-5
            "
            >
              {product.description}
            </p>

            {/* Features */}
           
          </div>

          {/* Buttons */}
         <div className="mt-8 flex items-center justify-center gap-4">

  {/* WhatsApp */}
  <a
    href={`https://wa.me/919517231313?text=Waheguru Ji Ka Khalsa,%20I%20would%20like%20information%20about%20${product.english}.`}
    target="_blank"
    rel="noreferrer"
    className="
    w-14
    h-14
    rounded-full
    bg-[#25D366]
    text-white
    flex
    items-center
    justify-center
    text-2xl
    shadow-lg
    hover:scale-110
    transition-all
    duration-300
    "
  >
    <FaWhatsapp />
  </a>

  {/* Call */}
  <a
    href="tel:+919517231313"
    className="
    w-14
    h-14
    rounded-full
    bg-[#163B68]
    text-white
    flex
    items-center
    justify-center
    text-2xl
    shadow-lg
    hover:scale-110
    transition-all
    duration-300
    "
  >
    <FiPhoneCall />
  </a>

</div>
        </div>
      </motion.div>
    </div>
  );
}

