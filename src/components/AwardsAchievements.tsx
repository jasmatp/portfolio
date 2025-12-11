import React from 'react';

type Award = {
  id: number;
  logo: string;
  title: string;
  year: string;
  organization: string;
  location: string;
  description: string;
};

const awardsData: Award[] = [
  {
    id: 1,
    logo: 'https://thames-home-4.vercel.app/_next/image?url=%2Fimages%2Faward%2Faward-logo1.png&w=256&q=75', // replace with your actual image path or url
    title: 'Best Developer',
    year: '2022',
    organization: 'Developer Association',
    location: 'New York, Usa',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.',
  },
  {
    id: 2,
    logo: 'https://thames-home-4.vercel.app/_next/image?url=%2Fimages%2Faward%2Faward-logo2.png&w=256&q=75',
    title: 'Developer of the Year',
    year: '2021',
    organization: 'Dev Internatioal',
    location: 'London, England',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.',
  },
  {
    id: 3,
    logo: 'https://thames-home-4.vercel.app/_next/image?url=%2Fimages%2Faward%2Faward-logo3.png&w=256&q=75',
    title: 'Fastest Coder',
    year: '2019',
    organization: 'Amazing Programmer',
    location: 'Dhaka, Bangladesh',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.',
  },
];

const AwardsAchievements: React.FC = () => {
  return (
    <section className="bg-gray-50 w-full py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-2xl tracking-widest text-red-600 mb-2">SUCCESS STORIES</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Awards & Achivements</h2>
        {/* <hr className="border-gray-300 mt-6" /> */}
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {awardsData.map(({ id, logo, title, year, organization, location, description }) => (
          <div key={id} className="flex flex-col md:flex-row items-center md:items-start justify-between border-t border-gray-300 pt-8">
            {/* Logo */}
            <div className="flex-shrink-0 self-center mr-4 md:mb-0 md:w-28">
              <img src={logo} alt={`${title} logo`} width={150} className="grayscale opacity-60" />
            </div>

            {/* Title and Year */}
            <div className="flex flex-col text-left md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              <span className="text-sm text-gray-600 mt-1">{year}</span>
            </div>

            {/* Organization and Location */}
            <div className="flex flex-col text-left md:w-1/4 mb-4 md:mb-0">
              <h4 className="font-semibold text-lg text-gray-900">{organization}</h4>
              <span className="text-sm text-gray-600 mt-1">{location}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 md:w-1/2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAchievements;
