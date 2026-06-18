
import { useState } from "react";
import { motion } from "framer-motion";

import ProductModal from "./ProductModal";
import { products } from "../data/products";



export default function ProductExplorer() {

  
  const [selectedProduct, setSelectedProduct] = useState(null);

  

  // AUTO GENERATE CATEGORIES
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#F7F2EB] overflow-hidden">

      {/* Ambient Glow */}
      <div className="
        absolute top-0 left-1/2
        -translate-x-1/2
        w-[700px] md:w-[900px]
        h-[200px] md:h-[250px]
        bg-orange-100
        blur-3xl
        opacity-30
        rounded-full
      "></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 md:mb-20 px-4">

        <p className="
          uppercase
          tracking-[0.3em]
          text-[#C6A76A]
          text-[10px]
          md:text-sm
          mb-3 md:mb-4
        ">
          Explore Sacred Craftsmanship
        </p>

        <h2 className="
          text-[#163B68]
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-semibold
        ">
          Our Collection
        </h2>

      </div>

      {/* CATEGORY ROWS */}
      <div className="space-y-14 md:space-y-20 relative z-10">

        {categories.map((category) => {

          const filteredProducts = products.filter(
            (product) => product.category === category
          );

          return (

            <div key={category}>

              {/* Category Heading */}
              <div className="
                flex items-center justify-between
                px-4 md:px-10
                mb-5 md:mb-8
              ">

                <h3 className="
                  text-[#163B68]
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-semibold
                ">
                  {category}
                </h3>

                <p className="
                  text-[#C6A76A]
                  uppercase
                  tracking-[0.2em]
                  text-[10px]
                  md:text-xs
                ">
                  Swipe →
                </p>

              </div>

              {/* Horizontal Scroll */}
              <div className="
                overflow-x-auto
                no-scrollbar
                px-4 md:px-10
              ">

                <div className="
                  flex gap-4 md:gap-5
                  w-max
                  pb-2
                ">

                  {filteredProducts.map((product) => {

                    

                    return (

<motion.div
  key={product.id}
  onClick={() => setSelectedProduct(product)}
  whileHover={{ y: -6 }}
  transition={{
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
  relative
  overflow-hidden
  rounded-[26px]
  bg-white
  shadow-xl
  group

  w-[180px]
  sm:w-[220px]
  md:w-[260px]
  lg:w-[280px]

  aspect-[3/4]
  flex-shrink-0
  cursor-pointer
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

      transition-all duration-700
      group-hover:scale-105
    `}
  />

  {/* Overlay */}
  <div
    className="
    absolute inset-0
    bg-gradient-to-t
    from-black/80
    via-black/20
    to-transparent
  "
  />

  {/* Content */}
  <div
    className="
    absolute bottom-0 left-0
    w-full
    p-4
    z-10
    "
  >
    <h3
      className="
      text-white
      text-base
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
      mt-1
      "
    >
      {product.english}
    </p>

    <p
      className="
      mt-3
      text-[#D4A85E]
      uppercase
      tracking-[3px]
      text-[10px]
      "
    >
      Tap To Explore
    </p>
  </div>
</motion.div>

                
                    )
                  })}

                </div>

              </div>

            </div>

          );
        })}

      </div>

<ProductModal
  product={selectedProduct}
  products={products}
  setSelectedProduct={setSelectedProduct}
  isOpen={selectedProduct !== null}
  onClose={() => setSelectedProduct(null)}
/>


    </section>
  );
}