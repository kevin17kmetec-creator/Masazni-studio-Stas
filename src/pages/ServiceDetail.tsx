import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Sparkles, Check, Calendar } from 'lucide-react';
import { servicesList, bodyShapingList } from '../constants/services';

const ServiceDetail = ({ lang }: { lang: string }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = [...servicesList, ...bodyShapingList].find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-32 text-center">
        <h2 className="text-2xl text-white mb-8">{lang === 'SLO' ? 'Storitev ni bila najdena' : 'Service not found'}</h2>
        <Link to="/" className="text-[#D4AF37] hover:underline uppercase tracking-widest text-xs">
          {lang === 'SLO' ? 'Nazaj na prvo stran' : 'Back to home'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-slate-400 hover:text-[#D4AF37] transition-colors mb-12 uppercase tracking-[0.2em] text-[10px] bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {lang === 'SLO' ? 'Nazaj' : 'Back'}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-gradient p-[1px] rounded-sm -z-10 hidden md:block">
              <div className="w-full h-full bg-[#0f151a] rounded-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-serif text-gold-gradient mb-6 leading-tight">
                {lang === 'SLO' ? service.title : service.title_en}
              </h1>
              <div className="flex flex-wrap gap-6 text-slate-400 text-xs uppercase tracking-widest border-b border-slate-800 pb-8">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  {service.duration}
                </div>
                <div className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  {lang === 'SLO' ? 'Premium tretma' : 'Premium treatment'}
                </div>
                <div className="text-xl font-serif text-white ml-auto">{service.price}</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif text-white">{lang === 'SLO' ? 'O tretmaju' : 'About treatment'}</h3>
              <div className="space-y-4">
                {(lang === 'SLO' ? service.long_desc : service.long_desc_en).split('\n').map((paragraph, index) => {
                  if (!paragraph.trim()) return null;
                  
                  // Handle bold text **text**
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={index} className="text-white leading-relaxed text-lg font-normal">
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="text-gold-gradient font-serif">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif text-white">{lang === 'SLO' ? 'Ključne prednosti' : 'Key benefits'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center text-slate-300 bg-slate-900/40 p-4 border border-slate-800/50 rounded-sm">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link 
                to="/rezervacija" 
                className="inline-flex items-center bg-[#D4AF37] text-black px-12 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#FFF2CD] transition-all duration-300 shadow-xl"
              >
                <Calendar className="w-4 h-4 mr-3" />
                {lang === 'SLO' ? 'Rezerviraj svoj termin' : 'Book your appointment'}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
