
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiVolume2,
  FiVolumeX,
  FiPlay,
  FiPause,
} from "react-icons/fi";
import { useRef, useState, useEffect } from "react";

export default function ReelModal({
  reel,
  isOpen,
  onClose,
}) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isOpen) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, [isOpen]);

  if (!reel) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
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
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
            absolute
            top-6
            right-6
            text-white
            text-4xl
            hover:scale-110
            transition
            "
          >
            <FiX />
          </button>

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="flex flex-col items-center"
          >
            <video
              ref={videoRef}
              src={reel.video}
              className="
              object-cover

              w-[280px]
              sm:w-[330px]
              md:w-[390px]
              lg:w-[430px]

              max-h-[85vh]

              rounded-[48px]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
              "
            />

            {/* Controls */}
            <div className="flex items-center gap-5 mt-8">
              <button
                onClick={togglePlay}
                className="
                w-14
                h-14
                rounded-full
                bg-white/10
                backdrop-blur-md
                text-white
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
                "
              >
                {isPlaying ? <FiPause /> : <FiPlay />}
              </button>

              <button
                onClick={toggleMute}
                className="
                w-14
                h-14
                rounded-full
                bg-white/10
                backdrop-blur-md
                text-white
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
                "
              >
                {isMuted ? <FiVolumeX /> : <FiVolume2 />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

