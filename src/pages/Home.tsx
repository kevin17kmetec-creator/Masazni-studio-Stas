import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const testimonials = [
  {
    id: 1,
    name: 'Ana M.',
    role: 'Redna stranka',
    role_en: 'Regular client',
    text: 'Masažni studio Staš je zame postal nepogrešljiv del tedna. Po dolgih urah za računalnikom je terapevtska masaža edina stvar, ki mi zares pomaga pri bolečinah v vratu. Ambient je čudovit in pomirjujoč.',
    text_en: 'Massage studio Staš has become an indispensable part of my week. After long hours at the computer, therapeutic massage is the only thing that really helps with my neck pain. The ambiance is beautiful and calming.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marko K.',
    role: 'Športnik',
    role_en: 'Athlete',
    text: 'Kot rekreativni tekač sem preizkusil že veliko masaž, a športna masaža pri Stašu je na povsem drugem nivoju. Strokovnost in poznavanje anatomije se čuti pri vsakem gibu. Toplo priporočam vsem športnikom.',
    text_en: 'As a recreational runner, I have tried many massages, but the sports massage at Staš is on a completely different level. Professionalism and knowledge of anatomy can be felt in every movement. Highly recommend to all athletes.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena V.',
    role: 'Podjetnica',
    role_en: 'Entrepreneur',
    text: 'Aroma masaža je bila točno to, kar sem potrebovala za popoln odklop. Vonj eteričnih olj in nežni gibi so me popolnoma sprostili. Odšla sem kot prerojena. Komaj čakam na naslednji obisk!',
    text_en: 'Aroma massage was exactly what I needed for a complete disconnect. The scent of essential oils and gentle movements completely relaxed me. I left feeling reborn. Can\'t wait for my next visit!',
    rating: 5
  }
];

const TestimonialsSection = ({ lang }: { lang: string }) => (
  <section className="max-w-7xl mx-auto px-8 py-32 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <SectionTitle 
        title={lang === 'SLO' ? 'Mnenja Strank' : 'Client Reviews'} 
        scriptText={lang === 'SLO' ? 'Mnenja' : 'Reviews'} 
        align="center" 
      />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#0c1115]/40 backdrop-blur-sm border border-slate-800 p-8 rounded-sm relative group hover:border-[#D4AF37]/30 transition-all duration-500"
        >
          <Quote className="absolute top-6 right-8 w-10 h-10 text-white/[0.03] group-hover:text-[#D4AF37]/10 transition-colors" />
          
          <div className="flex mb-6">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] mr-1" />
            ))}
          </div>
          
          <p className="text-slate-300/90 leading-relaxed italic mb-8 font-light text-sm">
            "{lang === 'SLO' ? item.text : item.text_en}"
          </p>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gold-gradient p-[1px] mr-4">
              <div className="w-full h-full rounded-full bg-[#0f151a] flex items-center justify-center text-[#D4AF37] font-serif text-sm">
                {item.name[0]}
              </div>
            </div>
            <div>
              <h4 className="text-white font-serif text-sm">{item.name}</h4>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">{lang === 'SLO' ? item.role : item.role_en}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const servicesList = [
  {
    id: 'masaze',
    title: 'Masaže',
    title_en: 'Massages',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500&auto=format&fit=crop',
    desc: 'Širok nabor terapevtskih in sprostitvenih masaž, prilagojenih vašim individualnim potrebam za popolno regeneracijo telesa in duha.',
    desc_en: 'A wide range of therapeutic and relaxation massages tailored to your individual needs for complete body and mind regeneration.'
  },
  {
    id: 'preoblikovanje',
    title: 'Preoblikovanje telesa',
    title_en: 'Body Shaping',
    img: 'https://cz8ee99rm0kevgfc.public.blob.vercel-storage.com/MADEROTERAPIJA_MIN-min.jpg',
    desc: '100% naravna anticelulitna masaža z lesenimi inštrumenti iz Kolumbije. Tehnika omogoča intenziven pritisk na fibrozni celulit, stimulira limfni sistem in učinkovito odstranjuje maščobne obloge ter toksine.',
    desc_en: '100% natural anti-cellulite massage with wooden instruments from Colombia. The technique allows intensive pressure on fibrous cellulite, stimulates the lymphatic system, and effectively removes fat deposits and toxins.'
  }
];

