const Fvideo = () => {
  return (
    <section className="relative w-full h-[100vh]">
      <video
        src="/videos/f-video.mp4"
        className="w-screen h-screen object-cover"
        autoPlay
        // muted
        // loop
      ></video>
    </section>
  );
};

export default Fvideo;
