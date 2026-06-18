import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

export default function SearchModal({
  isOpen,
  onClose,
}) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) =>
      product.english
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.punjabi.includes(search)
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed
          inset-0
          z-[99999]

          bg-black/40
          backdrop-blur-md

          flex
          justify-center
          items-start

          pt-32

          px-5
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
            w-full
            max-w-2xl

            rounded-[40px]

            bg-[#F7F2EB]

            shadow-2xl

            p-8
            "
          >
            {/* Top */}
            <div className="flex justify-between items-center">

              <h2
                className="
                text-2xl
                font-semibold
                text-[#163B68]
                "
              >
                Search Products
              </h2>

              <button
                onClick={onClose}
                className="
                text-[#163B68]
                text-xl
                "
              >
                <FaTimes />
              </button>

            </div>

            {/* Input */}
            <div className="relative mt-8">

              <FaSearch
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2

                text-[#D4A85E]
                "
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                w-full

                rounded-full

                bg-white

                py-4
                pl-14
                pr-6

                outline-none

                text-[#163B68]
                "
              />

            </div>

            {/* Results */}
            <div className="mt-8 space-y-4 max-h-[400px] overflow-y-auto">

              {search &&
                filteredProducts.map((product) => (

                  <div
                    key={product.id}
                    onClick={() => {
                     navigate(
  `/collection?category=${encodeURIComponent(
    product.category
  )}&product=${product.id}`
);

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });

                      onClose();
                    }}
                    className="
                    cursor-pointer

                    bg-white

                    rounded-3xl

                    p-5

                    hover:-translate-y-1

                    transition-all
                    duration-500
                    "
                  >
                    <h3
                      className="
                      text-[#163B68]
                      text-lg
                      font-semibold
                      "
                    >
                      {product.punjabi}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {product.english}
                    </p>
                  </div>

                ))}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}