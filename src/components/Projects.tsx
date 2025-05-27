import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "3D Printed Robot Arm",
      description: "3D designed and printed robotic arm controlled by arduino and inverse kinematics applied with python.",
      technologies: ["Fusion360", "3D print", "Arduino", "Python"],
      githubUrl: "https://github.com/mjb2607",
      liveUrl: "https://example.com",
      image: "/robot arm.jpg"
    },
    {
      title: "Arduino Clock",
      description: "Arduino powered alarm clock with multiple functions.",
      technologies: ["arduino", "PCB Design", "Soldering"],
      githubUrl: "https://github.com/mjb2607",
      liveUrl: "https://example.com",
      image: "/Clock_Image.jpg"
    },
    {
      title: "3D printed laptop cooler",
      description: "3D printed laptop cooler with mounted, speed controled, fans that dropped laptop temperatures by 6 degrees.",
      technologies: ["3D print", "Variable speed controller"],
      githubUrl: "https://github.com/mjb2607",
      liveUrl: "https://example.com",
      image: "/Laptop_Cooler.jpg"
    },
    {
      title: "Custom power boards",
      description: "Custum high AMP board for lighting application.",
      technologies: ["Circuit design", "PCB Design", "Soldering"],
      githubUrl: "https://github.com/mjb2607",
      liveUrl: "https://example.com",
      image: "/Power_Board.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-royal-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my engineering projects that showcase my experience in CAD design, PCB creation and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-royal-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-royal-blue-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-royal-blue-100 text-royal-blue-600 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-royal-blue-600 text-white rounded-lg hover:bg-royal-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-royal-blue-600 text-royal-blue-600 rounded-lg hover:bg-royal-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
