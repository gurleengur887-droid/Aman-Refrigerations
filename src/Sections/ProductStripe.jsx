import "./ProductStripe.css";

const productNames = [

  // Sacred Structures
  "ਪਾਲਕੀ ਸਾਹਿਬ",
  "Paalki Sahib",

  "ਗੁੰਬਦ",
  "Gumbad",

  "ਪੀੜਾ ਸਾਹਿਬ",
  "Peeda Sahib",

  "ਖੰਡਾ",
  "Khanda",

  "ਗੋਲਕ",
  "Golak",

  "ਪਲੰਗ ਸਾਹਿਬ",
  "Palang Sahib",
   
  "ਮਟਕੇ ਵਾਲਾ ਖੰਡਾ",
  "Matka Khanda",


  // Spiritual Essentials
  "ਜੋਤ ਦਾਨੀ",
  "Jot Daani",

  // Langar Solutions
  "ਕੜਾਹ ਪ੍ਰਸ਼ਾਦ ਕਾਊਂਟਰ",
  "Kadah Prashad Counter",

  "ਲੰਗਰ ਕੰਟੇਨਰ",
  "Langar Containers",

  "ਪਾਣੀ ਵਾਲੀ ਮਸ਼ੀਨ",
  "Water Machine",
  
  "ਚਾਹ ਵਾਲੀ ਮਸ਼ੀਨ",
  "Tea Tank Machine",

   "ਜੋਤ ਸਾਹਿਬ",
  "Jot Sahib",
  // Utility Products
  "ਭਾਂਡੇ ਧੋਣ ਵਾਲਾ ਸਿੰਕ",
  "Sink",

  "ਪਾਣੀ ਵਾਲੀ ਟਰਾਲੀ",
  "Water Trolly",
  
  "ਕੜਾਹ ਮਸ਼ੀਨ",
  "Kadah Machine",

  "ਵਾਈਪਰ",
  "Wiper",

  "ਭਾਂਡੇ ਵਾਲੀ ਟਰਾਲੀ",
  "Utensils Trolly",

 "ਚਾਹ ਵਾਲੀ ਟਰਾਲੀ",
 "Tea Tank",

  "ਪ੍ਰਭਾਤ ਫੇਰੀ ਰਿਕਸ਼ਾ",
  "Prabhatferi Rikshaw",

  "ਗੋਲਕ",
  "Golak",

];

export default function ProductStrip() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F2EB]
        py-5 md:py-7
        border-y
        border-[#d8c9b4]
      "
    >

      {/* Premium Background Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#fff8ef]
          via-[#f9f2e9]
          to-[#fff8ef]
          opacity-90
        "
      ></div>

      {/* Top Glow Line */}
      <div
        className="
          absolute top-0 left-0
          w-full h-[1px]
          bg-gradient-to-r
          from-transparent
          via-[#D98B3A]
          to-transparent
          opacity-40
        "
      ></div>

      {/* Bottom Glow Line */}
      <div
        className="
          absolute bottom-0 left-0
          w-full h-[1px]
          bg-gradient-to-r
          from-transparent
          via-[#163B68]
          to-transparent
          opacity-30
        "
      ></div>

   <div className="marquee relative z-10">

  <div className="marquee-track">

    {[...productNames, ...productNames].map((name, index) => (

      <div
        key={index}
        className="
          flex
          items-center
          mx-5 md:mx-8 lg:mx-10
          flex-shrink-0
          group
        "
      >

        <span
          className="
            text-[#163B68]
            text-sm
            sm:text-base
            md:text-xl
            lg:text-2xl
            font-medium
            tracking-wide
            transition-all
            duration-300
            group-hover:text-[#D98B3A]
          "
        >
          {name}
        </span>

        <div
          className="
            w-1.5
            h-1.5
            md:w-2
            md:h-2

            rounded-full

            bg-[#D98B3A]

            ml-5
            md:ml-8
            lg:ml-10

            opacity-70

            shadow-[0_0_12px_rgba(217,139,58,0.6)]
          "
        />

      </div>

    ))}

  </div>

</div>

    </section>
  );
}