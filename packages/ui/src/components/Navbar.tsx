import React from 'react';
import { Link } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Community', href: '/community' },
    { label: 'Find Freelancers', href: 'findlancer' },
    { label: 'Contests', href: '/contest' },
    { label: 'Log In', href: '/signin' },
    { label: 'Join now', href: '/signup', isButton: true },
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <nav className={`bg-black text-white p-4 ${isMobile ? 'flex flex-col items-center justify-center' : 'flex justify-between items-center'}`}>
      <div className="container flex justify-between mx-auto">
        <div className="text-2xl font-bold whitespace-nowrap">
          <span className="text-gray-400">E</span>
          <span>MPLEADORA</span>
        </div>
        <ul className={`flex items-center space-x-4 md:space-x-6 ${isMobile ? 'flex-col space-y-2' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`${item.href}`}
                className={`whitespace-nowrap ${item.isButton
                  ? 'bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition duration-300'
                  : 'hover:text-gray-300'
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
