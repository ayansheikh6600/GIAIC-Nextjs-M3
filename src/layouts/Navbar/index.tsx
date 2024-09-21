"use client"
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'

import Link from 'next/link';


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Products', href: '/produts' },
];


const Navbar = () => {
  const pathname = usePathname()



  console.log(pathname);


  return (
    <div className='flex justify-between items-center px-2 bg-gray-100 shadow-lg'>
      <div>
        LOGO
      </div>
      <nav className="flex justify-center space-x-8 py-4 ">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href}>
              <span
                className={`relative px-4 py-2 font-medium text-gray-700 hover:text-indigo-500 
                ${isActive ? 'outline-b outline-indigo-500' : ''}
                hover:outline-b hover:outline-indigo-500`}
              >
                {item.name}
                {/* Bottom outline for active or hover state */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out
                ${isActive ? 'bg-indigo-500' : 'bg-transparent'}
                group-hover:bg-indigo-500`}
                />
              </span>
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
