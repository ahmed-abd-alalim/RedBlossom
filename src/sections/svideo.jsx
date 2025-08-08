const Svideo = () => {
  return (
    <section className="relative w-full h-[100vh] -translate-y-6 lg:-translate-y-10 xl:-translate-y-0">
      <video
        src="/videos/s-video.mp4"
        className="w-screen h-screen object-cover"
        autoPlay
        // muted
        // loop
      ></video>
    </section>
  );
};

export default Svideo;
