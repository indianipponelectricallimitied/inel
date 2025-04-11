"use client"

import React, { useState, useEffect } from 'react';
import StockTicker from './stockmarket/StockTicker';
import { TbMailFilled } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { TbMenu3 } from "react-icons/tb";
import Button from '../Ui/button';
import { IoChevronDownOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link

const logo = "/logo-white.svg";
const logoBlack = "/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null); // Reset submenu when main menu toggles
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { label: 'Company', href: '/' , 
        submenu : [
          {label: 'About Us', href: '/about-us'},
          {label: 'Leadership', href: '/leadership'},
          {label: 'News', href: '/news'},
          {label: 'Events', href: '/events'},
          { label: 'Aftermarket', href: '/aftermarket' },
          {label: 'policies', href: '/policies'},
        ] 
    },
    { label: 'Products & Solutions', href: '/Products&Solutions' },
    { label: 'Investors', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Sustainability  ', href: '/sustainability' },
    { label: 'Technology', href: '/technology' },
  ];
  
  return (
    <nav className={`container mx-auto px-3 py-2 md:p-4 ${
      isHomePage ? 'navbar-home' : 'navbar-default'
    }`}>
     
      <div className="hidden md:flex justify-between items-center gap-5">
        <Link href='/'>
        { isHomePage ?
          <img src={logo} alt="logo" />
          :
          <img src={logoBlack} alt="logo" />
        }
        </Link>
        <div>
          <div className="pb-1 flex items-center justify-between">
            <StockTicker className={`nav-link ${isHomePage ? 'text-white' : 'text-black'}`}/>
            <Link href='mailto:inelcorp@inel.co.in' className='nav-link flex items-center gap-1'> 
              <TbMailFilled /> inelcorp@inel.co.in
            </Link>
          </div>
          <div className={`${isHomePage ? 'border-white' : 'border-primary'} space-x-8 border-t  pt-2`}>
            {menuItems.map((item, index) => (
              <div key={index} className="relative inline-block">
                {item.submenu ? (
                  <div className="group">
                    <button className="flex items-center gap-1 nav-link">
                      {item.label}
                      <IoChevronDownOutline className="text-sm transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 z-50 hidden min-w-[200px]  bg-primary py-2 shadow-lg group-hover:block rounded-md">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 w-full text-white hover:underline underline-offset-4 hover:text-white/80"
                        >
                          {subItem.label}
                        </Link> 
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}        
          </div>
        </div>
        
        <Button variant={`${isHomePage ? 'white' : 'blue'}`} href="/contact-us">Contact Us</Button>
      </div>

     
      <div className="md:hidden flex justify-between items-center">
        <Link href='/'>
        { isHomePage ?
          <img src={logo} alt="logo" />
          :
          <img src={logoBlack} alt="logo" />
        }
        </Link>
        <button onClick={toggleMenu} className="text-2xl">
          <TbMenu3 className={ isHomePage ? 'text-white' : 'text-primary'} />
        </button>
      </div>

  
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl">
            <MdClose className='text-white' />
          </button>
        </div>
        <div className="flex flex-col space-y-2 mt-6 px-4">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.submenu ? (
                <div className="w-full">
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center justify-between w-full py-2 hover:text-white/80"
                  >
                    {item.label}
                    <IoChevronDownOutline 
                      className={`text-sm transition-transform duration-300 ${
                        openSubmenu === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openSubmenu === index ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 pl-4 text-white hover:text-white/80 text-sm"
                        onClick={toggleMenu}
                      >
                        {subItem.label}
                      </Link> // Changed a to Link
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-white hover:text-white/80"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link> // Changed a to Link
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button variant="blue" href="/contact" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
)};
export default Navbar;
