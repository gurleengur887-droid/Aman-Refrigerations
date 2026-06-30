

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaStore,
  FaAward,
  FaUsers,
} from "react-icons/fa";
export default function VisitSection() {
  return (
    <section className="bg-[#FBF8F2] py-20 lg:py-28 overflow-hidden">

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">

        {/* Top */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-6">

            <div className="w-20 md:w-32 h-[1px] bg-[#B58A3A]" />

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[#B58A3A]
              text-xs
              md:text-sm
              "
            >
              VISIT US
            </p>

            <div className="w-20 md:w-32 h-[1px] bg-[#B58A3A]" />

          </div>

          <div
            className="
            mt-5

            text-[#B58A3A]

            text-2xl
            "
          >
            ✦
          </div>

        </div>


        {/* Main Grid */}
        <div
          className="
          mt-16

          grid
          lg:grid-cols-[1.3fr_1fr]

          gap-14

          items-center
          "
        >

          {/* Left Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="
            overflow-hidden

            rounded-[40px]

            border

            border-[#E4D7BF]

            shadow-[0_25px_80px_rgba(0,0,0,.12)]
            "
          >

            <img
              src="/store.png"
              alt="Aman Refrigeration"

              className="
              w-full

              h-auto
              lg:h-[780px]

              object-contain
              lg:object-cover

              transition-all
              duration-700

              hover:scale-105
              "
            />

          </motion.div>


          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >

            {/* Label */}
            <p
              className="
              uppercase

              tracking-[0.35em]

              text-[#B58A3A]

              text-xs
              md:text-sm
              "
            >
              LUDHIANA, PUNJAB
            </p>


            {/* Heading */}
            <h2
              className="
              mt-6

              text-[#0E2954]

              text-4xl
              sm:text-5xl
              lg:text-7xl

              font-medium

              leading-[0.95]

              tracking-tight
              "
            >
              Experience Our
              <br />
              Craftsmanship
              <br />
              In Person
            </h2>


            {/* Divider */}
            <div
              className="
              mt-10

              w-20

              h-[2px]

              bg-[#B58A3A]
              "
            />


            {/* Description */}
            <p
              className="
              mt-10

              text-gray-600

              text-base
              md:text-lg

              leading-[2]
              "
            >
              Visit our showroom and experience premium stainless
              steel fabrication solutions crafted with precision,
              quality and timeless elegance. Serving Gurudwaras,
              Mandirs and sacred spaces across India since 2000.
            </p>


            {/* Address */}
            <div className="mt-14 flex gap-6">

              <div
                className="
                w-20
                h-20

                rounded-full

                bg-[#001F5B]

                flex
                items-center
                justify-center

                shrink-0
                "
              >
                <FaMapMarkerAlt
                  className="
                  text-[#D4A85E]

                  text-3xl
                  "
                />
              </div>


              <div>

                <p
                  className="
                  uppercase

                  tracking-[0.2em]

                  text-[#B58A3A]

                  text-sm

                  font-semibold
                  "
                >
                  Address
                </p>

                <p
                  className="
                  mt-4

                  text-gray-600

                  leading-relaxed
                  "
                >
                  Aman Refrigeration
                  <br />
                  Gill Road
                  <br />
                  Ludhiana, Punjab
                </p>

              </div>

            </div>



            {/* Contact */}
            <div className="mt-10 flex gap-6">

              <div
                className="
                w-20
                h-20

                rounded-full

                bg-[#001F5B]

                flex
                items-center
                justify-center

                shrink-0
                "
              >
                <FaPhoneAlt
                  className="
                  text-[#D4A85E]

                  text-2xl
                  "
                />
              </div>


              <div>

                <p
                  className="
                  uppercase

                  tracking-[0.2em]

                  text-[#B58A3A]

                  text-sm

                  font-semibold
                  "
                >
                  Contact
                </p>

                <p
                  className="
                  mt-4

                  text-gray-600

                  leading-relaxed
                  "
                >
                  +91 98550-51286
                  <br />
                  +91 95172-31313
                </p>

              </div>

            </div>


            {/* Buttons */}
           <div
  className="
  mt-14

  flex
  flex-col
  items-center

  md:flex-row
  md:items-start

  gap-5
  "
>

             <a
  href="https://www.google.co.in/maps/place/Aman+Refrigeration/@30.8703354,75.8592718,16z/data=!3m1!4b1!4m6!3m5!1s0x391a8310dea26db3:0xd453ee666b973b60!8m2!3d30.8703354!4d75.8592718!16s%2Fg%2F11kn2qxkj_?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="
w-full
max-w-[320px]
md:w-auto

px-10
py-5

rounded-full

bg-[#001F5B]
text-white
font-medium

text-center

transition-all
duration-500

hover:-translate-y-1
"
>
  Get Directions →
</a>

              <a
                href="tel:+919855051286"
              className="
w-full
max-w-[320px]
md:w-auto

px-10
py-5

rounded-full

border
border-[#D4A85E]

text-[#0E2954]
font-medium

text-center

transition-all
duration-500

hover:bg-[#D4A85E]
hover:text-white
"
              >
                Call Now
              </a>

            </div>

          </motion.div>

        </div>

      </div>
{/* Bottom Features */}
<motion.div
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
  }}
  className="
  mt-24

  bg-white

  border

  border-[#E8DDCC]

  rounded-[40px]

  shadow-[0_20px_60px_rgba(0,0,0,.06)]

  overflow-hidden
  "
>

  <div
    className="
    grid

    md:grid-cols-3
    "
  >

    {/* Card 1 */}
    <div
      className="
      px-10
      py-12

      text-center

      border-b
      md:border-b-0

      md:border-r

      border-[#EEE4D5]
      "
    >

      <div
        className="
        mx-auto

        w-24
        h-24

        rounded-full

        bg-[#F7F3EC]

        flex
        items-center
        justify-center
        "
      >
        <FaStore
          className="
          text-[#B58A3A]

          text-4xl
          "
        />
      </div>

      <h3
        className="
        mt-8

        text-[#0E2954]

        text-2xl

        font-medium
        "
      >
        Showroom
      </h3>

      <p
        className="
        mt-5

        text-gray-600

        leading-[1.9]
        "
      >
        Visit our showroom and experience
        premium craftsmanship firsthand.
      </p>

    </div>



    {/* Card 2 */}
    <div
      className="
      px-10
      py-12

      text-center

      border-b
      md:border-b-0

      md:border-r

      border-[#EEE4D5]
      "
    >

      <div
        className="
        mx-auto

        w-24
        h-24

        rounded-full

        bg-[#F7F3EC]

        flex
        items-center
        justify-center
        "
      >
        <FaAward
          className="
          text-[#B58A3A]

          text-4xl
          "
        />
      </div>

      <h3
        className="
        mt-8

        text-[#0E2954]

        text-2xl

        font-medium
        "
      >
        Premium Quality
      </h3>

      <p
        className="
        mt-5

        text-gray-600

        leading-[1.9]
        "
      >
        High-quality stainless steel
        products built to last for years.
      </p>

    </div>



    {/* Card 3 */}
    <div
      className="
      px-10
      py-12

      text-center
      "
    >

      <div
        className="
        mx-auto

        w-24
        h-24

        rounded-full

        bg-[#F7F3EC]

        flex
        items-center
        justify-center
        "
      >
        <FaUsers
          className="
          text-[#B58A3A]

          text-4xl
          "
        />
      </div>

      <h3
        className="
        mt-8

        text-[#0E2954]

        text-2xl

        font-medium
        "
      >
        Expert Support
      </h3>

      <p
        className="
        mt-5

        text-gray-600

        leading-[1.9]
        "
      >
        Our experienced team is always
        ready to guide and support you.
      </p>

    </div>

  </div>

</motion.div>
    </section>
  );
}