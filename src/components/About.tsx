
import React from 'react';
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Building robust applications with React, Node.js, and modern frameworks",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design", 
      description: "Creating intuitive and beautiful user interfaces with attention to detail",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and user experience",
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-2 mb-6 glass-light">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Turning Ideas Into{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            I'm a dedicated developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>

          {/* Stats section */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-6 glass-light rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group glass backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 blur-xl"></div>
              
              <div className="relative z-10">
                <div className={`text-purple-400 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${skill.gradient} group-hover:bg-clip-text transition-all duration-500 transform group-hover:scale-110`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 glass-light rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-slate-800"></div>
              ))}
            </div>
            <span className="text-gray-300">Ready to work together?</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
