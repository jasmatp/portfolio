import React from 'react';
import { ContactProps } from './types/types';

const ContactForm: React.FC<ContactProps> = ({contactData}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 w-full">
      <div className="text-center mb-12">
        <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">CONTACT ME</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Let’S Start A New Project</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-evenly">
        {/* Left side: Contact info */}
        <div className="grid md:flex gap-10">
          {/* Location */}
          <div className="flex items-center gap-6 w-full md:w-[30%]">
            <div className="bg-[#4a9fd8] rounded-full w-12 h-12 flex items-center justify-center text-white text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21C12 21 18 13.5 18 9a6 6 0 1 0-12 0c0 4.5 6 12 6 12z" />
                <circle cx="12" cy="9" r="2" />
              </svg>
            </div>
            <div className='w-2/3'>
              <p className="font-semibold text-lg mb-1 text-gray-600">Location</p>
              <p className="text-gray-600">{contactData.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-6 w-full md:w-[30%]">
            <div className="bg-[#4a9fd8] rounded-full w-12 h-12 flex items-center justify-center text-white text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.46 2.39.98 3.5a2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.11.52 2.29.85 3.5.98a2 2 0 0 1 1.72 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1 text-gray-600">Phone</p>
              <p className="text-gray-600">{contactData.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6 w-full md:w-[30%]">
            <div className="bg-[#4a9fd8] rounded-full w-12 h-12 flex items-center justify-center text-white text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1 text-gray-600">Email</p>
              <p className="text-gray-600">{contactData.email}</p>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        {/* <form className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <textarea
            placeholder="Start writing message here"
            className="md:col-span-2 border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-600 resize-none"
            rows={6}
          />
          <button
            type="submit"
            className="md:col-span-2 bg-rose-600 text-white font-semibold py-3 rounded hover:bg-rose-700 transition"
          >
            SUBMIT NOW
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default ContactForm;
