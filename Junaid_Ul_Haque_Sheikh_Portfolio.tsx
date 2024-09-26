import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, GraduationCap, Phone, User, Home, Settings, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'jobs', 'education', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">
            Junaid Ul Haque Sheikh
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-lg font-medium transition-colors duration-300 flex items-center ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <item.icon className="mr-2" size={18} />
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 px-4 text-lg font-medium text-gray-600 hover:bg-gray-100 flex items-center"
                onClick={toggleMenu}
              >
                <item.icon className="mr-2" size={18} />
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="pt-20">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junaid-picture-0001-Kadp82s1x8gLbclcl9OWqjlYwlYZj0.png"
              alt="Junaid Ul Haque Sheikh"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Junaid Ul Haque Sheikh</h1>
            <p className="text-2xl mb-8 animate-fade-in-up animation-delay-300">Professional Portfolio</p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up animation-delay-600"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junaid-picture-0001-Kadp82s1x8gLbclcl9OWqjlYwlYZj0.png"
                  alt="Junaid Ul Haque Sheikh"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg animate-float"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-600 leading-relaxed mb-4 animate-fade-in">
                  Welcome to my professional portfolio. I am Junaid Ul Haque Sheikh, a dedicated professional with expertise in various fields. My goal is to provide exceptional services and contribute to meaningful projects.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animation-delay-300">
                  With a strong background in education and a wealth of experience in diverse job roles, I bring a unique perspective to every project I undertake. My commitment to excellence and continuous learning drives me to stay at the forefront of industry trends and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Project Management'].map(
                (service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service}</h3>
                      <p className="text-gray-600 mb-4">
                        Providing expert {service.toLowerCase()} services tailored to meet your specific needs and goals.
                      </p>
                      <a
                        href="#contact"
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="jobs" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Job Experience</h2>
            <div className="max-w-3xl mx-auto">
              {[
                { title: 'Senior Developer', company: 'Tech Solutions Inc.', period: '2018-Present' },
                { title: 'Project Manager', company: 'InnovateTech', period: '2015-2018' },
                { title: 'Junior Developer', company: 'StartUp Co.', period: '2012-2015' },
              ].map((job, index) => (
                <div
                  key={index}
                  className="mb-8 border-l-4 border-blue-600 pl-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {job.company} • {job.period}
                  </p>
                  <p className="text-gray-700">
                    Responsible for leading development teams, managing projects, and implementing cutting-edge technologies.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto">
              {[
                { degree: "Master's in Computer Science", school: 'University of Technology', year: '2012' },
                { degree: "Bachelor's in Software Engineering", school: 'State University', year: '2010' },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="mb-8 bg-white rounded-lg shadow-md p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">
                    {edu.school} • {edu.year}
                  </p>
                  <p className="text-gray-700">
                    Focused on advanced algorithms, software architecture, and project management methodologies.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-3xl mx-auto">
              <form className="space-y-6 animate-fade-in">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Junaid Ul Haque Sheikh. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:junaid@example.com"
                className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
