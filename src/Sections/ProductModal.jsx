
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiPhoneCall,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

export default function ProductModal({
  product,
  products,
  setSelectedProduct,
  isOpen,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !product) return;

      const currentIndex = products.findIndex(
        (p) => p.id === product.id
      );

      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowRight") {
        setSelectedProduct(
          products[(currentIndex + 1) % products.length]
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedProduct(
          products[
            (currentIndex - 1 + products.length) %
              products.length
          ]
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    isOpen,
    product,
    products,
    setSelectedProduct,
    onClose,
  ]);

  if (!product) return null;

  const currentIndex = products.findIndex(
    (p) => p.id === product.id
  );

  const prevProduct =
    products[
      (currentIndex - 1 + products.length) %
        products.length
    ];

  const nextProduct =
    products[(currentIndex + 1) % products.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed
          inset-0
          z-[999]
          bg-black/60
          backdrop-blur-md
          flex
          items-center
          justify-center
          px-4
          py-6
          "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            relative
            bg-white
            rounded-[40px]
            shadow-2xl

            max-w-6xl
            w-full
            max-h-[90vh]
            overflow-y-auto

            flex
            flex-col
            lg:flex-row
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
              absolute
              top-5
              right-5
              z-20

              w-12
              h-12

              rounded-full
              bg-white/80
              backdrop-blur-md

              flex
              items-center
              justify-center

              text-2xl
              shadow-lg

              hover:scale-110
              transition
              "
            >
              <FiX />
            </button>

            {/* PREVIOUS */}
            <button
              onClick={() =>
                setSelectedProduct(prevProduct)
              }
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2

              w-12
              h-12

              rounded-full
              bg-white/80
              backdrop-blur-md

              shadow-lg

              flex
              items-center
              justify-center

              text-2xl

              hover:scale-110
              transition
              "
            >
              <FiChevronLeft />
            </button>

            {/* NEXT */}
            <button
              onClick={() =>
                setSelectedProduct(nextProduct)
              }
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2

              w-12
              h-12

              rounded-full
              bg-white/80
              backdrop-blur-md

              shadow-lg

              flex
              items-center
              justify-center

              text-2xl

              hover:scale-110
              transition
              "
            >
              <FiChevronRight />
            </button>

            {/* IMAGE */}
            <div
              className="
              lg:w-1/2
              bg-[#f8f4ee]

              flex
              items-center
              justify-center

              p-10
              "
            >
              <img
                src={product.image}
                alt={product.english}
                className="
                object-contain

                w-full
                max-h-[400px]
                lg:max-h-[700px]
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className="
              lg:w-1/2

              p-8
              md:p-12

              flex
              flex-col
              justify-center
              "
            >
              <div
                className="
                inline-flex
                w-fit

                px-4
                py-2

                rounded-full

                bg-gradient-to-r
                from-[#C79A4A]
                to-[#E0BB72]

                text-white
                text-xs

                uppercase
                tracking-[3px]

                shadow-lg
                "
              >
                Custom Made
              </div>

              <h2
                className="
                mt-8

                text-[#163B68]

                text-3xl
                md:text-5xl

                font-semibold
                "
              >
                {product.punjabi}
              </h2>

              <p
                className="
                mt-3

                uppercase
                tracking-[6px]

                text-[#C6A76A]

                text-sm
                "
              >
                {product.english}
              </p>

              <p
                className="
                mt-8

                text-gray-600

                leading-8
                text-base
                "
              >
                {product.description}
              </p>

              <div className="flex gap-4 mt-10">
                <a
                  href={`https://wa.me/919517231313?text=Waheguru Ji Ka Khalsa, I would like information about ${product.english}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex-1

                  py-4

                  rounded-full

                  bg-[#25D366]

                  text-white

                  flex
                  items-center
                  justify-center
                  gap-3

                  font-medium

                  shadow-xl

                  hover:-translate-y-1
                  duration-300
                  "
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href="tel:+919517231313"
                  className="
                  flex-1

                  py-4

                  rounded-full

                  bg-[#163B68]

                  text-white

                  flex
                  items-center
                  justify-center
                  gap-3

                  font-medium

                  shadow-xl

                  hover:-translate-y-1
                  duration-300
                  "
                >
                  <FiPhoneCall />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

