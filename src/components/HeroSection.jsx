import { MoveUpRight, Plus } from "lucide-react";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-[#0C0C0C]">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-10">
        <div>
          <h1 className="text-4xl sm:text-[55px] sm:leading-[65px] text-center lg:text-start text-white relative lg:max-w-2xl">
            <h3 className="uppercase text-sm font-light text-neutral-400">introducing the lastest innovation</h3>
            Create all your products mockups {" "}
            <strong>easily</strong>
            <Plus className="bg-white text-black font-extrabold h-10 w-10 rounded-full absolute bottom-1 right-[33%] hidden xl:block" />
          </h1>
        </div>
        <div>
          <p className="mt-10 text-base font-normal text-center lg:text-start text-neutral-200 max-w-lg">
            Lorem ipsum dolor sit amet, officia suscipit reprehenderit ea provident molestiae, impedit quisquam? Exercitationem voluptas beatae et!
          </p>
          <div className="flex justify-center lg:justify-start my-10 gap-4">
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
