import { useState, useEffect } from 'react'
import { Menu, X, Briefcase, GraduationCap, Phone, User, Home, Settings, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'jobs', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ]

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Junaid Ul Haque Sheikh</a>
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
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junaid-picture-0001-hQdtg0elRxxGCtsm4EZtn1I90PVxKE.png"
              alt="Junaid Ul Haque Sheikh"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Junaid Ul Haque Sheikh</h1>
            <p className="text-2xl mb-8 animate-fade-in-up animation-delay-300">Professional Portfolio</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up animation-delay-600">
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com