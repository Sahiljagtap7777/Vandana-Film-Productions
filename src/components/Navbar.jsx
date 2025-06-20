// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Awards', path: '/awards' },
//     { name: 'Movies', path: '/movies' },
//     { name: 'News', path: '/news' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-film-secondary shadow-lg py-2' : 'bg-transparent py-4'}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="text-2xl font-serif font-bold text-film-accent"
//             >
//               Vandana Film Productions
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link 
//                 key={item.name}
//                 to={item.path}
//                 className="relative group text-white hover:text-film-accent transition-colors duration-300"
//               >
//                 {item.name}
//                 <motion.span 
//                   className="absolute left-0 bottom-0 h-0.5 bg-film-accent w-0 group-hover:w-full transition-all duration-300"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: '100%' }}
//                 />
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//             >
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden mt-4 pb-4"
//           >
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link 
//                   key={item.name}
//                   to={item.path}
//                   className="text-white hover:text-film-accent transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'Awards', path: '/awards' },
    { name: 'News', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <FiYoutube />, name: 'YouTube', url: 'https://youtube.com' },
    { icon: <FaTiktok />, name: 'TikTok', url: 'https://tiktok.com' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <img 
                src="/web-app-manifest-192x192.png" 
                className="h-12 mr-2"
              />
              <span className="text-xl font-bold text-yellow-400 hidden md:block">
                Vandana Film Productions
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link 
                    to={item.path}
                    className={`flex items-center font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 ${
                      activeItem === item.name ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <span className="relative">
                      {item.name}
                      <motion.span 
                        className="absolute left-0 bottom-0 h-0.5 bg-red-600 w-full"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: activeItem === item.name ? 1 : 0,
                          originX: 0
                        }}
                        whileHover={{ 
                          scaleX: 1,
                          originX: 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons and Search - Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}

            <motion.button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Search"
            >
              <FiSearch />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white focus:outline-none"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link 
                    to={item.path}
                    className={`flex items-center font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 ${
                      activeItem === item.name ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveItem(item.name);
                    }}
                  >
                    <span className="relative">
                      {item.name}
                      <motion.span 
                        className="absolute left-0 bottom-0 h-0.5 bg-red-600 w-full"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: activeItem === item.name ? 1 : 0,
                          originX: 0
                        }}
                        whileHover={{ 
                          scaleX: 1,
                          originX: 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center space-x-6 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Bar */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-4 overflow-hidden"
          >
            <form className="flex items-center bg-gray-800 rounded-lg p-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow bg-transparent text-white focus:outline-none px-2"
              />
              <button
                type="submit"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;