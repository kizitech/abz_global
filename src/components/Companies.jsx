import { companies } from "../constants";

const Companies = () => {
  return (
    <div className="relative mt-[40%] border-b border-neutral-800 bg-white pb-40">
      <h2 className="text-center text-xl font-light mt-10 lg:mt-20 tracking-wide text-gray-800">Other brands have trusted our services</h2>
      <div className="flex flex-wrap gap-10 mt-10 lg:mt-20 mx-auto justify-center items-center">
        {companies.map((item, index) => (
          <div key={index} className="w-32 cursor-pointer invert transition-all hover:brightness-50">
            <img src={item.icon} alt={item.text} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
