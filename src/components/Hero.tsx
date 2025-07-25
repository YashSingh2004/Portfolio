
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Profile Photo Placeholder */}
          <div className="mb-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative">
                <div className="w-60 h-60 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <User className="w-24 h-24 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Floating icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-purple-400 animate-float" />
              <div className="absolute inset-0 h-12 w-12 text-purple-400 animate-ping opacity-20">
                <Sparkles className="h-12 w-12" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Yash Singh
            </span>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate IoT developer and an proficient software engineer 
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              crafting beautiful digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 animate-pulse-glow"
            >
              <span className="mr-2">View My Work</span>
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/Yash6012", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yash-singh-217b37251/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yash7singh3@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="group glass-light border-gray-600/50 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
