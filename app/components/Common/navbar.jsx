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
import ApiService from '../../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const logo = "/logo-white.svg";
const logoBlack = "/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [products, setProducts] = useState([]);
  const [vehicleCategories, setVehicleCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableVehicleCategories, setAvailableVehicleCategories] = useState([]);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [clickedItems, setClickedItems] = useState({
    productTypes: [],
    vehicleCategories: [],
    products: []
  });
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, vehicleData, productData] = await Promise.all([
          ApiService.getProducts(),
          ApiService.getVehicleCategories(),
          ApiService.getProductTypes()
        ]);
        setProducts(productsData);
        setVehicleCategories(vehicleData);
        setProductTypes(productData);
        
        // Set default selections
        if (productData.length > 0) {
          setSelectedProductType(productData[0].name);
          
          // Calculate available vehicle categories for the first product type
          const productsForFirstType = ApiService.filterProductsByType(productsData, productData[0].name);
          const availableCategories = vehicleData.filter(category => 
            productsForFirstType.some(product => 
              ApiService.filterProductsByVehicleCategory([product], category.name).length > 0
            )
          );
          setAvailableVehicleCategories(availableCategories);
          
          if (availableCategories.length > 0) {
            setSelectedVehicleCategory('All Categories');
            // Show all products for the selected product type
            const allProducts = ApiService.filterProductsByType(productsData, productData[0].name);
            setFilteredProducts(allProducts);
          } else {
            // If no vehicle categories for this product type, just filter by product type
            const filtered = ApiService.filterProductsByType(productsData, productData[0].name);
            setFilteredProducts(filtered);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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

  const handleProductTypeClick = (productType) => {
    setSelectedProductType(productType);
    
    // Track clicked product type
    setClickedItems(prev => ({
      ...prev,
      productTypes: [...prev.productTypes, productType]
    }));
    
    // Calculate available vehicle categories for the selected product type
    const productsForType = ApiService.filterProductsByType(products, productType);
    const availableCategories = vehicleCategories.filter(category => 
      productsForType.some(product => 
        ApiService.filterProductsByVehicleCategory([product], category.name).length > 0
      )
    );
    // Limit to only the first 4 vehicle categories for future use
    setAvailableVehicleCategories(availableCategories.slice(0, 4));
    
    // Set the first available vehicle category as selected, or clear if none available
    if (availableCategories.length > 0) {
      setSelectedVehicleCategory('All');
      // Show all products for the selected product type
      const allProducts = ApiService.filterProductsByType(products, productType);
      setFilteredProducts(allProducts);
    } else {
      setSelectedVehicleCategory('');
      updateFilteredProducts(productType, '');
    }
  };

  const handleVehicleCategoryClick = (vehicleCategory) => {
    setSelectedVehicleCategory(vehicleCategory);
    
    // Track clicked vehicle category
    setClickedItems(prev => ({
      ...prev,
      vehicleCategories: [...prev.vehicleCategories, vehicleCategory]
    }));
    
    if (vehicleCategory === 'All') {
      // Show all products for the selected product type
      const allProducts = ApiService.filterProductsByType(products, selectedProductType);
      setFilteredProducts(allProducts);
    } else {
      updateFilteredProducts(selectedProductType, vehicleCategory);
    }
  };

  const updateFilteredProducts = (productType, vehicleCategory) => {
    if (!productType) return;
    
    // Filter products by product type first
    let filtered = ApiService.filterProductsByType(products, productType);
    
    // Then filter by vehicle category if available
    if (vehicleCategory && vehicleCategories.length > 0) {
      filtered = filtered.filter(product => 
        ApiService.filterProductsByVehicleCategory([product], vehicleCategory).length > 0
      );
    }
    
    setFilteredProducts(filtered);
  };

  const handleProductClick = (productId, productName) => {
    // Track clicked product
    setClickedItems(prev => ({
      ...prev,
      products: [...prev.products, { id: productId, name: productName }]
    }));
    
    // Close menu
    setIsHovered(false);
    setIsMegaMenuOpen(false);
  };

  const menuItems = [
    { label: 'Products & Solutions', href: '/Products&Solutions', 
      submenu: products.map(product => ({
        label: product.name,
        href: `/Product/${product.id}`
      }))
    },
    {label: 'About', href: '/about-us'},
    // { label: 'Products', href: '/Products&Solutions',},
    { label: 'Technology', href: '/technology' },
    { label: 'Investors', href: '/investors' },
    { label: 'Sustainable  ', href: '/sustainable' },
    { label: 'Aftermarket  ', href: '/aftermarket' },
    { label: 'Media  ', href: '/newsroom' },
    { label: 'Careers', href: '/career' },
  ];

  // Create dynamic category cards from product types only
  const getCategoryCards = () => {
    return productTypes.map((type, index) => ({
      label: type.name,
      href: `/Products&Solutions?type=productType&value=${encodeURIComponent(type.name)}`,
      image: type.img,
      shade: 'bg-[radial-gradient(ellipse_at_96.36%_83.67%,#578EFF_0%,#160959_100%)]',
      productType: type.name
    }));
  };
  
  return (
    <nav className={`container mx-auto py-2 z-50 ${
      isHomePage && !isHovered ? 'navbar-home' : 'navbar-default'
    }`}>
     
      <div className="hidden lg:flex justify-between items-center gap-5 ">
        <Link href='/' className="transition-all duration-300 ease-in-out z-[1000]">
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
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setIsMegaMenuOpen(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      setIsMegaMenuOpen(false);
                    }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsHovered(false)}
                      className={`flex relative items-center gap-1 nav-link transition-colors duration-300 ease-in-out ${isHomePage && !isHovered ? 'text-white' : 'text-black'}`}
                    >
                      {item.label}
                      <div className='flex items-center justify-center absolute right-1/2 translate-x-1/2 -bottom-3 z-50 '>
                        <GoDotFill className='text-white text-xs group-hover:text-primary' />
                      </div>
                    </Link>
                    <div className="absolute left-0 z-40 pt-4 toptodown hidden w-full bg-white group-hover:block rounded-b-[30px]"
                         style={{ display: isMegaMenuOpen ? 'block' : 'none' }}>
                      <div className="container mx-auto flex flex-col border-t border-gray-200 py-5">
                        {/* Top Section - Category/Application Cards (2 rows of 5) */}
            {/* <div className='flex items-center gap-2 pb-2'>Solutions</div> */}
                        <div className='grid grid-cols-5 w-full gap-[10px] mb-6'>
                          
                          {getCategoryCards().map((subItem, subIndex) => (
                            <Link 
                              key={`product-${subIndex}`}
                              href={`/Products&Solutions?type=productType&value=${encodeURIComponent(subItem.productType).replace(/%20/g, '+')}`}
                              onClick={() => {
                                setIsHovered(false);
                                setIsMegaMenuOpen(false);
                              }}
                              className={`rounded-lg p-4 relative h-20 flex items-center justify-between ${subItem.shade} cursor-pointer ${
                                selectedProductType === subItem.productType ? 'ring-2 ring-blue-500 ring-dashed' : ''
                              }`}
                            >
                              <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg opacity-20`} style={{backgroundImage: `url(${subItem.image})`}}></div>
                              <p className='text-white z-10 relative text-lg w-9/12'>{subItem.label}</p>
                              <FiArrowRight  className='text-white'/>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Vehicle Categories Section - First 4 only */}
                        {availableVehicleCategories.length > 0 && (
                          <div className='flex flex-row justify-center gap-2 items-center'>
                            <h4 className="text-sm font-medium text-gray-700">Vehicle Categories</h4>
                            <div className='flex flex-wrap gap-2'>
                              <Link
                                href="/Products&Solutions"
                                onClick={() => {
                                  setIsHovered(false);
                                  setIsMegaMenuOpen(false);
                                }}
                                className={`py-2 px-4 text-sm rounded-md transition-all ${
                                  selectedVehicleCategory === 'All'
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                All Categories
                              </Link>
                              {availableVehicleCategories.slice(0, 4).map((category, index) => (
                                <Link
                                  key={category.name}
                                  href={`/Products&Solutions?type=vehicle&value=${encodeURIComponent(category.name).replace(/%20/g, '+')}`}
                                  onClick={() => {
                                    setIsHovered(false);
                                    setIsMegaMenuOpen(false);
                                  }}
                                  className={`py-2 px-4 text-sm rounded-md transition-all ${
                                    selectedVehicleCategory === category.name
                                      ? 'bg-primary text-white'
                                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                  }`}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    onClick={() => setIsHovered(false)}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}        
          </div>
        </div>
        
        <Button variant={`${isHomePage ? 'white' : 'blue'}`} hasArrow={false} href="/contact-us" className='text-black !w-fit'>Enquire Now</Button>
      </div>

     
      <div className="lg:hidden flex justify-between items-center z-50">
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
        className={`fixed h-screen overflow-y-auto top-0 right-0 w-[90%] max-w-sm bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overscroll-contain`}
      >
        <div className="flex justify-end p-4 z-50">
          <button onClick={toggleMenu} className="text-2xl">
            <MdClose className='text-black' />
          </button>
        </div>
        
        <div className="flex flex-col space-y-4 px-4 pb-20">
          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.submenu ? (
                <div className="w-full">
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center justify-between w-full py-3 text-black border-b border-gray-200"
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
                      openSubmenu === index ? 'max-h-[2000px]' : 'max-h-0'
                    }`}
                  >
                    {/* Top Section - Category/Application Cards */}
                    <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                      {getCategoryCards().map((subItem, subIndex) => (
                        <Link 
                          key={`mobile-product-${subIndex}`}
                                                        href={`/Products&Solutions?type=productType&value=${encodeURIComponent(subItem.productType).replace(/%20/g, '+')}`}
                          onClick={() => {
                            toggleMenu();
                            setOpenSubmenu(null);
                          }}
                          className={`rounded-lg p-3 relative h-16 flex items-center justify-between ${subItem.shade} cursor-pointer ${
                            selectedProductType === subItem.productType ? 'ring-2 ring-blue-500 ring-dashed' : ''
                          }`}
                        >
                          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg opacity-20`} style={{backgroundImage: `url(${subItem.image})`}}></div>
                          <p className='text-white z-10 relative text-sm w-1/2'>{subItem.label}</p>
                          <FiArrowRight  className='text-white text-sm'/>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Vehicle Categories Section - First 4 only */}
                    {availableVehicleCategories.length > 0 && (
                      <div className='mb-4'>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Vehicle Categories</h4>
                        <div className='flex flex-wrap gap-2'>
                          <Link
                            href="/Products&Solutions"
                            onClick={() => {
                              toggleMenu();
                              setOpenSubmenu(null);
                            }}
                            className={`py-1 px-3 text-xs rounded-md transition-all ${
                              selectedVehicleCategory === 'All'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            All Categories
                          </Link>
                          {availableVehicleCategories.slice(0, 4).map((category, index) => (
                            <Link
                              key={category.name}
                              href={`/Products&Solutions?type=vehicle&value=${encodeURIComponent(category.name).replace(/%20/g, '+')}`}
                              onClick={() => {
                                toggleMenu();
                                setOpenSubmenu(null);
                              }}
                              className={`py-1 px-3 text-xs rounded-md transition-all ${
                                selectedVehicleCategory === category.name
                                  ? 'bg-primary text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Product Cards - Hidden for future use */}
                    {/* <div className='mb-4'>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Products</h4>
                      <div className='grid grid-cols-1 gap-2'>
                        {filteredProducts.slice(0, 8).map((product, subIndex) => (
                          <Link
                            key={`mobile-product-link-${subIndex}`}
                            href={`/Product/${product.id}`}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all cursor-pointer"
                            onClick={() => {
                              handleProductClick(product.id, product.name);
                              toggleMenu();
                              setOpenSubmenu(null);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 object-contain"
                              />
                              <span className="text-sm font-medium text-gray-900">{product.name}</span>
                            </div>
                            <FiArrowRight className="text-xs text-primary" />
                          </Link>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 text-black border-b border-gray-200 hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4">
            <Button variant="blue" href="/contact-us" className="w-full">
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