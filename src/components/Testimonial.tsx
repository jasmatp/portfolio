import React, { useState } from 'react';
import { motion } from 'framer-motion';
import picture from '../assets/images/profile.png'
// import picture from '../download.png'
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    text: "Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis iste natus error sit voluptat...",
    name: "Paul Harrison",
    company: "QuboHub",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "https://via.placeholder.com/600x400?text=Team+1",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum, nisi sed facilisis commodo, purus velit fermentum ligula, id egestas metus nisl in velit.",
    name: "Jessica Lee",
    company: "Creative Inc",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://via.placeholder.com/600x400?text=Team+2",
  },
  {
    id: 3,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Michael Chen",
    company: "InnovateX",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    image: "https://via.placeholder.com/600x400?text=Team+3",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { text, name, company, avatar, image } = testimonials[activeIndex];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="bg-gray-50 w-full">
      <div className="max-w-6xl px-6 bg-gray-200 py-16 flex rounded-e-xl flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">What People Say</h2>

          <div className="relative pl-10 text-gray-600 italic mb-8">
            <span className="absolute left-0 top-0 text-[#4a9fd8] text-4xl leading-none">“</span>
            <p>{text}</p>
          </div>

          <div className="flex items-center">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{company}</p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#4a9fd8]' : 'bg-gray-300'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Image with animation */}
        <div ref={ref}
          className={`hidden md:flex md:w-1/3 relative mt-12 md:mt-0 flex justify-end ${inView ? "fade-left-right" : "hidden-left"}`}
          key={activeIndex}        >
          <img
            src={picture}
            alt="Testimonial group"
            className="rounded-3xl shadow-lg h-1/2 max-w-full h-[450px] w-[400px] -mr-[24rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
