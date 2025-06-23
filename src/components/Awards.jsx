import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Awards = ({ fullPage = false }) => {
  const navigate = useNavigate();
  const allAwards = [
  {
    id: 1,
    title: "Best Film Award",
    year: "2023",
    description: "National Film Awards for our outstanding contribution to cinema.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Best Director",
    year: "2022",
    description: "International Film Festival recognition for visionary storytelling.",
    image: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg"
  },
  {
    id: 3,
    title: "Audience Choice Award",
    year: "2021",
    description: "Voted by fans as their favorite production of the year.",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Critics' Choice",
    year: "2020",
    description: "Acknowledged by top film critics for excellence.",
    image: "https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg"
  }
];

  // Show all awards if fullPage is true, otherwise just first 3
  const awardsToShow = fullPage ? allAwards : allAwards.slice(0, 3);

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Our Awards & Recognitions
          </h2>
          <div className="w-20 h-1 bg-film-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsToShow.map((award, index) => (
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

        {!fullPage && allAwards.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/awards')}
              className="border-2 border-film-accent text-film-accent hover:bg-film-accent hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              View All Awards
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Awards;