import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { products } from "../data/products";
import ProductModal from "./ProductModal";

export default function CollectionPage() {
  const [searchParams] = useSearchParams();

const [selectedCategory, setSelectedCategory] =
  useState("All");

const [selectedProduct, setSelectedProduct] =
  useState(null);

useEffect(() => {
  const category =
    searchParams.get("category") || "All";

  const productId =
    Number(searchParams.get("product"));

  setSelectedCategory(category);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (productId) {
    const productToOpen = products.find(
      (product) => product.id === productId
    );

    if (productToOpen) {
      setSelectedProduct(productToOpen);
    }
  }

}, [searchParams]);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="relative bg-[#F7F2EB] min-h-screen overflow-hidden">

      {/* Ambient Glow */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[250px]

        bg-orange-100
        opacity-30

        blur-3xl
        rounded-full
        "
      />

      {/* Heading */}
      <div className="relative z-10 pt-36 text-center px-4">

        <p
          className="
          uppercase
          tracking-[0.35em]

          text-[#C6A76A]

          text-xs
          md:text-sm

          mb-4
          "
        >
          Explore Sacred Craftsmanship
        </p>

        <h1
          className="
          text-[#163B68]

          text-4xl
          md:text-6xl

          font-semibold
          "
        >
          Our Collection
        </h1>

      </div>

      {/* Category Pills */}
   <div
  className="
  relative
  z-10

  mt-14

  px-4

  flex
  flex-wrap
  justify-center

  gap-4
  "
>
        {categories.map((category) => (

         <button

            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
           
           px-5
           py-3
          whitespace-nowrap
            rounded-full

            text-sm
            md:text-base

            transition-all
            duration-500

            ${
              selectedCategory === category
                ? "bg-[#D4A85E] text-white shadow-xl"
                : "bg-white text-[#163B68] hover:-translate-y-1"
            }
            `}
          >
            {category}
          </button>

        ))}
      </div>

      {/* Product Grid */}
      <div
        className="
        relative
        z-10

        mt-20

        max-w-[1600px]
        mx-auto

        px-4
        md:px-8

        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4

        gap-10

        pb-24
        "
      >
        <AnimatePresence mode="wait">

          {filteredProducts.map((product) => (

           

              <motion.div
  key={product.id}
  layout
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
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -10,
  }}
  onClick={() => setSelectedProduct(product)}
  className="
  group
  cursor-pointer

  rounded-[36px]

  overflow-hidden

  bg-white

  shadow-[0_25px_70px_rgba(0,0,0,.08)]

  hover:shadow-[0_35px_90px_rgba(212,168,94,.22)]

  transition-all
  duration-700
  "
>
  {/* Image */}
  <div className="relative aspect-[3/4] overflow-hidden">

    <img
      src={product.image}
      alt={product.english}
      className={`
      w-full
      h-full

      transition-all
      duration-700

      group-hover:scale-110

      ${
        product.fit === "contain"
          ? "object-contain p-6 bg-[#f8f4ee]"
          : "object-cover"
      }
      `}
    />

    {/* Category Badge */}
    <div
      className="
      absolute
      top-5
      left-5

      px-4
      py-2

      rounded-full

      bg-[#D4A85E]

      text-white
      text-[10px]

      uppercase
      tracking-[2px]

      shadow-lg
      "
    >
      {product.category}
    </div>
  </div>

  {/* Bottom Panel */}
  <div
    className="
    p-6

    bg-white
    "
  >
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
      mt-2

      text-gray-500

      text-sm
      "
    >
      {product.english}
    </p>

    <div
      className="
      mt-6

      flex
      items-center
      justify-between
      "
    >
      <p
        className="
        uppercase

        tracking-[3px]

        text-[10px]

        text-[#D4A85E]
        "
      >
        Custom Made
      </p>

      <span
        className="
        text-[#163B68]

        font-medium

        group-hover:translate-x-1

        transition-all
        duration-500
        "
      >
        View Details →
      </span>
    </div>
  </div>
</motion.div>
          ))}

        </AnimatePresence>
      </div>

      <ProductModal
        product={selectedProduct}
        products={filteredProducts}
        setSelectedProduct={setSelectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
}