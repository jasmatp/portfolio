import React from 'react';

type Feature = {
  name: string;
  included: boolean;
};

type Plan = {
  title: string;
  price: number;
  features: Feature[];
};

const plans: Plan[] = [
  {
    title: "Hourly",
    price: 99,
    features: [
      { name: "One time contract", included: true },
      { name: "Flexible Contract", included: true },
      { name: "Source Files", included: true },
      { name: "Support", included: false },
      { name: "Updates", included: false }
    ]
  },
  {
    title: "Project Basis",
    price: 69,
    features: [
      { name: "One time contract", included: true },
      { name: "Flexible Contract", included: true },
      { name: "Source Files", included: true },
      { name: "Support", included: true },
      { name: "Updates", included: false }
    ]
  },
  {
    title: "Monthly",
    price: 39,
    features: [
      { name: "One time contract", included: true },
      { name: "Flexible Contract", included: true },
      { name: "Source Files", included: true },
      { name: "Support", included: true },
      { name: "Updates", included: true }
    ]
  }
];

const PricingPlans: React.FC = () => {
  return (
    <section className="pricing-section w-full">
      <div className="header">
        <p className="text-2xl tracking-widest text-red-600 mb-2">LET’S START WORKING</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Pricing Plans</h2>
      </div>

      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <hr />
            <p className="price">
              <span className="amount">${plan.price}</span> / Per Hour
            </p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                  {feature.included ? '✓' : '✕'} {feature.name}
                </li>
              ))}
            </ul>
            <button className="start-btn">START NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
