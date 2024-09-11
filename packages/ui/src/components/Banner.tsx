import React from 'react';

interface BannerProps {
  mainTitle?: string;
  subTitle?: string;
  description?: string;
}

export const Banner: React.FC<BannerProps> = ({
  mainTitle = "Where Talent Meets Opportunity",
  subTitle = "Everything You Need",
  description = "In The Ever-Evolving Landscape Of Skills And Knowledge, The Choice Between Hiring An Expert Or Becoming One Yourself Is A Pivotal Decision."
}) => {
  return (
    <div className="bg-black text-white py-16 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 text-8xl font-serif select-none pointer-events-none">
        <div className="absolute top-0 left-0">Empleadora</div>
        <div className="absolute bottom-0 right-0">Em</div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {mainTitle}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">{subTitle}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
