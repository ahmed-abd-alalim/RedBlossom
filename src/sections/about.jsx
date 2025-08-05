// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const About = () => {
  return (
    <section className="relative w-full col-center bg-[url(/images/bgs/2.webp)] bg-[position:center_center] md:bg-[length:100%] bg-no-repeat -translate-y-4">
      <div className="hidden md:block relative font-juzhokaizen text-black uppercase md:text-[1.6rem]/8 xl:text-[1.9rem]/10 md:w-[82%] lg:w-[65%] xl:w-[60%] 2xl:w-[50%]">
        <span className="md:block text-center">
          This is a collection of elegant,
        </span>
        <div className="text-center">
          <span>symbolic images - spirits</span>
          <div className="w-15 inline-flex mx-4">
            <img src="/images/logo.png" alt="logo" width={"100%"} />
          </div>
          <span>that embody</span>
        </div>
        <span className="md:block text-center">beauty, strength</span>
        <span className="md:block text-center md:translate-x-15">
          and silence.
        </span>
        <span className="md:block text-center md:translate-x-10">Each NFT</span>
        <span className="text-start">
          is inspired by Eastern aesthetics, emotional depth and multi-layered
          meanings.
        </span>
      </div>

      <div className="hidden xl:block w-[10%] absolute top-3 left-40">
        <span className="text-[.6rem] font-medium text-black opacity-30">
          The collection contains 4 unique characters, each with its own visual
          code and character.
        </span>
      </div>
      <div className="hidden xl:block w-[10%] absolute bottom-0 right-35 2xl:right-45">
        <span className="text-[.6rem] font-medium text-black opacity-30">
          Ideal for digital art lovers, collectors and those who see art as more
          than just a picture.
        </span>
      </div>

      <h2 className="md:hidden font-juzhokaizen uppercase text-center text-black text-[1.35rem] px-5">
        This is a collection of elegant, symbolic images - spirits that embody
        beauty, strength and silence.
        <div className="w-15 m-auto mb-3">
          <img src="/images/logo.png" alt="logo" width={"100%"} />
        </div>
        Each NFT is inspired by Eastern aesthetics, emotional depth and
        multi-layered meanings.
      </h2>

      <div className="md:hidden flex items-center justify-center gap-2 mt-4 cursor-pointer">
        <span className="underline text-[1.1rem]">Read more</span>
        <HiMiniArrowUpRight className="text-[1.1rem]" />
      </div>

      <div className="w-[30%] md:w-[25%] xl:w-[20%] absolute z-5 xl:z-1 bottom-25 xl:bottom-0 -right-0 translate-x-8">
        <div>
          <img src="/images/Trees/tree-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center">
          <img src="/images/Trees/tree-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[30%] md:w-[25%] xl:w-[15%] absolute z-5 xl:z-1  top-0 -left-0 -translate-x-5">
        <div>
          <img src="/images/Trees/tree-2-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center">
          <img src="/images/Trees/tree-2-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default About;
