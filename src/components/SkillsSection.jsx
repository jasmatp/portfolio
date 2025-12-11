import React from 'react';

const skills = [
  { name: "React-JS", percentage: 85 },
  { name: "Next-JS", percentage: 70 },
  { name: "Angular", percentage: 80 },
  { name: "HTML, CSS, Javascript", percentage: 85 }
];

const SkillsSection = () => {
  return (
    <div className="skills-section w-full">
      <div className="skills-text">
        <h4 className="text-2xl tracking-widest text-[#4a9fd8] mb-2">MY SKILL</h4>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Growing Over<br />Times</h2>
        <p className="description">But so that you may see where all this was born.</p>
      </div>

      <div className="skills-circles">
        {skills.map((skill, index) => (
          <div key={index} className="circle-container">
            <svg className="circle-svg">
              <circle className="bg" cx="50%" cy="50%" r="45%" />
              <circle
                className="progress"
                cx="50%" cy="50%" r="45%"
                style={{
                  strokeDashoffset: `${282 - (282 * skill.percentage) / 100}`
                }}
              />
            </svg>
            <div className="percentage">{skill.percentage}%</div>
            <div className="label">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
