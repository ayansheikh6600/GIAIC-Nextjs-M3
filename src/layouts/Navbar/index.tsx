"use client"
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useState } from 'react';


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Products', href: '/produts' },
];


const Navbar = () => {
  const pathname = usePathname()
  const [selectedCategory, setSelectedCategory] = useState<string>('/');




  console.log(pathname);


  return (
    <div className='flex justify-between items-center p-2 bg-gray-100 shadow-lg '>
      <div>
        LOGO
      </div>
      <nav className="relative flex justify-center space-x-8 p-2 bg-black rounded-3xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href} onClick={() => setSelectedCategory(item?.href)}>
              <div className='relative '>
                
              <span
                className={`relative z-10 px-4 py-6 font-medium hover:text-indigo-500 
                ${selectedCategory === item?.href
                      ? 'text-white'
                      : 'text-gray-400'
                  }
                `}
              >
                {item.name}
                
                
              </span>
              {selectedCategory === item?.href && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#1e064b] rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

              </div>

            </Link>
          );
        })}
      </nav>

      <div>
        Social Link
      </div>
    </div>

  );
};

export default Navbar;
