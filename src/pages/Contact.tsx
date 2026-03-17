import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

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

const ContactPage = ({ lang }: { lang: string }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-32">
      <section className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <SectionTitle 
            title={lang === 'SLO' ? 'Kontaktirajte Nas' : 'Contact Us'} 
            scriptText={lang === 'SLO' ? 'Kontakt' : 'Contact'} 
            align="center" 
          />
          <p className="text-slate-400 max-w-2xl mx-auto font-light italic">
            {lang === 'SLO' 
              ? 'Imate vprašanje ali želite rezervirati termin? Tukaj smo za vas.'
              : 'Have a question or want to book an appointment? We are here for you.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0c1115]/50 border border-slate-800 p-8 rounded-sm">
                <MapPin className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-white font-serif text-xl mb-2">{lang === 'SLO' ? 'Naslov' : 'Address'}</h4>
                <p className="text-slate-200 text-base font-normal">Tržaška 14<br />2000 Maribor</p>
              </div>
              <div className="bg-[#0c1115]/50 border border-slate-800 p-8 rounded-sm">
                <Phone className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-white font-serif text-xl mb-2">{lang === 'SLO' ? 'Telefon' : 'Phone'}</h4>
                <p className="text-slate-200 text-base font-normal">+386 40 859 262</p>
              </div>
              <div className="bg-[#0c1115]/50 border border-slate-800 p-8 rounded-sm">
                <Mail className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-white font-serif text-xl mb-2">Email</h4>
                <p className="text-slate-200 text-base font-normal">masaznistudiostas@gmail.com</p>
              </div>
              <div className="bg-[#0c1115]/50 border border-slate-800 p-8 rounded-sm">
                <Clock className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-white font-serif text-xl mb-2">{lang === 'SLO' ? 'Delovni čas' : 'Hours'}</h4>
                <p className="text-slate-200 text-base font-normal">
                  Pon - Pet: po naročanju, 8:00 - 20:00<br />
                  Sobota: Po dogovoru<br />
                  Nedelja in prazniki: Zaprto
                </p>
              </div>
            </div>

            <div className="pt-4 w-full h-[300px] bg-slate-800/20 rounded-sm overflow-hidden border border-slate-800 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-600 italic font-light">
                {lang === 'SLO' ? 'Zemljevid bo naložen tukaj' : 'Map will be loaded here'}
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.668580536761!2d15.6385108!3d46.5540307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f77a88e999999%3A0x8888888888888888!2sTr%C5%BEa%C5%A1ka%20cesta%2014%2C%202000%20Maribor!5e0!3m2!1ssl!2ssi!4v1700000000000!5m2!1ssl!2ssi" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="relative z-10"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#0c1115]/80 backdrop-blur-xl border border-slate-800 p-10 rounded-sm shadow-2xl">
            <h4 className="text-2xl font-serif text-gold-gradient mb-8">{lang === 'SLO' ? 'Pošljite sporočilo' : 'Send a message'}</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{lang === 'SLO' ? 'Ime' : 'Name'}</label>
                  <input type="text" className="w-full bg-[#0c1115] border border-slate-800 p-4 text-white focus:outline-none focus:border-[#D4AF37] rounded-sm" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-[#0c1115] border border-slate-800 p-4 text-white focus:outline-none focus:border-[#D4AF37] rounded-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{lang === 'SLO' ? 'Zadeva' : 'Subject'}</label>
                <input type="text" className="w-full bg-[#0c1115] border border-slate-800 p-4 text-white focus:outline-none focus:border-[#D4AF37] rounded-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{lang === 'SLO' ? 'Sporočilo' : 'Message'}</label>
                <textarea rows={5} className="w-full bg-[#0c1115] border border-slate-800 p-4 text-white focus:outline-none focus:border-[#D4AF37] rounded-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] text-black py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#FFF2CD] transition-all">
                {lang === 'SLO' ? 'Pošlji' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center gap-12 text-center">
          <h4 className="text-3xl font-serif text-gold-gradient">{lang === 'SLO' ? 'Sledite mi na družbenih omrežjih' : 'Follow me on social media'}</h4>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/masaznistudiostas" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#0c1115] border border-slate-700 flex items-center justify-center text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/masazni_studio_stas/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#0c1115] border border-slate-700 flex items-center justify-center text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
