import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchModal from "./SearchModal";
export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-[999]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        lg:px-10

        h-[90px]

        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo/logo.png"
            alt="Aman Refrigeration"
            className="
            w-[100px]
            lg:w-[135px]

            object-contain

            transition-all
            duration-500

            hover:scale-105
            "
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="
          hidden
          md:flex

          items-center

          gap-14
          "
        >

          {/* Home */}
          <Link
            to="/"
            className="
            relative

            text-[#163B68]
            text-[17px]

            font-medium

            group
            "
          >
            Home

            <span
              className={`
              absolute
              left-0
              -bottom-2

              h-[2px]

              rounded-full

              bg-[#D4A85E]

              transition-all
              duration-500

              ${
                location.pathname === "/"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
              `}
            />
          </Link>

          {/* Collection */}
          <Link
            to="/collection"
            className="
            relative

            text-[#163B68]
            text-[17px]

            font-medium

            transition-all
            duration-300

            hover:text-[#D4A85E]

            group
            "
          >
            Collection

            <span
              className={`
              absolute
              left-0
              -bottom-2

              h-[2px]

              rounded-full

              bg-[#D4A85E]

              transition-all
              duration-500

              ${
                location.pathname === "/collection"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
              `}
            />
          </Link>

          {/* Reels */}
          <Link
            to="/reels"
            className="
            relative

            text-[#163B68]
            text-[17px]

            font-medium

            transition-all
            duration-300

            hover:text-[#D4A85E]

            group
            "
          >
           Product Reels

            <span
              className={`
              absolute
              left-0
              -bottom-2

              h-[2px]

              rounded-full

              bg-[#D4A85E]

              transition-all
              duration-500

              ${
                location.pathname === "/reels"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
              `}
            />
          </Link>

        </div>
                {/* Desktop WhatsApp Button */}
        <div className="hidden md:flex items-center gap-6">
          <button
  onClick={() => setSearchOpen(true)}
  className="
  text-[#163B68]

  text-xl

  transition-all
  duration-500

  hover:text-[#D4A85E]
  hover:scale-110
  "
>
  <FaSearch />
</button>
          <a
            href="https://wa.me/919517231313"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-3

            px-7
            py-3

            rounded-full

            bg-gradient-to-r
            from-[#D4A85E]
            to-[#C89B53]

            text-white

            font-medium

            shadow-[0_20px_40px_rgba(212,168,94,.35)]

            transition-all
            duration-500

            hover:-translate-y-1
            hover:scale-[1.03]
            "
          >
            <FaWhatsapp />
            Contact Now →
          </a>
        </div>

        
 {/* Mobile Right Side */}
<div className="md:hidden flex items-center flex-1 ml-5">

  {/* Products */}
   <div className="flex-1 flex justify-center -ml-10">
    <Link
      to="/collection"
      className="
      text-[#D4A85E]
      relative
-right-1
relative
top-[2px]
      uppercase

      tracking-[0.25em]

      text-[10px]

      font-medium

      leading-none
      "
    >
      PRODUCTS →
    </Link>
  </div>
<button
  onClick={() => setSearchOpen(true)}
  className="
  text-[#163B68]

  text-xl

  mr-6

  transition-all
  duration-300

  hover:text-[#D4A85E]
  "
>
  <FaSearch />
</button>
  {/* Hamburger */}
  <button
    onClick={() => setMenuOpen(true)}
    className="
    flex
    items-center
    justify-center

    text-[#163B68]

    text-2xl

    leading-none
    "
  >
    <FaBars />
  </button>

</div>
</div>

    

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: menuOpen ? 0 : "100%",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        fixed

        top-0
        right-0

        w-[85vw]
        max-w-[350px]

        h-screen

        bg-[#F7F2EB]

        shadow-2xl

        z-[9999]

        md:hidden
        "
      >

        {/* Close */}
        <div className="flex justify-end p-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="
            text-2xl

            text-[#163B68]
            "
          >
            <FaTimes />
          </button>

        </div>

        {/* Links */}
        <div
          className="
          flex
          flex-col

          px-8

          gap-8

          mt-10
          "
        >

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`
            text-xl

            font-medium

            ${
              location.pathname === "/"
                ? "text-[#D4A85E]"
                : "text-[#163B68]"
            }
            `}
          >
            Home
          </Link>

          <Link
            to="/collection"
            onClick={() => setMenuOpen(false)}
            className={`
            text-xl

            font-medium

            ${
              location.pathname === "/collection"
                ? "text-[#D4A85E]"
                : "text-[#163B68]"
            }
            `}
          >
            Collection
          </Link>

          <Link
            to="/reels"
            onClick={() => setMenuOpen(false)}
            className={`
            text-xl

            font-medium

            ${
              location.pathname === "/reels"
                ? "text-[#D4A85E]"
                : "text-[#163B68]"
            }
            `}
          >
            Reels
          </Link>

          <a
            href="https://wa.me/919517231313"
            target="_blank"
            rel="noreferrer"
            className="
            mt-6

            flex
            items-center
            justify-center

            gap-3

            px-6
            py-4

            rounded-full

            bg-gradient-to-r
            from-[#D4A85E]
            to-[#C89B53]

            text-white

            font-medium
            "
          >
            <FaWhatsapp />
            Start Your Project
          </a>

        </div>

      </motion.div>
<SearchModal
  isOpen={searchOpen}
  onClose={() => setSearchOpen(false)}
/>
      {/* Luxury Bottom Line */}
      <div
        className="
        max-w-7xl
        mx-auto

        h-[1px]

        bg-gradient-to-r
        from-transparent
        via-[#D4A85E]/40
        to-transparent
        "
      />

    </motion.header>
  );
}