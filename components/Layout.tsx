
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Phone, Mail, MapPin, MessageCircle, Sun, Moon, Globe, ChevronDown, Check } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { VisitorCounter } from './VisitorCounter';
import { BackToTop } from './BackToTop';
import { useAppContext } from '../context/AppContext';
import { languages } from '../utils/translations';

const navItems = [
  { label: 'nav_home', path: '/' },
  { label: 'nav_services', path: '/services' },
  { label: 'nav_wiral', path: '/wiral' },
  { label: 'nav_solutions', path: '/solutions' },
  { label: 'nav_pricing', path: '/pricing' },
  { label: 'nav_about', path: '/about' },
  { label: 'nav_contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [logoRotation, setLogoRotation] = useState({ x: 0, y: 0 });
  
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleLogoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotX = (mouseY / (rect.height / 2)) * -20;
    const rotY = (mouseX / (rect.width / 2)) * 20;

    setLogoRotation({ x: rotX, y: rotY });
  };

  const handleLogoMouseLeave = () => {
    setLogoRotation({ x: 0, y: 0 });
  };

  const whatsappMessage = encodeURIComponent("Hello Myyapp team! I'm interested in your services. How can you help me grow my business?");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Detached Navbar - Always Light even in Dark Mode */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white py-4 shadow-sm'
        } border-slate-200/60`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with 3D Mouse Effect */}
            <div 
              className="flex items-center space-x-2 cursor-pointer z-50 relative group" 
              onClick={() => navigate('/')}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
              style={{ perspective: '1000px' }}
            >
              <div 
                className="flex items-center space-x-2 transition-transform duration-200 ease-out"
                style={{ 
                  transform: `rotateX(${logoRotation.x}deg) rotateY(${logoRotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg shadow-blue-500/20 flex-shrink-0 transition-shadow duration-300 group-hover:shadow-blue-500/40"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <span 
                  className="text-2xl font-bold tracking-tight text-slate-900"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  Myyapp
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-500 ${
                      isActive 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-slate-600'
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  aria-expanded={isLangMenuOpen}
                  aria-haspopup="true"
                  aria-label="Select Language"
                  className="flex items-center gap-1 text-sm font-medium px-2 py-1 rounded transition-colors text-slate-700 hover:text-blue-600"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)}></div>
                    <div 
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-20 max-h-64 overflow-y-auto animate-fadeIn"
                      role="menu"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          role="menuitem"
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between ${
                            language === lang.code ? 'text-blue-600 font-bold bg-blue-50' : 'text-slate-700'
                          }`}
                        >
                          <span>{lang.name}</span>
                          <div className="flex items-center gap-2">
                            {language === lang.code && <Check className="h-3 w-3" />}
                            <span className="text-xs opacity-50 border border-slate-200 px-1 rounded">{lang.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full transition-all bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>

              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-blue-600/20 hover:scale-105 transition-all duration-300"
              >
                {t('cta_consult').split(' ')[0] || "Start"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
               {/* Mobile Theme Toggle */}
               <button 
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-slate-100 text-slate-700"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md transition-colors text-slate-900"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fadeIn">
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}
              
              <div className="px-3 py-2">
                <label className="text-xs text-slate-500 uppercase font-bold mb-2 block">Language</label>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                      }}
                      className={`text-xs p-2 rounded border text-center transition-colors ${
                         language === lang.code 
                         ? 'bg-blue-600 text-white border-blue-600' 
                         : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                    navigate('/contact');
                    setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-center font-medium mt-4 hover:bg-blue-700 transition-colors"
              >
                {t('cta_consult')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with padding for detached header */}
      <main className="flex-grow pt-[72px]">
        {children}
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/919092418710?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:shadow-green-500/40 flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
          Chat on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-16 border-t border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Myyapp</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Empowering Indian businesses with cutting-edge websites, apps, and viral marketing strategies. Build, Grow, and go Viral with us.
              </p>
              
              {/* Visitor Counter in Footer */}
              <div className="mt-8">
                <VisitorCounter 
                  className="bg-slate-800 border-slate-700 text-slate-300" 
                  showIcon={true}
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6">{t('nav_services')}</h3>
              <ul className="space-y-4">
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Web Development</NavLink></li>
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Mobile Apps</NavLink></li>
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Digital Marketing</NavLink></li>
                <li><NavLink to="/wiral" className="hover:text-blue-400 transition-colors">{t('nav_wiral')}</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><NavLink to="/about" className="hover:text-blue-400 transition-colors">{t('nav_about')}</NavLink></li>
                <li><NavLink to="/solutions" className="hover:text-blue-400 transition-colors">{t('nav_solutions')}</NavLink></li>
                <li><NavLink to="/pricing" className="hover:text-blue-400 transition-colors">{t('nav_pricing')}</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-blue-400 transition-colors">{t('nav_contact')}</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+91 90924 18710</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>support@myyapp.in</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>BHIVE Workspace, 148,<br/>HSR Layout, Bangalore - 560102</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Myyapp Technologies Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
