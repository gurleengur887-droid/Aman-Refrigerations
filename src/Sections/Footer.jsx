import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#163B68] text-white">

      {/* Golden Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#D4A85E]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-8 md:pt-10 pb-2">

        {/* Logo */}
        <div className="text-center">

          <img
            src="/logo/logo.png"
            alt="Aman Refrigeration"
            className="
            w-[180px]
            sm:w-[220px]
            md:w-[280px]
            mx-auto
            drop-shadow-[0_0_30px_rgba(255,170,70,.35)]
            "
          />

          <p
            className="
            mt-6
            uppercase
            tracking-[0.35em]
            text-[#D4A85E]
            text-[10px]
            md:text-sm
            "
          >
            Crafted With Faith, Built To Last
          </p>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 my-6"></div>

        {/* Grid */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-6
          md:gap-8
          "
        >

          {/* Quick Links */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link
                to="/"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Home
              </Link>

              <Link
                to="/collection"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Collection
              </Link>

              <a
                href="/#reels"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Featured Reels
              </a>

              <a
                href="/#about"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                About Us
              </a>

            </div>

          </div>

          {/* Categories */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Categories
            </h3>

            <div className="space-y-4">

              <Link
                to="/collection?category=Sacred%20Structures"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Sacred Structures
              </Link>

              <Link
                to="/collection?category=Spiritual%20Essentials"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Spiritual Essentials
              </Link>

              <Link
                to="/collection?category=Langar%20Solutions"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Langar Solutions
              </Link>

              <Link
                to="/collection?category=Utility%20Products"
                className="
                block
                text-white/70

                hover:text-[#D4A85E]
                hover:translate-x-2

                duration-300
                "
              >
                Utility Products
              </Link>

            </div>

          </div>
                    {/* Contact */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-white/70">

              {/* Phone */}
              <div className="flex gap-4 justify-center sm:justify-start">

                <FaPhoneAlt className="text-[#D4A85E] mt-1 flex-shrink-0" />

                <div className="space-y-2">

                  <a
                    href="tel:+919517231313"
                    className="
                    block

                    hover:text-[#D4A85E]

                    duration-300
                    "
                  >
                    +91 95172 31313
                  </a>

                  <a
                    href="tel:+919855051286"
                    className="
                    block

                    hover:text-[#D4A85E]

                    duration-300
                    "
                  >
                    +91 98550 51286
                  </a>

                </div>

              </div>

              {/* Email */}
              <div className="flex gap-4 justify-center sm:justify-start">

                <FaEnvelope className="text-[#D4A85E] mt-1 flex-shrink-0" />

                <a
                  href="mailto:stalwinder344@gmail.com"
                  className="
                  hover:text-[#D4A85E]

                  duration-300
                  "
                >
                  stalwinder344@gmail.com
                </a>

              </div>

              {/* Address */}
              <div className="flex gap-4 justify-center sm:justify-start">

                <FaMapMarkerAlt className="text-[#D4A85E] mt-1 flex-shrink-0" />

                <a
                  href="https://maps.google.com/?q=Opposite+ITI+College+Near+Daba+Road+Gill+Road+Ludhiana+Punjab"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  leading-relaxed

                  hover:text-[#D4A85E]

                  duration-300
                  "
                >
                  Opposite ITI College,
                  <br />
                  Near Daba Road,
                  <br />
                  Gill Road,
                  <br />
                  Ludhiana, Punjab
                </a>

              </div>

            </div>

          </div>

          {/* Social */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 justify-center sm:justify-start">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919517231313"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12

                md:w-14
                md:h-14

                rounded-full

                bg-white/10

                flex
                items-center
                justify-center

                text-xl
                md:text-2xl

                hover:bg-[#25D366]
                hover:-translate-y-2

                duration-300
                "
              >
                <FaWhatsapp />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/amanrefrigerations?igsh=OG9uaTBveXg1bDEw"
                className="
                w-12
                h-12

                md:w-14
                md:h-14

                rounded-full

                bg-white/10

                flex
                items-center
                justify-center

                text-xl
                md:text-2xl

                hover:bg-pink-500
                hover:-translate-y-2

                duration-300
                "
              >
                <FaInstagram />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Amanrefrigerations/"
                className="
                w-12
                h-12

                md:w-14
                md:h-14

                rounded-full

                bg-white/10

                flex
                items-center
                justify-center

                text-xl
                md:text-2xl

                hover:bg-blue-600
                hover:-translate-y-2

                duration-300
                "
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-8 mb-3"></div>

        {/* Bottom */}
        <div
          className="
          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4
          "
        >

          <p
            className="
            text-white/40

            text-xs
            md:text-sm

            uppercase

            tracking-[0.25em]
            "
          >
            © 2025 Aman Refrigeration
          </p>

          <p
            className="
            text-white/40

            text-xs
            md:text-sm

            tracking-[0.15em]

            text-center
            "
          >
            Waheguru Ji Ka Khalsa • Waheguru Ji Ki Fateh
          </p>

        </div>

      </div>

    </footer>
  );
}