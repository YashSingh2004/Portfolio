
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Building robust applications with React, Node.js, and modern frameworks"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design", 
      description: "Creating intuitive and beautiful user interfaces with attention to detail"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
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
