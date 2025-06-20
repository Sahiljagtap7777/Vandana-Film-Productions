import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="min-h-screen py-20 bg-film-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you about your next project or collaboration
          </p>
          <div className="w-20 h-1 bg-film-accent mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-film-accent bg-opacity-20 p-3 rounded-full">
                  <FiMail className="text-film-accent text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Email</h4>
                  <a href="mailto:info@vandanafilms.com" className="text-white hover:text-film-accent transition-colors duration-300">
                    info@vandanafilms.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-film-accent bg-opacity-20 p-3 rounded-full">
                  <FiPhone className="text-film-accent text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-white hover:text-film-accent transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-film-accent bg-opacity-20 p-3 rounded-full">
                  <FiMapPin className="text-film-accent text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Address</h4>
                  <p className="text-white">
                    123 Film Street, Cinema District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-film-primary hover:bg-film-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-film-primary p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-film-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-film-accent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-film-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-film-accent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-film-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-film-accent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-film-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-film-accent transition-all duration-300"
                  placeholder="Tell us about your project or inquiry"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="bg-film-accent hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;