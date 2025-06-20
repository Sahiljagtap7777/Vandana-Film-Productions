import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Awards', path: '/awards' },
    { name: 'Movies', path: '/movies' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: 'Facebook', url: '#' },
    { icon: <FiTwitter />, name: 'Twitter', url: '#' },
    { icon: <FiInstagram />, name: 'Instagram', url: '#' },
    { icon: <FiYoutube />, name: 'YouTube', url: '#' },
  ];

  return (
    <footer className="bg-film-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-film-accent mb-4">Vandana Films</h3>
            <p className="text-gray-300">
              Creating cinematic masterpieces that inspire and entertain audiences worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-film-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Film Street</p>
              <p className="mb-2">Mumbai, Maharashtra 400001</p>
              <p className="mb-2">info@vandanafilms.com</p>
              <p>+1 (234) 567-890</p>
            </address>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="bg-film-primary hover:bg-film-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <h4 className="text-lg font-bold mt-6 mb-4">Newsletter</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-film-primary text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-film-accent w-full"
              />
              <button 
                type="submit"
                className="bg-film-accent hover:bg-yellow-600 px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Vandana Film Productions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;