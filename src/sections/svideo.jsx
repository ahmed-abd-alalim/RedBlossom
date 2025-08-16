import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Svideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".secound-vd-wrapper", { opacity: 0, marginTop: "20vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".secound-vd-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".utility-section", {
      opacity: 0,
      ease: "power1.inOut",
      delay: 5,
    }).to(".secound-vd-wrapper", {
      opacity: 1,
      duration: 30,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 100,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);

  return (
    <section className="secound-vd-wrapper relative w-full h-[100vh]">
      <video
        ref={videoRef}
        src="/videos/s-video.mp4"
        className="w-screen h-screen object-cover"
        muted
        playsInline
        preload="auto"
      ></video>
    </section>
  );
};

export default Svideo;
