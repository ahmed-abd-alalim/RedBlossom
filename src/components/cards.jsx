const Cards = ({ data, style }) => {
  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden flex flex-col items-center justify-start p-2 shadow-[5px_3px_10px_1px] shadow-soft-black ${style}`}
    >
      <div className="w-full rounded-3xl overflow-hidden">
        <img src={data.img} alt="avatar" width={"100%"} />
      </div>
      <div className="px-5 py-4">
        <div className="flex justify-center md:justify-between items-center">
          <h4>"{data.title}"</h4>
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-8 hidden md:block"
          />
        </div>
        <p className="text-black text-[.9rem] lg:text-[1.1rem] xl:text-[.7rem] opacity-50 mt-2 text-center md:text-start">
          {data.des}
        </p>
      </div>
    </div>
  );
};

export default Cards;
