import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Fvideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { opacity: 0, marginTop: "-115vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 0.3,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".about-section", {
      opacity: 0,
      ease: "power1.inOut",
    }).to(
      ".first-vd-wrapper",
      {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      "<"
    );

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 10,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="first-vd-wrapper relative w-full h-[100vh]">
      <video
        ref={videoRef}
        src="https://cdn.jsdelivr.net/gh/ahmed-abd-alalim/RedBlossom@main/videos/f-video.mp4"
        className="w-screen h-screen object-cover"
        muted
        playsInline
        preload="auto"
      ></video>
    </section>
  );
};

export default Fvideo;
