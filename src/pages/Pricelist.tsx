import React from 'react';
import { motion } from 'motion/react';

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

const PricelistItem: React.FC<{ name: string, price: string }> = ({ name, price }) => (
  <div className="flex items-end justify-between mb-5 group">
    <div className="text-slate-200 font-normal text-base md:text-lg pr-4 bg-[#0c1115] relative z-10 group-hover:text-[#D4AF37] transition-colors">
      {name}
    </div>
    <div className="flex-grow border-b border-dotted border-slate-600 relative top-[-6px] z-0 mx-2"></div>
    <div className="text-white font-serif text-lg md:text-xl pl-4 bg-[#0c1115] relative z-10">
      {price}
    </div>
  </div>
);

const PricelistCategory: React.FC<{ title: string, items: { name: string, price: string }[] }> = ({ title, items }) => (
  <div className="mb-14">
    <h3 className="text-3xl font-serif text-gold-gradient mb-8">{title}</h3>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <PricelistItem key={idx} name={item.name} price={item.price} />
      ))}
    </div>
  </div>
);

const PricelistPage = ({ lang }: { lang: string }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricelistData = [
    {
      title: 'Klasična masaža',
      items: [
        { name: '30min', price: '25€' },
        { name: '60min', price: '45€' }
      ]
    },
    {
      title: 'Športna masaža',
      items: [
        { name: '30min', price: '30€' },
        { name: '60min', price: '50€' }
      ]
    },
    {
      title: 'Maderoterapija',
      items: [
        { name: '30min', price: '30€' },
        { name: '45min', price: '40€' },
        { name: 'Maderoterapija paket - 8 + 2 gratis / 30 min', price: '220€' },
        { name: 'Maderoterapija paket - 8 + 2 gratis / 45 min', price: '300€' }
      ]
    },
    {
      title: 'Vacuslim 48',
      items: [
        { name: 'Vacuslim 48 telo: 30min', price: '30€' },
        { name: 'Vacuslim 48 roke: 30min', price: '15€' },
        { name: 'Vacuslim 48 paket 6 + 1 gratis', price: '179€' },
        { name: 'Vacuslim 48 paket 12 + 2 gratis', price: '359€' }
      ]
    },
    {
      title: 'Kriolipoliza',
      items: [
        { name: 'En predel (npr. trebuh ali noge) - 30 min', price: '80€' },
        { name: 'Dva predela (npr. trebuh in noge) - 30 min', price: '140€' }
      ]
    },
    {
      title: 'Lipolaser',
      items: [
        { name: 'Izbran predel-i / 30min', price: '40€' }
      ]
    },
    {
      title: 'Kavitacija',
      items: [
        { name: 'Izbran predel-i / 40 min', price: '50€' }
      ]
    },
    {
      title: 'Radiofrekvenca',
      items: [
        { name: 'Izbran predel-i / 30 min', price: '40€' }
      ]
    },
    {
      title: 'Paketi',
      items: [
        { name: 'Maderoterapija (30min) + vacuslim 48 (30 min) : 6+1 gratis', price: '359€' },
        { name: 'Maderoterapija (30min) + vacuslim 48 (30 min) : 12 + 2 gratis', price: '718€' },
        { name: 'Kavitacija + radiofrekvenca / 4 x 50 min : (4x 20 min kavitacija + 30 min radiofrekvenca)', price: '250€' }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <section className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <SectionTitle 
            title={lang === 'SLO' ? 'Cenik' : 'Pricelist'} 
            scriptText={lang === 'SLO' ? 'Cenik' : 'Prices'} 
            align="center" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0c1115] border border-slate-800 p-8 md:p-16 rounded-sm shadow-2xl relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-sm">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {pricelistData.map((category, index) => (
              <PricelistCategory key={index} title={category.title} items={category.items} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PricelistPage;
