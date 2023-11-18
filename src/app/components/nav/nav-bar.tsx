import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // Import the useRouter hook


interface NavLinkProps {
  href: string;
  label: string;
}

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="bg-customBlue2 flex items-center justify-between px-6 py-1"></div>
      <nav className="bg-customBlue1 flex items-center font-logo justify-between px-6">
        <div className="hidden lg:flex space-x-2">
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/" label="Home" />
          </div>
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/components/hotels" label="Hotels" />
          </div>
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/components/travelLocation" label="Travel Locations" />
          </div>
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/components/gallery" label="Gallery" />
          </div>
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/components/about" label="About" />
          </div>
          <div className="text-white px-6 py-6 text-lg hover:text-blue-700 bg-customBlue3">
            <CustomNavLink href="/components/reviews" label="Reviews" />
          </div>
        </div>
        <div className="flex">
          <div className="text-white text-lg mt-2 mr-4">LKR</div>
          <a href="/components/signin">
            <button className="flex bg-customBlue2 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">
              <svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 45.532 45.532">
                <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765
      c12.574,0,22.766-10.192,22.766-22.765S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53
      c0,4.159-3.371,7.53-7.531,7.53
      c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
      c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
      c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
              </svg>
              <span className="ml-2 pr-2">Sign In</span>
            </button>
          </a>

        </div>
        <div className="lg:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

const CustomNavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const router = useRouter(); // Get the router object using useRouter

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} className="text-white" onClick={handleClick}>
      {label}
    </a>
    
  );
};

export default NavBar;
