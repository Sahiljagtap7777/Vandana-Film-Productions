import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import tumHoToh from "../assets/images/movies/image.png";
import silentEcho from "../assets/images/movies/The-Silent-Echo.jpg.jpg";
import chasingLight from "../assets/images/movies/chasing.webp";

const movies = [
  {
    title: "Tum Ho Toh",
    description: "An emotional journey of love and longing.",
    image:"https://m.media-amazon.com/images/M/MV5BYmYxNzI2ZTktNmNhMi00ZDEyLWE4ODctNDM0ZTk0NjVjYWNmXkEyXkFqcGc@._V1_.jpg",
    year: "2024",
    trailerUrl: "https://youtube.com/your-trailer-link"
  },
  {
    title: "Silent Echo",
    description: "A thriller that echoes through time.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2025",
    trailerUrl: "https://youtube.com/another-trailer"
  },
  {
    title: "Chasing Light",
    description: "A visually stunning tale of hope.",
    image: "https://i0.wp.com/thehollywoodhandle.co/wp-content/uploads/2025/01/b8c0019a-be1e-4dd3-8518-de4d6b02f127-1.jpg?resize=900%2C497&ssl=1",
    year: "2025",
    trailerUrl: "https://youtube.com/yet-another-trailer"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = movies.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const movie = movies[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={movie.image}
          src={movie.image}
          alt={movie.title}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {movie.title} <span className="text-yellow-400">({movie.year})</span>
        </motion.h1>
        <motion.p
          className="text-white text-xl max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {movie.description}
        </motion.p>
        <motion.a
          href={movie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Watch Trailer
        </motion.a>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
      >
        <FiChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
      >
        <FiChevronRight size={30} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
