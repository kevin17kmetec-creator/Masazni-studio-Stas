import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, Check, MapPin, Activity, Heart, Leaf, Sparkles, Menu, X, ArrowUp, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigationType } from 'react-router-dom';

// Lazy Import Pages
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const PricelistPage = lazy(() => import('./pages/Pricelist'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BookingPage = lazy(() => import('./pages/Booking'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0f151a]">
    <div className="w-12 h-12 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin"></div>
  </div>
);

// Photorealistic Leaf Component using CSS masking for seamless integration
const PhotorealisticLeaf = ({ src, className, blur = 'blur-md', opacity = 'opacity-80' }: { src: string, className?: string, blur?: string, opacity?: string }) => (
  <div className={`absolute pointer-events-none select-none ${className} ${opacity} ${blur}`}>
    <img 
      src={src} 
      alt="Dekorativni tropski list" 
      className="w-full h-full object-cover"
      style={{
        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)'
      }}
      referrerPolicy="no-referrer"
      loading="lazy"
      decoding="async"
    />
  </div>
);

// Global Atmospheric Background with Light Leaks and Depth of Field Leaves
const AtmosphericBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Dynamic Light Leaks (Sunlight filtering through) - Zig-Zag Pattern */}
    <div className="absolute top-[0vh] left-[-10vw] w-[60vw] h-[800px] light-leak-1 rotate-12"></div>
    <div className="absolute top-[40vh] right-[-10vw] w-[60vw] h-[800px] light-leak-2 -rotate-12"></div>
    <div className="absolute top-[120vh] left-[-10vw] w-[60vw] h-[800px] light-leak-1 rotate-45"></div>
    <div className="absolute top-[180vh] right-[-10vw] w-[60vw] h-[800px] light-leak-2 -rotate-45"></div>
    <div className="absolute top-[260vh] left-[-10vw] w-[60vw] h-[800px] light-leak-1 rotate-12"></div>
    <div className="absolute top-[320vh] right-[-10vw] w-[60vw] h-[800px] light-leak-2 -rotate-12"></div>

    {/* Photorealistic Tropical Leaves with 3D Depth of Field - Zig-Zag Pattern */}
    {/* 1. Top Left - Palm Leaf */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" 
      className="top-[5vh] left-[-10vw] w-[500px] h-[500px] md:w-[600px] md:h-[600px] -rotate-12" 
      blur="blur-md" 
      opacity="opacity-70" 
    />
    
    {/* 2. Top Right - Monstera */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
      className="top-[35vh] right-[-10vw] w-[600px] h-[600px] md:w-[700px] md:h-[700px] rotate-[30deg]" 
      blur="blur-sm" 
      opacity="opacity-80" 
    />
    
    {/* 3. Center Left - Tropical Fern */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop" 
      className="top-[110vh] left-[-10vw] w-[700px] h-[700px] md:w-[800px] md:h-[800px] rotate-[15deg]" 
      blur="blur-lg" 
      opacity="opacity-60" 
    />
    
    {/* 4. Center Right - Areca Palm */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop" 
      className="top-[170vh] right-[-10vw] w-[600px] h-[600px] md:w-[700px] md:h-[700px] -rotate-[20deg]" 
      blur="blur-md" 
      opacity="opacity-70" 
    />
    
    {/* 5. Bottom Left - Banana Leaf */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop" 
      className="top-[250vh] left-[-10vw] w-[500px] h-[500px] md:w-[600px] md:h-[600px] rotate-[45deg]" 
      blur="blur-sm" 
      opacity="opacity-80" 
    />

    {/* 6. Bottom Right - Monstera */}
    <PhotorealisticLeaf 
      src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
      className="top-[310vh] right-[-10vw] w-[600px] h-[600px] md:w-[700px] md:h-[700px] -rotate-[30deg]" 
      blur="blur-md" 
      opacity="opacity-70" 
    />
  </div>
);

// Custom Logo Component matching the reference image exactly
const Logo = () => (
  <div className="flex flex-col items-center justify-center">
    <img 
      src="https://cz8ee99rm0kevgfc.public.blob.vercel-storage.com/Masazni10-1-149x89.png" 
      alt="Masažni studio Staš Logo" 
      className="w-[149px] h-auto"
      style={{ imageRendering: '-webkit-optimize-contrast' }}
      referrerPolicy="no-referrer"
    />
  </div>
);

const SectionTitle = ({ title, scriptText, align = 'left' }: { title: string, scriptText: string, align?: 'left' | 'right' | 'center' }) => (
  <div className={`relative mb-8 ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className={`absolute -top-12 ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} text-7xl md:text-9xl font-script text-white/[0.03] select-none z-0 whitespace-nowrap`}>
      {scriptText}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif text-gold-gradient relative z-10 pt-4 tracking-wide">
      {title}
    </h2>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH (new navigation)
    // POP (back/forward) should use browser's scroll restoration
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

const Navbar = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="relative z-50 pt-6">
      <div className="absolute top-6 right-8 hidden md:flex space-x-2 text-xs font-medium z-50">
        <button onClick={() => setLang('SLO')} className={`${lang === 'SLO' ? 'text-[#D4AF37]' : 'text-slate-400'} hover:text-[#D4AF37] transition-colors`}>SLO</button>
        <span className="text-slate-600">|</span>
        <button onClick={() => setLang('ENG')} className={`${lang === 'ENG' ? 'text-[#D4AF37]' : 'text-slate-400'} hover:text-[#D4AF37] transition-colors`}>ENG</button>
      </div>

      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] text-slate-300 w-1/3 justify-end">
          <Link to="/o-nas" className="hover:text-[#D4AF37] transition-colors duration-300">{lang === 'SLO' ? 'O meni' : 'About me'}</Link>
          <Link to="/storitve" className="hover:text-[#D4AF37] transition-colors duration-300">{lang === 'SLO' ? 'Storitve' : 'Services'}</Link>
        </div>
        
        <div className="flex justify-center w-1/3">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] text-slate-300 w-1/3 justify-start items-center">
          <Link to="/cenik" className="hover:text-[#D4AF37] transition-colors duration-300">{lang === 'SLO' ? 'Cenik' : 'Pricelist'}</Link>
          <Link to="/kontakt" className="hover:text-[#D4AF37] transition-colors duration-300">{lang === 'SLO' ? 'Kontakt' : 'Contact'}</Link>
          <Link to="/rezervacija" className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 hover:bg-[#D4AF37] hover:text-black transition-all duration-300">{lang === 'SLO' ? 'Rezerviraj' : 'Book'}</Link>
        </div>
        
        <div className="md:hidden w-6"></div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1e293b]/95 backdrop-blur-md border-b border-slate-700/50 py-6 px-6 flex flex-col space-y-6 items-center"
          >
            <div className="flex space-x-4 text-sm font-medium mb-4">
              <button onClick={() => setLang('SLO')} className={`${lang === 'SLO' ? 'text-[#D4AF37]' : 'text-slate-400'}`}>SLO</button>
              <span className="text-slate-600">|</span>
              <button onClick={() => setLang('ENG')} className={`${lang === 'ENG' ? 'text-[#D4AF37]' : 'text-slate-400'}`}>ENG</button>
            </div>
            <Link to="/o-nas" className="text-slate-300 hover:text-[#D4AF37] uppercase tracking-[0.2em] text-sm">{lang === 'SLO' ? 'O meni' : 'About me'}</Link>
            <Link to="/storitve" className="text-slate-300 hover:text-[#D4AF37] uppercase tracking-[0.2em] text-sm">{lang === 'SLO' ? 'Storitve' : 'Services'}</Link>
            <Link to="/cenik" className="text-slate-300 hover:text-[#D4AF37] uppercase tracking-[0.2em] text-sm">{lang === 'SLO' ? 'Cenik' : 'Pricelist'}</Link>
            <Link to="/kontakt" className="text-slate-300 hover:text-[#D4AF37] uppercase tracking-[0.2em] text-sm">{lang === 'SLO' ? 'Kontakt' : 'Contact'}</Link>
            <Link to="/rezervacija" className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 uppercase tracking-[0.2em] text-xs mt-4">{lang === 'SLO' ? 'Rezerviraj' : 'Book'}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



const Footer = ({ lang }: { lang: string }) => (
  <footer id="kontakt" className="bg-[#0f172a] pt-24 pb-12 border-t border-slate-800/50 relative z-10">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-6 origin-left">
          <Logo />
        </div>
        <p className="text-slate-300 text-base leading-relaxed font-light italic max-w-xs mb-8">
          {lang === 'SLO' 
            ? '"Vaše zatočišče za popolno sprostitev in regeneracijo. Nudim vrhunske masažne storitve v ekskluzivnem ambientu."'
            : '"Your sanctuary for complete relaxation and regeneration. I offer premium massage services in an exclusive ambiance."'}
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/masaznistudiostas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0c1115] border border-slate-700 flex items-center justify-center text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/masazni_studio_stas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0c1115] border border-slate-700 flex items-center justify-center text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-gold-gradient font-serif text-xl mb-8">{lang === 'SLO' ? 'Kontakt' : 'Contact'}</h4>
        <div className="space-y-5 text-slate-300 text-base font-light">
          <div className="flex items-center hover:text-[#D4AF37] transition-colors cursor-pointer">
            <MapPin className="w-5 h-5 mr-4 text-[#D4AF37]" />
            Tržaška 14, 2000 Maribor
          </div>
          <div className="flex items-center hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Phone className="w-5 h-5 mr-4 text-[#D4AF37]" />
            +386 40 859 262
          </div>
          <div className="flex items-center hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Mail className="w-5 h-5 mr-4 text-[#D4AF37]" />
            masaznistudiostas@gmail.com
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-gold-gradient font-serif text-xl mb-8">{lang === 'SLO' ? 'Delovni čas' : 'Working Hours'}</h4>
        <div className="space-y-4 text-slate-300 text-base font-light w-full max-w-xs">
          <div className="flex justify-between border-b border-slate-800/50 pb-2">
            <span>{lang === 'SLO' ? 'Ponedeljek - Petek' : 'Monday - Friday'}</span>
            <span className="text-white text-right">po naročanju<br/>08:00 - 20:00</span>
          </div>
          <div className="flex justify-between border-b border-slate-800/50 pb-2">
            <span>{lang === 'SLO' ? 'Sobota' : 'Saturday'}</span>
            <span className="text-white">{lang === 'SLO' ? 'Po dogovoru' : 'By appointment'}</span>
          </div>
          <div className="flex justify-between text-slate-400 pt-2">
            <span>{lang === 'SLO' ? 'Nedelja in prazniki' : 'Sundays & Holidays'}</span>
            <span>{lang === 'SLO' ? 'Zaprto' : 'Closed'}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-800/50 flex flex-col items-center space-y-4 text-slate-400 text-xs font-light">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 uppercase tracking-widest text-center">
        <span>Staš Trunk s.p.</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/splosni-pogoji" className="hover:text-[#D4AF37] transition-colors">{lang === 'SLO' ? 'Splošni pogoji' : 'Terms & Conditions'}</Link>
        <Link to="/pravilnik-o-zasebnosti" className="hover:text-[#D4AF37] transition-colors">{lang === 'SLO' ? 'Pravilnik o zasebnosti' : 'Privacy Policy'}</Link>
      </div>
      <div className="uppercase tracking-widest pt-4 text-center">
        &copy; {new Date().getFullYear()} Masažni studio Staš. {lang === 'SLO' ? 'Vse pravice pridržane.' : 'All rights reserved.'}
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#D4AF37] text-black rounded-full shadow-lg hover:bg-[#FFF2CD] transition-colors duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const CookieConsent = ({ lang }: { lang: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    necessary: true,
    analytical: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveSettings = (newSettings: typeof settings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytical: true, marketing: true };
    saveSettings(allAccepted);
  };

  const declineAll = () => {
    const allDeclined = { necessary: true, analytical: false, marketing: false };
    saveSettings(allDeclined);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0c1115] border-t border-[#D4AF37]/30 p-4 md:p-8 z-[100] shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-slate-300 text-sm md:text-base leading-relaxed">
              <p className="font-serif text-white text-lg mb-2">{lang === 'SLO' ? 'Vaša zasebnost nam je pomembna' : 'Your privacy matters to us'}</p>
              {lang === 'SLO' 
                ? 'Ta spletna stran uporablja piškotke za zagotavljanje boljše uporabniške izkušnje, analitiko obiska in personalizacijo oglasov. Izberite svoje nastavitve.'
                : 'This website uses cookies to ensure you get the best experience on our website, for analytics and personalized ads. Choose your settings.'}
            </div>
            <div className="flex flex-wrap justify-center gap-4 flex-shrink-0">
              <button onClick={() => setShowSettings(true)} className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors rounded-sm text-xs uppercase tracking-widest">
                {lang === 'SLO' ? 'Nastavitve' : 'Settings'}
              </button>
              <button onClick={declineAll} className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors rounded-sm text-xs uppercase tracking-widest">
                {lang === 'SLO' ? 'Samo nujni' : 'Necessary only'}
              </button>
              <button onClick={acceptAll} className="px-8 py-2.5 bg-[#D4AF37] text-black hover:bg-[#FFF2CD] transition-colors rounded-sm text-xs uppercase tracking-widest font-bold">
                {lang === 'SLO' ? 'Sprejmi vse' : 'Accept all'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h4 className="text-2xl font-serif text-gold-gradient">{lang === 'SLO' ? 'Nastavitve piškotkov' : 'Cookie Settings'}</h4>
              <button onClick={() => setShowSettings(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 p-6 rounded-sm border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="text-white font-medium uppercase tracking-wider text-sm">{lang === 'SLO' ? 'Nujni' : 'Necessary'}</h5>
                  <div className="w-10 h-5 bg-[#D4AF37]/20 rounded-full relative">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === 'SLO' 
                    ? 'Ti piškotki so nujni za delovanje spletne strani in jih ni mogoče izklopiti.'
                    : 'These cookies are essential for the website to function and cannot be switched off.'}
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-sm border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="text-white font-medium uppercase tracking-wider text-sm">{lang === 'SLO' ? 'Analitični' : 'Analytical'}</h5>
                  <button 
                    onClick={() => setSettings(s => ({...s, analytical: !s.analytical}))}
                    className={`w-10 h-5 rounded-full relative transition-colors ${settings.analytical ? 'bg-[#D4AF37]' : 'bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${settings.analytical ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === 'SLO' 
                    ? 'Pomagajo nam razumeti, kako obiskovalci uporabljajo spletno stran, da jo lahko izboljšamo.'
                    : 'They help us understand how visitors interact with the website, so we can improve it.'}
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-sm border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="text-white font-medium uppercase tracking-wider text-sm">{lang === 'SLO' ? 'Marketing' : 'Marketing'}</h5>
                  <button 
                    onClick={() => setSettings(s => ({...s, marketing: !s.marketing}))}
                    className={`w-10 h-5 rounded-full relative transition-colors ${settings.marketing ? 'bg-[#D4AF37]' : 'bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${settings.marketing ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === 'SLO' 
                    ? 'Uporabljajo se za sledenje obiskovalcem po spletnih straneh za prikazovanje relevantnih oglasov.'
                    : 'Used to track visitors across websites to display relevant and engaging ads.'}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button onClick={() => setShowSettings(false)} className="px-6 py-2 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors rounded-sm text-xs uppercase tracking-widest">
                {lang === 'SLO' ? 'Nazaj' : 'Back'}
              </button>
              <button onClick={() => saveSettings(settings)} className="px-8 py-2 bg-[#D4AF37] text-black hover:bg-[#FFF2CD] transition-colors rounded-sm text-xs uppercase tracking-widest font-bold">
                {lang === 'SLO' ? 'Shrani nastavitve' : 'Save settings'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('SLO');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0f151a] text-slate-200 font-sans relative overflow-hidden selection:bg-[#D4AF37]/30 selection:text-white">
        {/* Global Background */}
        <div className="absolute inset-0 bg-[#0f151a] -z-30" />
        
        {/* Global Atmospheric Background with Depth of Field Leaves */}
        <AtmosphericBackground />

        {/* Main Content Wrapper - Ensures content stays above background */}
        <div className="relative z-10">
          <Navbar lang={lang} setLang={setLang} />
          
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage lang={lang} />} />
                <Route path="/o-nas" element={<AboutPage lang={lang} />} />
                <Route path="/storitve" element={<ServicesPage lang={lang} />} />
                <Route path="/cenik" element={<PricelistPage lang={lang} />} />
                <Route path="/kontakt" element={<ContactPage lang={lang} />} />
                <Route path="/rezervacija" element={<BookingPage lang={lang} />} />
                <Route path="/storitev/:id" element={<ServiceDetail lang={lang} />} />
                <Route path="/pravilnik-o-zasebnosti" element={<PrivacyPolicy lang={lang} />} />
                <Route path="/splosni-pogoji" element={<Terms lang={lang} />} />
              </Routes>
            </Suspense>
          </main>

          <Footer lang={lang} />
        </div>

        <BackToTop />
        <CookieConsent lang={lang} />
      </div>
    </Router>
  );
}
