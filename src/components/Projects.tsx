import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 128, views: "2.1k" }
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80", 
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 89, views: "1.8k" }
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 64, views: "1.2k" }
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 92, views: "1.5k" }
    },
    {
      title: "Learning Management System", 
      description: "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Redux", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 156, views: "3.2k" }
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 73, views: "980" }
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-2 mb-6 glass-light">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Star className="h-6 w-6 text-yellow-400 mr-2" />
            Featured Work
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group glass backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="glass-light rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs text-white">{project.stats.stars}</span>
                    </div>
                    <div className="glass-light rounded-full px-3 py-1 flex items-center space-x-1">
                      <Eye className="h-3 w-3 text-blue-400" />
                      <span className="text-xs text-white">{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <div className="flex space-x-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass-light border-purple-400/50 text-white hover:bg-purple-500/20 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass-light border-pink-400/50 text-white hover:bg-pink-500/20 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowRight className={`h-5 w-5 text-gray-400 transition-all duration-300 ${hoveredProject === index ? 'text-purple-400 transform translate-x-1' : ''}`} />
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index + featuredProjects.length}
                className="group glass backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <div className="glass-light rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs text-white">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300"
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="group glass-light border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
