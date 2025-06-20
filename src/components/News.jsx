import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Film Announcement",
      date: "May 15, 2023",
      excerpt: "We're excited to announce our upcoming project 'Whispers in the Wind' starring acclaimed actors.",
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 2,
      title: "Film Festival Selection",
      date: "April 2, 2023",
      excerpt: "Our latest film 'The Last Sunset' has been selected for the prestigious International Film Festival.",
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 3,
      title: "Production Partnership",
      date: "March 10, 2023",
      excerpt: "Vandana Film Productions partners with Global Studios for a new slate of films.",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-film-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Latest News</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest announcements and industry news
          </p>
          <div className="w-20 h-1 bg-film-accent mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-film-secondary rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-film-accent text-sm">{item.date}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-film-accent hover:text-yellow-500 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-film-accent text-film-accent hover:bg-film-accent hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;