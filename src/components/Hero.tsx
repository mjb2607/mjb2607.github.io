import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-royal-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-royal-blue-600 mb-6">
            Mohamad Bachir
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Electrical engineering student aiming to create more powerful, precise and efficient control and power systems.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/mjb2607"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-royal-blue-600 text-white rounded-full hover:bg-royal-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://lb.linkedin.com/in/mohamad-bachir-a909ba247"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-royal-blue-600 text-white rounded-full hover:bg-royal-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohamadbachir2607@outlook.com"
              className="p-3 bg-royal-blue-600 text-white rounded-full hover:bg-royal-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="/Mohamad_Bachir_CV.pdf"
            download
            className="inline-flex items-center px-8 py-3 bg-royal-blue-600 text-white font-semibold rounded-lg hover:bg-royal-blue-700 transition-all duration-300 hover:scale-105"
          >
            Download CV
            <ArrowDown className="ml-2" size={20} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-royal-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
