import { Zap, CircuitBoard, Code, Move3d } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Circuit Design",
      description: "Prototyping, Circuit layout, PCB design with kicad and soldering the final PCB."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Arduino & Raspberry Pi",
      description: "Control systems development using Arduino and Raspberry Pi for automation and IoT projects"
    },
    {
      icon: <Move3d className="w-8 h-8" />,
      title: "3D Design",
      description: "3D design and printing using Fusion 360 and 3D printer."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python/C/C# programming",
      description: "Control using arduino IDE, simulation and ML using Python."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue-600 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I love creating circuit boards, building robots and 3D printing them with all the required programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-royal-blue-100 hover:border-royal-blue-300 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-royal-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-royal-blue-600 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
