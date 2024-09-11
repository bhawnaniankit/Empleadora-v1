import React from 'react';

const companies = [
  { name: 'FACEBOOK', style: 'font-sans font-bold' },
  { name: 'Google', style: 'font-serif' },
  { name: 'NETFLIX', style: 'font-sans font-bold' },
  { name: 'P&G', style: 'font-serif font-bold' },
  { name: 'PayPal', style: 'font-sans-serif font-bold italic' }
];

const TrustedByBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-400">Trusted by:</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className={`text-2xl md:text-3xl text-gray-500 ${company.style}`}>
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedByBanner;
