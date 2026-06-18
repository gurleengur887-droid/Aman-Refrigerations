import { useEffect, useRef } from "react";

export default function ReelCard({
  reel,
  isActive,
  onClick,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="overflow-hidden rounded-[32px] shadow-2xl bg-white">
        <video
          ref={videoRef}
          src={reel.video}
          muted
          playsInline
          loop
          className="
            object-cover
            rounded-[32px]

           w-[220px]
h-[300px]

md:w-[300px]
md:h-[400px]

lg:w-[390px]
lg:h-[580px]
          "
        />

        <div className="py-4 px-3 text-center">
          <h3 className="text-[#123D7A] text-lg font-semibold">
            {reel.punjabi}
          </h3>

         <p
  className="
  mt-1

  text-[10px]
  md:text-xs

  uppercase

  tracking-[3px]

  text-[#D4A85E]

  truncate
  "
>
  {reel.english}
</p>
        </div>
      </div>
    </div>
  );
}