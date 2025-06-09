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
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";


const logo = "/logo-white.svg";
const logoBlack = "/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null); // Reset submenu when main menu toggles
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { label: 'Company', href: '/' , 
      submenu: [
        {label: 'DC DC Convertors', href: '/products/dc-dc-convertors'},
        {label: 'BLDC Motor Controller', href: '/products/bldc-controller'},
        {label: 'TPMS Graphical LCD Unit', href: '/products/tpms-lcd'},
        {label: 'Control Panel', href: '/products/control-panel'},
        {label: 'Cluster Front Facia', href: '/products/cluster-facia'},
        {label: 'LCD Digital Instrument Cluster', href: '/products/lcd-cluster'},
        {label: 'LED Digital Instrument Cluster', href: '/products/led-cluster'},
        {label: '7.4 Inch TFT Instrument Cluster', href: '/products/tft-cluster'},
        {label: 'Reverse Parking Assist System', href: '/products/parking-assist'},
        {label: 'Steering Angle Sensor', href: '/products/steering-sensor'},
        {label: 'Speed Sensor', href: '/products/speed-sensor'},
        {label: 'Temperature Sensor', href: '/products/temperature-sensor'},
        {label: 'TPMS Sensor', href: '/products/tpms-sensor'},
        {label: 'Oil Level Sensor', href: '/products/oil-sensor'},
        {label: 'TMAP Sensor', href: '/products/tmap-sensor'},
        {label: 'Fuel Vapor Purge (FVP)', href: '/products/fvp'},
        {label: 'Dual Track TPS', href: '/products/dual-track-tps'},
        {label: 'Gear Position Sensor', href: '/products/gear-sensor'},
        {label: 'Solenoid', href: '/products/solenoid'},
        {label: 'Throttle Body', href: '/products/throttle-body'}
      ]
    },
    {label: 'About', href: '/about-us'},
    { label: 'Products', href: '/Products&Solutions',},
    { label: 'Technology', href: '/technology' },
    { label: 'Investors', href: '/investors' },
    { label: 'sustainable  ', href: '/sustainable' },
    { label: 'Media  ', href: '/newsroom' },
    { label: 'Careers', href: '/career' },
  ];

  const submenuproducts = [
    {label: 'Power Electronics', href: '#', image: '/images/products/bldc.png',  shade : 'bg-gradient-to-br from-primary to-[#5589f9]  '},
    {label: 'Power Electronics', href: '#', image: '/images/products/bldc.png',  shade : 'bg-gradient-to-br from-[#420959] to-[#C040E0]'},
    {label: 'Power Electronics', href: '#', image: '/images/products/bldc.png',  shade : 'bg-gradient-to-br from-[#09594C] to-[#40E0D0]'},
    {label: 'Power Electronics', href: '#', image: '/images/products/bldc.png',  shade : 'bg-gradient-to-br from-[#59090A] to-[#E04043]'},
    
  ]
  
  
  return (
    <nav className={`container mx-auto py-2 z-50 ${
      isHomePage && !isHovered ? 'navbar-home' : 'navbar-default'
    }`}>
     
      <div className="hidden lg:flex justify-between items-center gap-5">
        <Link href='/' className="transition-all duration-300 ease-in-out">
        { isHomePage && !isHovered ?
          <img src={logo} alt="logo" className="transition-opacity duration-300 ease-in-out" />
          :
          <img src={logoBlack} alt="logo" className="transition-opacity duration-300 ease-in-out" />
        }
        </Link>
        <div>
          <div className="pb-1 flex items-center justify-between">
            <StockTicker className={`nav-link transition-colors duration-300 ease-in-out ${isHomePage && !isHovered ? 'text-white' : 'text-black'}`}/>
            <Link href='mailto:inelcorp@inel.co.in' className='nav-link flex items-center gap-1 transition-colors duration-300 ease-in-out'> 
              <TbMailFilled /> inelcorp@inel.co.in
            </Link>
          </div>
          <div className={`${isHomePage && !isHovered ? 'border-white' : 'border-primary'} space-x-8 border-t pt-2 transition-colors duration-300 ease-in-out`}>
            {menuItems.map((item, index) => (
              <div key={index} className="inline-block">
                {item.submenu ? (
                  <div 
                    className="group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className={`flex relative items-center gap-1 nav-link transition-colors duration-300 ease-in-out ${isHomePage && !isHovered ? 'text-white' : 'text-black'}`}>
                      {item.label}
                      <div className='flex items-center justify-center absolute right-1/2 translate-x-1/2 -bottom-3 z-50 '>
                        <GoDotFill className='text-white text-xs group-hover:text-primary' />
                      </div>
                    </button>
                    <div className="absolute left-0 z-40 pt-4 toptodown hidden w-full bg-white group-hover:block">
                      <div className="container mx-auto flex border-t border-gray-200 py-5">
                        <div className='grid grid-cols-2 w-2/4 gap-[10px] pe-5 border-r border-gray-200'>
                          {submenuproducts.map((subItem, subIndex) => (
                            <Link 
                              key={`product-${subIndex}`}
                              href={subItem.href} 
                              className={`rounded-lg p-4 relative h-52 flex flex-col justify-between ${subItem.shade}`}
                            >
                              <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg opacity-20`} style={{backgroundImage: `url(${subItem.image})`}}></div>
                              <p className='text-white z-10 relative'>{subItem.label}</p>
                              <FiArrowRight  className='text-white'/>
                              <Image 
                                src={subItem.image} 
                                alt={subItem.label} 
                                width={200} 
                                height={100}
                                className='absolute top-1/2 right-0 -translate-y-1/2'
                              />
                            </Link>
                          ))}
                        </div>
                        <div className='w-2/4 grid grid-cols-2'>
                        <div>
                          {item.submenu.slice(0, 10).map((subItem, subIndex) => (
                            <Link
                              key={`submenu-${subIndex}`}
                              href={subItem.href}
                              className="block px-4 py-2 w-full hover:underline underline-offset-4 text-black"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                        <div>
                        {item.submenu.slice(10, 20).map((subItem, subIndex) => (
                          <Link
                            key={`submenu-${subIndex}`}
                            href={subItem.href}
                            className="block px-4 py-2 w-full hover:underline underline-offset-4 text-black "
                          >
                            {subItem.label}
                          </Link>
                        ))}
                        </div>
                        </div>
                      </div>
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
        
        <Button variant={`${isHomePage ? 'white' : 'blue'}`} hasArrow={false} href="/contact-us">Enquire Now</Button>
      </div>

     
      <div className="lg:hidden flex justify-between items-center">
        <Link href='/' className='w-1/2'>
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
        className={`fixed h-screen overflow-y-auto top-0 right-0 w-64 bg-black shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overscroll-contain`}
      >
        <div className="flex justify-end p-4  z-50">
          <button onClick={toggleMenu} className="text-2xl">
            <MdClose className='text-white' />
          </button>
        </div>
        <div className="flex   flex-col space-y-2 my-20 px-4 ">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.submenu ? (
                <div className="w-full">
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center justify-between w-full py-2 text-white"
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
                        key={`submenu-${subIndex}`}
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
            <Button variant="blue" href="/contact-us"  className="w-full">
              Enquire Now
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
