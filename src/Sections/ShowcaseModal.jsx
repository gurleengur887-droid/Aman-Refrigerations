import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const ShowcaseModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/60
            backdrop-blur-2xl
            flex
            items-center
            justify-center
            px-5
          "
        >

          {/* VIDEO CONTAINER */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >

            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                -top-14
                right-0
                text-white
                text-3xl
                hover:text-[#D4B67A]
                transition
              "
            >
              <FiX />
            </button>

            {/* Video */}
            <video
              src="/videos/showroom.mp4"
              controls
              autoPlay
              playsInline
              className="
                w-[280px]
                sm:w-[320px]
                md:w-[360px]
                rounded-[36px]
                shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                max-h-[85vh]
                object-cover
              "
            />

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default ShowcaseModal;