import React from 'react';
import { WorkExperienceProp, WorkexperienceProps } from './types/types';

const WorkExperience: React.FC<WorkexperienceProps> = ({ workExperienceData }) => {
  // const [visibleCount, setVisibleCount] = useState(2);

  // const handleShowMore = () => {
  //   setVisibleCount((prev) => prev + 2);
  // };
  return (
    <section className="flex flex-col w-full md:flex-row mx-auto px-6 py-16 pb-0 items-center md:items-start gap-12">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src="https://thames-home-4.vercel.app/images/work/work-img.jpg"
          alt="Work Experience"
          className="w-full object-cover h-[450px] rounded-lg shadow-lg filter grayscale hover:filter-none hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">WORK EXPERIENCE</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-900">My Experience</h2>
        <p className="mb-4 text-gray-600 max-w-lg">
          A summary of my professional experience and key responsibilities is provided below.
        </p>

        <div className="space-y-4">
          {workExperienceData?.slice(0, 2).map((work: WorkExperienceProp) => (
            <div key={work.id} className="flex gap-5 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 p-3 border border-[#4a9fd8] rounded-md text-[#4a9fd8]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{work.role}</h3>
                <p className="font-medium text-gray-700">
                  {work.company}{' '}
                  <span className="italic text-sm text-gray-500">({work.duration})</span>
                </p>
                {/* <p className="mt-2 text-justify text-gray-600">{work.responsibilities}</p> */}
                <ul className="mt-2 list-disc list-inside text-gray-600 text-justify">
                  {work.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Show More Button */}
          {/* {visibleCount < workExperienceData.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition"
              >
                Show More
              </button>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
