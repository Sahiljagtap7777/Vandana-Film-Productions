import { motion } from 'framer-motion';

const Awards = ({ fullPage = false }) => {
  const awards = [
    {
      id: 1,
      title: "Best Film Award",
      year: "2023",
      description: "National Film Awards for our outstanding contribution to cinema.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "Best Director",
      year: "2022",
      description: "International Film Festival recognition for visionary storytelling.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Audience Choice",
      year: "2021",
      description: "Voted by fans as their favorite production of the year.",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <section className={`py-20 ${fullPage ? 'min-h-screen' : ''} bg-film-secondary`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Our Awards & Recognitions</h2>
          <div className="w-20 h-1 bg-film-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-film-primary rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={award.image} 
                  alt={award.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{award.title}</h3>
                  <span className="text-film-accent font-bold">{award.year}</span>
                </div>
                <p className="text-gray-300">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;