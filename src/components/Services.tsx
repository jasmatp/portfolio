import React from 'react';
import { ServiceProps } from './types/types';

const WhatIDo: React.FC<ServiceProps> = ({serviceData}) => {
  return (
    <section className="pt-8 pb-0 bg-white text-center font-serif">
      <div className="mb-12">
        <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">Service</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">What I Do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {serviceData.map((service, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="min-w-[60px]">
              <img src={service.serviceicon} alt={service.servicetitle} className="w-12 h-12" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.servicetitle}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.servicedescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
