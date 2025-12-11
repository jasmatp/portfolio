import React from 'react';
import { EducationProps } from './types/types';

const Educations: React.FC<EducationProps> = ({ educationData }) => {
  return (
    <section className="flex flex-col w-full md:flex-row mx-auto px-6 py-16 pb-0 items-center md:items-start gap-12">

      {/* Left Image */}
      <div className="md:w-1/3">
        <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">Education</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">My Education</h2>
        <p className="mb-8 text-gray-600 max-w-lg">
          My educational background and qualifications are detailed below.
        </p>

        <div className="space-y-10">
          {educationData.map(({ title, location, years, description }, index) => (
            <div key={index} className="flex gap-5 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 p-3 border border-[#4a9fd8] rounded-md text-[#4a9fd8]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>

              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                <p className="font-medium text-gray-700">
                  {location}{' '}
                  <span className="italic text-sm text-gray-500">({years})</span>
                </p>
                <p className="mt-2 max-w-md text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right ontent */}
      <div className="md:w-1/2">
        <img
          src="https://thames-home-4.vercel.app/images/work/work-img.jpg"
          alt="Work Experience"
          className="w-full object-cover h-[450px] rounded-lg shadow-lg filter grayscale hover:filter-none hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Educations;
