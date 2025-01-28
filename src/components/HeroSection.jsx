import { MoveUpRight, Plus } from "lucide-react";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-40 px-6 justify-center bg-[#0C0C0C]">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-20">
        <div className="md:text-center lg:text-start max-w-lg md:max-w-2xl">
          <h3 className="uppercase text-sm font-light text-neutral-400">
            introducing the latest innovation
          </h3>
          <h1 className="text-4xl leading-[50px] md:text-[55px] sm:leading-[65px] text-white">
            Create all your products mockups <strong>easily</strong>
            <Plus className="bg-white text-black font-extrabold md:h-10 md:w-10 p-0.5 ml-2 rounded-full inline" />
          </h1>
        </div>
        <div>
          <p className="mt-10 text-sm md:text-base font-normal md:text-center lg:text-start text-neutral-200 max-w-lg">
            Lorem ipsum dolor sit amet, officia suscipit reprehenderit ea provident molestiae, impedit quisquam? Exercitationem voluptas beatae et!
          </p>
          <div className="flex my-10 gap-4 md:justify-center lg:justify-start">
            <a href="#" className="bg-[#2B5FEF] py-2 px-6 rounded-md text-white text-base flex items-center gap-1">
              <span>Try for free</span>
              <MoveUpRight size={18} />
            </a>
            <a href="#" className="py-2 px-6 rounded-md bg-neutral-700 text-white text-base">Get app</a>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-center">

      </div>
    </div>
  );
};

export default HeroSection;
