import React from 'react';
import { Shield, Weight, Trophy } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Robust Escrow Payment Mechanism",
    description: "Client funds are securely held in an escrow account, guaranteeing that freelancers receive payment only upon the satisfactory completion of their work, ensuring transparency and trust."
  },
  {
    icon: Weight,
    title: "Impartial Dispute Resolution",
    description: "In the event of a disagreement, neutral moderators evaluate the deliverables anonymously, offering a fair and unbiased resolution without revealing the identities of either party."
  },
  {
    icon: Trophy,
    title: "Exclusive Contest-Based Engagements",
    description: "Organizations can organize competitions with prize pools for top-performing submissions, fostering high-level networking opportunities and recognition for freelancers."
  }
];

const pros = [
  "Secure escrow payments.",
  "Fair dispute resolution.",
  "Anonymity ensures impartiality",
  "Contest-based opportunities.",
  "Trust through transparency."
];

const cons = [
  "Unsecured payment methods.",
  "Biased dispute resolutions.",
  "Lack of transparency.",
  "Limited networking opportunities.",
  "Delayed payment processes."
];

const WhyChooseUsBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Why should you work with us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            {pros.map((pro, index) => (
              <div key={index} className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{pro}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            {cons.map((con, index) => (
              <div key={index} className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                <span>{con}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsBanner;
