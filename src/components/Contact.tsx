
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-2 mb-6 glass-light">
            <MessageCircle className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Contact</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, creative projects, or just having a chat 
            about technology and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-light rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-white text-lg hover:text-purple-400 transition-colors duration-300 group-hover:translate-x-1 inline-block"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div>
                    <p className="text-green-400 font-medium">Available for new projects</p>
                    <p className="text-gray-400 text-sm">Usually responds within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass backdrop-blur-sm border-slate-700/50 overflow-hidden">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 glass border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 glass border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea 
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-4 glass border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>© 2024 Alex Johnson.</span>
              <span className="hidden sm:inline">Built with React and Tailwind CSS.</span>
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Last updated: Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
