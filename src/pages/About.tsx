import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, Heart, Shield, Star } from 'lucide-react';

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

const AboutPage = ({ lang }: { lang: string }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-32">
      <section className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionTitle 
            title={lang === 'SLO' ? 'Moja Zgodba' : 'My Story'} 
            scriptText={lang === 'SLO' ? 'O meni' : 'About me'} 
            align="center" 
          />
          <p className="text-slate-300/80 max-w-3xl mx-auto text-lg font-light italic leading-relaxed">
            {lang === 'SLO' 
              ? '"Masažni studio Staš je nastal iz strasti do holističnega zdravja in želje po ustvarjanju prostora, kjer se čas ustavi. Verjamem, da je dotik najstarejša in najmočnejša oblika zdravljenja."'
              : '"Massage Studio Staš was born from a passion for holistic health and a desire to create a space where time stops. I believe that touch is the oldest and most powerful form of healing."'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold-gradient opacity-10 blur-2xl rounded-full"></div>
            <img 
              src="https://cz8ee99rm0kevgfc.public.blob.vercel-storage.com/STAS%CC%8C-copy-min-684x1024.jpg" 
              alt="Staš - Masažni terapevt" 
              className="w-full h-auto rounded-sm shadow-2xl relative z-10 border border-white/5"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-gold-gradient">
              {lang === 'SLO' ? 'Filozofija mojega dela' : 'My Philosophy'}
            </h3>
            <p className="text-slate-400 leading-relaxed font-light">
              {lang === 'SLO' 
                ? 'V mojem studiu se ne osredotočam le na fizično sprostitev mišic, temveč na celostno izkušnjo. Vsak obiskovalec je obravnavan individualno, s spoštovanjem in polno pozornostjo. Uporabljam le naravna, hladno stiskana olja in eterična olja najvišje kakovosti.'
                : 'In my studio, I focus not only on the physical relaxation of muscles, but on the holistic experience. Each visitor is treated individually, with respect and full attention. I use only natural, cold-pressed oils and essential oils of the highest quality.'}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-[#D4AF37] mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">{lang === 'SLO' ? 'Srčnost' : 'Heartfelt'}</h4>
                  <p className="text-xs text-slate-500">{lang === 'SLO' ? 'Delo z ljubeznijo' : 'Work with love'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#D4AF37] mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">{lang === 'SLO' ? 'Strokovnost' : 'Expertise'}</h4>
                  <p className="text-xs text-slate-500">{lang === 'SLO' ? 'Certificiran terapevt' : 'Certified therapist'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0c1115]/50 border border-slate-800 p-12 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-gradient opacity-5 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif text-gold-gradient mb-2">10+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{lang === 'SLO' ? 'Let izkušenj' : 'Years of experience'}</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-gradient mb-2">5000+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{lang === 'SLO' ? 'Zadovoljnih strank' : 'Happy clients'}</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-gradient mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{lang === 'SLO' ? 'Vrst masaž' : 'Types of massage'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
