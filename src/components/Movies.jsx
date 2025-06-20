import { motion } from 'framer-motion';

const Movies = ({ fullPage = false }) => {
  const movies = [
    {
      id: 1,
      title: "The Last Sunset",
      year: "2023",
      genre: "Drama",
      description: "A poignant story about love and loss set against the backdrop of war.",
      image: "https://via.placeholder.com/300x450"
    },
    {
      id: 2,
      title: "Midnight Whispers",
      year: "2022",
      genre: "Thriller",
      description: "A psychological thriller that keeps you guessing until the very end.",
      image: "https://via.placeholder.com/300x450"
    },
    {
      id: 3,
      title: "Eternal Bonds",
      year: "2021",
      genre: "Romance",
      description: "A timeless love story that transcends generations.",
      image: "https://via.placeholder.com/300x450"
    }
  ];

  return (
    <section className={`py-20 ${fullPage ? 'min-h-screen' : ''} bg-film-primary`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Our Films</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of critically acclaimed and audience favorite films
          </p>
          <div className="w-20 h-1 bg-film-accent mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-lg shadow-2xl"
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>
                </div>
                <p className="text-gray-200 mb-4">{movie.description}</p>
                <button className="self-start bg-film-accent hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!fullPage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="border-2 border-film-accent text-film-accent hover:bg-film-accent hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View All Films
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Movies;