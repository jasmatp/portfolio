import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { StatDataProps, StatItemProps } from './types/types';

const StatsSection: React.FC<StatDataProps> = ({ StateData }) => {
  return (
    <section className="bg-[#1F2233] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-16 text-white">
        {StateData.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${inView ? "fade-up-center" : "hidden-center"
      }`}>
      <h2 className="text-6xl font-extrabold text-[#4a9fd8]">
        {inView ? (
          <CountUp end={value} duration={2} />
        ) : (
          0
        )}
        {suffix}
      </h2>
      <p className="text-xl font-serif uppercase mt-2">{label}</p>
    </div>
  );
};

export default StatsSection;
