import { motion } from "framer-motion";
import CountUp from "react-countup";
export default function AboutSection() {
  return (
    <section 
    id="about"
    className="relative bg-[#F7F2EB] overflow-hidden">

      {/* Top Space */}
      <div className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#C6A76A]
              text-xs
              md:text-sm
              mb-6
            "
            >
              OUR LEGACY
            </p>

            <h2
              className="
              text-[#163B68]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-tight
            "
            >
              Built With Craftsmanship
              <br />
              Since 2000
            </h2>

            <div className="mt-10 max-w-3xl mx-auto">
              <p
                className="
                text-gray-600
                text-base
                md:text-lg
                leading-relaxed
              "
              >
                For over two decades, Aman Refrigeration has been delivering
                premium stainless steel fabrication and customized solutions
                with precision, quality and timeless craftsmanship.
              </p>
            </div>
            
            {/* Stats */}
<div className="mt-28">

  <div
    className="
  grid
grid-cols-2
lg:grid-cols-4

gap-y-20
gap-x-10"
  >

    {/* Stat 1 */}
    <div className="text-center">

      <h3
   className="
text-[#163B68]
text-5xl
md:text-7xl
font-bold
"
      >
        <CountUp
          end={25}
          duration={3}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </h3>

      <p
        className="
        mt-4
        uppercase
        tracking-[0.25em]
        text-[#C6A76A]
        text-xs
        "
      >
        Years Experience
      </p>

    </div>


    {/* Stat 2 */}
    <div className="text-center">

      <h3
  className="
text-[#163B68]
text-5xl
md:text-7xl
font-bold
"
      >
        <CountUp
          end={100}
          duration={3}
          enableScrollSpy
          scrollSpyOnce
        />
        %
      </h3>

      <p
        className="
        mt-4
        uppercase
        tracking-[0.25em]
        text-[#C6A76A]
        text-xs
        "
      >
        Custom Built
      </p>

    </div>


    {/* Stat 3 */}
    <div className="text-center">

      <h3
 className="
text-[#163B68]
text-5xl
md:text-7xl
font-bold
"
      >
        <CountUp
          end={500}
          duration={3}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </h3>

      <p
        className="
        mt-4
        uppercase
        tracking-[0.25em]
        text-[#C6A76A]
        text-xs
        "
      >
        Pan India Projects
      </p>

    </div>


    {/* Stat 4 */}
    <div className="text-center">

      <h3
   className="
text-[#163B68]
text-5xl
md:text-7xl
font-bold

"
      >
        <CountUp
          end={24}
          duration={3}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </h3>

      <p
        className="
       mt-5

uppercase

tracking-[0.3em]

text-[#C6A76A]

text-[11px]

leading-relaxed
        "
      >
        Years Of Trust
      </p>

    </div>

  </div>

</div>
<div className="h-14 md:h-20"></div>
<div className="mt-28 flex items-center justify-center gap-6">

  <div className="w-24 h-[1px] bg-[#C6A76A]" />

  <p
    className="
    uppercase
    tracking-[0.35em]
    text-[#C6A76A]
    text-xs
    "
  >
    ABOUT US
  </p>

  <div className="w-24 h-[1px] bg-[#C6A76A]" />

</div>
{/* About Text */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
  max-w-5xl
  mx-auto

  mt-16 md:mt-20

  text-center
  "
>

  <h3
    className="
    text-[#163B68]

 text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl

    font-semibold

    leading-tight
    "
  >
    A Legacy Built On Precision,
    <br />
    Quality & Trust
  </h3>

  <p
    className="
    mt-10

    text-gray-600

   text-base
md:text-xl

leading-[2.4]

px-4
    "
  >
    Established in 2000 in Ludhiana, Punjab, Aman Refrigeration
    has earned a reputation for precision engineering and premium
    stainless steel fabrication.
  </p>

  <p
    className="
    mt-8

    text-gray-600

    text-lg
    md:text-xl

    leading-[2.2]

    px-2
    "
  >
    Specializing in Gurudwara products, kitchen equipment and
    customized fabrication solutions, every product is designed
    according to client requirements using AutoCAD-based planning
    and executed with exceptional craftsmanship.
  </p>

  <p
  className="
  mt-8

  text-gray-600

  text-lg
  md:text-xl

  leading-[2.2]

  px-2
  "
>
  Over the years, our commitment to quality and customer
  satisfaction has enabled us to successfully complete
  <span className="font-semibold text-[#163B68]">
    {" "}500+ projects across India{" "}
  </span>
  and deliver
  <span className="font-semibold text-[#163B68]">
    {" "}100+ shipments worldwide
  </span>,
  serving Gurudwaras, institutions and clients both within
  India and internationally. Every product reflects our
  dedication to durability, functionality and timeless
  craftsmanship.
</p>

</motion.div>
<div className="h-16 md:h-20"></div>
<div className="
mt-16 md:mt-20
flex items-center justify-center gap-4">

  <div className="w-24 h-[1px] bg-[#C6A76A]" />

  <p
    className="
    uppercase
    tracking-[0.35em]
    text-[#C6A76A]
    text-xs
    "
  >
    QUALITY CONTROL
  </p>

  <div className="w-24 h-[1px] bg-[#C6A76A]" />

</div>

{/* Quality Control Block */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
  relative

mt-14 md:mt-16

  max-w-6xl
  mx-auto

  overflow-hidden

  rounded-[50px]
md:rounded-[60px]
  bg-[#163B68]
  shadow-[0_40px_100px_rgba(22,59,104,.35)]

 px-7
py-16

md:px-20
md:py-28
  "
>

  {/* Golden Ambient Glow */}
  <div
    className="
    absolute

    top-[-120px]
    left-1/2

    -translate-x-1/2

    w-[600px]
    h-[250px]

    bg-[#D4A85E]

    opacity-20

    blur-3xl

    rounded-full
    "
  />

  {/* Content */}
  <div className="relative z-10">

    {/* Label */}
    <p
      className="
      uppercase

      tracking-[0.35em]

      text-[#D4A85E]

      text-xs
      md:text-sm

      text-center
      "
    >
      UNCOMPROMISING STANDARDS
    </p>

    {/* Heading */}
    <h2
      className="
      mt-8

      text-center

      text-white
text-3xl
sm:text-4xl
md:text-6xl

      font-semibold

      leading-tight
      "
    >
      Excellence In Every
      <br />
      Detail
    </h2>

    {/* Paragraph */}
    <p
      className="
      max-w-4xl

      mx-auto

      mt-12

      text-center

      text-white/80
text-base
md:text-xl

leading-[2.4]

      leading-[2.1]
      "
    >
      We are committed to maintaining uncompromising quality
      standards. Every product is manufactured using premium
      materials and thoroughly inspected by skilled professionals
      to ensure durability, reliability and customer satisfaction.
      Through precision engineering and strict quality checks,
      we strive to deliver products that combine durability,
      functionality and timeless craftsmanship.
    </p>

    {/* Bottom Divider */}
    <div
      className="
      mt-16

      w-32
      h-[1px]

      bg-[#D4A85E]

      mx-auto
      "
    />

  </div>

</motion.div>
<div className="h-28 md:h-40"></div>

{/* Quote Section */}
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
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
  mt-20
  md:mt-28

  max-w-6xl

  mx-auto

  px-6

  text-center
  "
>

  {/* Top Divider */}
  <div className="flex items-center justify-center gap-6">

    <div className="w-20 md:w-32 h-[1px] bg-[#D4A85E]" />

    <p
className="
uppercase

tracking-[0.2em]
md:tracking-[0.35em]

text-[#C6A76A]

text-[10px]
md:text-xs

whitespace-nowrap

"
>
      
    
      OUR PHILOSOPHY
    </p>

    <div className="w-20 md:w-32 h-[1px] bg-[#D4A85E]" />

  </div>

  {/* Quote */}
  <h2 className="
mt-10
text-[#163B68]

text-[2rem]
sm:text-4xl
md:text-6xl
lg:text-7xl

font-['Cormorant_Garamond']
italic
font-semibold

leading-[1.5]
tracking-tight
">
    “Perfection is not attainable,
    <br />
    but if we chase perfection,
    <br />
    we can catch excellence.”
  </h2>

  {/* Bottom */}
  <div className="mt-14">

    <div
      className="
      w-24
      h-[1px]

      bg-[#D4A85E]

      mx-auto
      "
    />

    <p
      className="
      mt-8

      uppercase

      tracking-[0.5em]

      text-[#C6A76A]

      text-xs
      md:text-sm
      "
    >
      AMAN REFRIGERATION
    </p>

  </div>

</motion.div>
          </motion.div>

        </div>
      </div>
<div className="h-16 md:h-24"></div>
    </section>
  );
}