const HeroSection = ({ lang }: { lang: string }) => (
  <>
    {/* Hero Background Image */}
    <div className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/10 via-[#1e293b]/60 to-[#1e293b]"></div>
    </div>

    <section id="o-nas" className="max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 pr-0 md:pr-16 relative z-10 mb-16 md:mb-0"
      >
        <SectionTitle title={lang === 'SLO' ? 'O meni' : 'About me'} scriptText={lang === 'SLO' ? 'O meni' : 'About me'} />
        <p className="text-slate-300/80 leading-relaxed mb-10 font-light text-lg italic">
          {lang === 'SLO' 
            ? '"Odkrijte oazo miru v osrčju mesta. Moj studio ponuja ekskluzivne masažne terapije, ki združujejo starodavne tehnike s sodobnim pristopom za popolno harmonijo vašega telesa in duha. Prepustite se mojim rokam in doživite globoko sprostitev."'
            : '"Discover an oasis of peace in the heart of the city. My studio offers exclusive massage therapies that combine ancient techniques with a modern approach for perfect harmony of your body and mind. Leave yourself in my hands and experience deep relaxation."'}
        </p>
        <Link to="/rezervacija" className="inline-block border border-slate-500 text-slate-200 px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500">
          {lang === 'SLO' ? 'Rezerviraj termin' : 'Book an appointment'}
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-1/2 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(212,175,55,0.05)_40%,transparent_70%)] blur-2xl -z-10 rounded-full pointer-events-none"></div>
        
        <div className="w-full aspect-square max-w-lg mx-auto relative z-10">
          <img 
            src="https://cz8ee99rm0kevgfc.public.blob.vercel-storage.com/STAS%CC%8C-copy-min-684x1024.jpg" 
            alt="Staš - Masažni terapevt" 
            className="w-full h-full object-cover organic-shape-1 shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute -inset-2 border border-white/10 organic-shape-1 z-0 mix-blend-overlay"></div>
        </div>
      </motion.div>
    </section>
  </>
);

const SubscriptionsSection = ({ lang }: { lang: string }) => (
  <section id="cenik" className="max-w-7xl mx-auto px-8 py-32 flex flex-col-reverse md:flex-row items-center relative z-10">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="md:w-1/2 mt-16 md:mt-0 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(212,175,55,0.05)_40%,transparent_70%)] blur-2xl -z-10 rounded-full pointer-events-none"></div>

      <div className="w-full aspect-square max-w-lg mx-auto relative z-10">
        <img 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000&auto=format&fit=crop" 
          alt="Spa produkti in ambient" 
          className="w-full h-full object-cover organic-shape-2 shadow-2xl relative z-10"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute -inset-2 border border-white/10 organic-shape-2 z-0 mix-blend-overlay"></div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 pl-0 md:pl-16 relative z-10 flex flex-col items-start md:items-end text-left md:text-right"
    >
      <SectionTitle title={lang === 'SLO' ? 'Cenik' : 'Pricelist'} scriptText={lang === 'SLO' ? 'Cenik' : 'Prices'} align="right" />
      <p className="text-slate-300/80 leading-relaxed mb-10 font-light text-lg italic md:max-w-md">
        {lang === 'SLO' 
          ? '"Investirajte v svoje zdravje z našimi ekskluzivnimi paketi. Redna nega telesa ni le razvajanje, temveč ključ do dolgotrajnega dobrega počutja in vitalnosti. Izberite paket, ki najbolj ustreza vašemu življenjskemu slogu."'
          : '"Invest in your health with our exclusive packages. Regular body care is not just pampering, but the key to long-lasting well-being and vitality. Choose the package that best suits your lifestyle."'}
      </p>
      <Link to="/cenik" className="inline-block border border-slate-500 text-slate-200 px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500">
        {lang === 'SLO' ? 'Preberi več' : 'Read more'}
      </Link>
    </motion.div>
  </section>
);

const ServicesSection = ({ lang }: { lang: string }) => (
  <section id="storitve" className="max-w-7xl mx-auto px-8 py-32 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <SectionTitle title={lang === 'SLO' ? 'Storitve' : 'Services'} scriptText={lang === 'SLO' ? 'Storitve' : 'Services'} align="center" />
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
      {servicesList.map((srv, index) => (
        <motion.div 
          key={srv.id} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col items-center text-center group h-full"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-xl -z-10 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-slate-600/30 p-1 transition-transform duration-700 group-hover:scale-105">
              <img src={srv.img} alt={srv.title} className="w-full h-full object-cover rounded-full filter brightness-90 group-hover:brightness-110 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </div>
          
          <div className="w-full flex-1 flex flex-col bg-[#0c1115]/95 backdrop-blur-xl border border-slate-800/80 p-8 md:p-10 rounded-sm transition-all duration-500 group-hover:bg-[#0c1115] group-hover:border-[#D4AF37]/30 shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient mb-6">{lang === 'SLO' ? srv.title : srv.title_en || srv.title}</h3>
            <p className="text-lg text-white leading-relaxed font-medium mb-8">
              {lang === 'SLO' ? srv.desc : srv.desc_en || srv.desc}
            </p>
            <div className="mt-auto flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/storitve" 
                className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                {lang === 'SLO' ? 'Preberi več' : 'Read more'}
              </Link>
              <Link 
                to="/rezervacija" 
                className="px-6 py-3 bg-[#D4AF37] text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#FFF2CD] transition-all duration-300"
              >
                {lang === 'SLO' ? 'Rezerviraj termin' : 'Book now'}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const HomePage = ({ lang }: { lang: string }) => {
  return (
    <>
      <HeroSection lang={lang} />
      <SubscriptionsSection lang={lang} />
      <ServicesSection lang={lang} />
      <TestimonialsSection lang={lang} />
    </>
  );
};

export default HomePage;
