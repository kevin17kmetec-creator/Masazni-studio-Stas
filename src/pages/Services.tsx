import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Clock, Sparkles } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { servicesList as massagesList, bodyShapingList } from '../constants/services';

const SectionTitle = ({ title, scriptText, align = 'left' }: { title: string, scriptText: string, align?: 'left' | 'right' | 'center' }) => (
  <div className={`relative mb-12 ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className={`absolute -top-12 ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} text-7xl md:text-9xl font-script text-white/[0.03] select-none z-0 whitespace-nowrap`}>
      {scriptText}
    </span>
    <h2 className="text-4xl md:text-6xl font-serif text-gold-gradient relative z-10 pt-4 tracking-wide">
      {title}
    </h2>
  </div>
);





const ServicesPage = ({ lang }: { lang: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('kat');
  
  const [activeCategory, setActiveCategory] = React.useState<'massages' | 'bodyShaping'>(
    categoryParam === 'preoblikovanje' ? 'bodyShaping' : 'massages'
  );

  React.useEffect(() => {
    if (categoryParam === 'preoblikovanje') {
      setActiveCategory('bodyShaping');
    } else {
      setActiveCategory('massages');
    }

    // Scroll to hash if present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500); // Small delay to allow content to render
    }
  }, [categoryParam]);

  const currentList = activeCategory === 'massages' ? massagesList : bodyShapingList;

  const handleCategoryChange = (cat: 'massages' | 'bodyShaping') => {
    setActiveCategory(cat);
    setSearchParams({ kat: cat === 'massages' ? 'masaze' : 'preoblikovanje' });
  };

  return (
    <div className="pt-20 pb-32">
      <section className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <SectionTitle 
            title={lang === 'SLO' ? 'Naše Storitve' : 'Our Services'} 
            scriptText={lang === 'SLO' ? 'Storitve' : 'Services'} 
            align="center" 
          />
          <p className="text-slate-400 max-w-2xl mx-auto font-light italic mb-12">
            {lang === 'SLO' 
              ? 'Izberite terapijo, ki najbolj ustreza vašim potrebam. Vsaka storitev je prilagojena vašim željam.'
              : 'Choose the therapy that best suits your needs. Each service is tailored to your wishes.'}
          </p>

          {/* Category Toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-[#0c1115] p-1 border border-slate-800 rounded-sm">
              <button 
                onClick={() => handleCategoryChange('massages')}
                className={`px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === 'massages' ? 'bg-[#D4AF37] text-black font-medium' : 'text-slate-400 hover:text-white'}`}
              >
                {lang === 'SLO' ? 'Masaže' : 'Massages'}
              </button>
              <button 
                onClick={() => handleCategoryChange('bodyShaping')}
                className={`px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === 'bodyShaping' ? 'bg-[#D4AF37] text-black font-medium' : 'text-slate-400 hover:text-white'}`}
              >
                {lang === 'SLO' ? 'Preoblikovanje telesa' : 'Body Shaping'}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-16"
            >
              {currentList.map((srv, index) => (
                <div 
                  key={srv.id}
                  id={srv.id}
                  className={`bg-[#0c1115]/60 backdrop-blur-md border border-slate-800 rounded-sm overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl md:h-[420px]`}
                >
                  <div className="md:w-2/5 h-64 md:h-full overflow-hidden relative">
                    <img 
                      src={srv.img} 
                      alt={srv.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1115]/80 md:from-transparent to-transparent"></div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-serif text-gold-gradient mb-2">{lang === 'SLO' ? srv.title : srv.title_en}</h3>
                        <div className="flex items-center text-slate-500 text-xs space-x-4 uppercase tracking-widest">
                          <div className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                            {srv.duration}
                          </div>
                          <div className="flex items-center">
                            <Sparkles className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                            {lang === 'SLO' ? 'Premium oprema' : 'Premium equipment'}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-serif text-white border-b border-[#D4AF37]/30 pb-1 whitespace-nowrap ml-4">{srv.price}</div>
                    </div>
                    
                    <p className="text-white leading-relaxed font-medium mb-8 flex-grow">
                      {srv.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                      {srv.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-slate-300 text-sm">
                          <Check className="w-4 h-4 text-[#D4AF37] mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-start mt-auto">
                      <Link 
                        to={`/storitev/${srv.id}`} 
                        className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
                      >
                        {lang === 'SLO' ? 'Preberi več' : 'Read more'}
                      </Link>
                      <Link 
                        to="/rezervacija" 
                        className="bg-[#D4AF37] text-black px-8 py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#FFF2CD] transition-all duration-500"
                      >
                        {lang === 'SLO' ? 'Rezerviraj termin' : 'Book an appointment'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
