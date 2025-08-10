import React from "react";

const Tvideo = () => {
  return (
    <section className="relative w-full h-[100vh] -translate-y-6 lg:-translate-y-10 xl:-translate-y-15">
      <video
        src="/videos/t-video.mp4"
        className="w-screen h-screen object-cover"
        autoPlay
        // muted
        // loop
      ></video>
    </section>
  );
};

export default Tvideo;
