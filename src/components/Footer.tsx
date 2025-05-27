import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Engineering Student</h3>
            <p className="text-royal-blue-100 mb-4">
              Passionate about designing innovative and efficient solutions. FOR BETTER ROBOTS!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mjb2607"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-royal-blue-500 rounded-full hover:bg-royal-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://lb.linkedin.com/in/mohamad-bachir-a909ba247"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-royal-blue-500 rounded-full hover:bg-royal-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mohamadbachir2607@outlook.com"
                className="p-2 bg-royal-blue-500 rounded-full hover:bg-royal-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-royal-blue-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-royal-blue-100 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-royal-blue-100 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-royal-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-royal-blue-100">
              <p>mohamadbachir2607@outlook.com</p>
              <p>+961 81813933</p>
              <p>Lebanon</p>
            </div>
          </div>
        </div>

        <div className="border-t border-royal-blue-500 mt-8 pt-8 text-center">
          <p className="text-royal-blue-100 flex items-center justify-center space-x-1">
            <span>© 2025 Mohamad Bachir</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
