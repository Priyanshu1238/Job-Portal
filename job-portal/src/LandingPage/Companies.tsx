import Marquee from "react-fast-marquee";
import companyName from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-10 p-5">
      {/* Header */}
      <div className="text-center text-4xl font-semibold text-bright-sun-200">
        Trusted by <span className="text-bright-sun-400">1000+</span> companies
      </div>

      {/* Content Layout */}
      <div className="flex justify-between items-center mt-10 ">
        {/* Left Side */}
        <div className="text-5xl font-bold text-bright-sun-400">Featured Companies</div>

        {/* Right Side - Marquee Box */}
        <div className="w-1/2 border-2 border-bright-sun-400 p-2 rounded-lg ">
          <Marquee pauseOnHover={true}>
            {companyName.map((company, index) => (
              <div className="p-3 hover:bg-mine-shaft-900 rounded-xl cursor-pointer" key={index}>
                <img className="h-12" src={`/companies/${company}.jpg`} alt={company} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Companies;
