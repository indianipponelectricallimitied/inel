"use client"
import React, { useState } from 'react';
import StockTicker from './StockTicker';
import { TbMailFilled } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { TbMenu3 } from "react-icons/tb";
import Button from './button';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null); // Reset submenu when main menu toggles
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [

    { label: 'Company', href: '/' , submenu : [{label: 'About Us', href: '/about-us'}, {label: 'Leadership', href: '/leadership'}, {label: 'News', href: '/news'}, {label: 'Events', href: '/events'}, {label: 'Contact Us', href: '/contact-us'}] },
    { label: 'Products & Solutions', href: '/' },
    { label: 'Investors', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Sustainability  ', href: '/' },
    { label: 'Technology', href: '/' },
  ];
  
  return (
    <nav className="container mx-auto px-3 py-2 md:p-4 absolute top-0 left-0 right-0 z-50">
     
      <div className="hidden md:flex justify-between items-center gap-5">
        <a href='#'>
          <img src="/logo.svg" alt="logo" />
        </a>
        <div>
          <div className="pb-1 flex items-center justify-between">
            <StockTicker  className="text-white"/>
            <a href='#' className='text-white flex items-center gap-1'> <TbMailFilled /> inelcorp@inel.co.in
            </a>
          </div>
          <div className="space-x-8 border-t-1 border-primary pt-2">
              {menuItems.map((item, index) => (
                <div key={index} className="relative inline-block">
                  {item.submenu ? (
                    <div className="group">
                      <button className="flex items-center gap-1 text-white hover:text-primary">
                        {item.label}
                        <IoChevronDownOutline className="text-sm transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 z-10 hidden min-w-[200px]  bg-white py-2 shadow-lg group-hover:block">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-white hover:bg-gray-50 hover:text-primary"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-white hover:text-primary"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}        
          </div>
        </div>
        
        <Button variant="blue" href="/contact">Contact Us</Button>
      </div>

     
      <div className="md:hidden flex justify-between items-center">
        <a href='#'>
          <img src="/logo.svg" alt="logo" width={170} height={100} />
        </a>
        <button onClick={toggleMenu} className="text-2xl">
          <TbMenu3 />
        </button>
      </div>

  
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl">
            <MdClose />
          </button>
        </div>
        <div className="flex flex-col space-y-2 mt-6 px-4">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.submenu ? (
                <div className="w-full">
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center justify-between w-full py-2 text-white hover:text-primary"
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
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 pl-4 text-white hover:text-primary text-sm"
                        onClick={toggleMenu}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block py-2 text-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
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
  );
};

export default Navbar;
