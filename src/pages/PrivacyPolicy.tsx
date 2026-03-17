import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy = ({ lang }: { lang: string }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32">
      <section className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0c1115]/80 backdrop-blur-xl border border-slate-800 p-8 md:p-16 rounded-sm shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gold-gradient mb-12">
            {lang === 'SLO' ? 'Pravilnik o zasebnosti' : 'Privacy Policy'}
          </h1>
          
          <div className="space-y-8 text-slate-300 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">1. Splošno</h2>
              <p>
                V Masažnem studiu Staš (S.T.art, Staš Trunk s.p.) spoštujem vašo zasebnost in se zavezujem k varovanju vaših osebnih podatkov. Ta pravilnik pojasnjuje, kako zbiram, uporabljam in varujem vaše podatke v skladu z Splošno uredbo o varstvu podatkov (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">2. Upravljavec podatkov</h2>
              <p>
                Upravljavec osebnih podatkov je:<br />
                S.T.art, Staš Trunk s.p., PE MASAŽNI STUDIO STAŠ<br />
                Tržaška cesta 14, 2000 Maribor<br />
                Matična številka: 8283591001<br />
                Email: masaznistudiostas@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">3. Katere podatke zbiramo</h2>
              <p>Zbiram naslednje podatke, ki mi jih posredujete prostovoljno:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Ime in priimek</li>
                <li>Kontaktni podatki (email, telefonska številka)</li>
                <li>Podatki o rezervacijah terminov</li>
                <li>Morebitne zdravstvene informacije, ki so relevantne za varno izvedbo masaže</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">4. Namen obdelave</h2>
              <p>Vaše podatke uporabljam izključno za:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Upravljanje vaših rezervacij in terminov</li>
                <li>Komunikacijo z vami glede storitev</li>
                <li>Zagotavljanje varne in prilagojene masažne storitve</li>
                <li>Izpolnjevanje zakonskih obveznosti (npr. izdaja računov)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">5. Varovanje podatkov</h2>
              <p>
                Vaše podatke varujem z ustreznimi tehničnimi in organizacijskimi ukrepi. Podatkov ne posredujem tretjim osebam, razen če to zahteva zakon ali je nujno za izvedbo storitve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">6. Vaše pravice</h2>
              <p>
                V skladu z GDPR imate pravico do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti vaših podatkov. Za uveljavljanje teh pravic me kontaktirajte na moj email naslov.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">7. Piškotki</h2>
              <p>
                Moja spletna stran uporablja nujne piškotke za delovanje strani in analitične piškotke za izboljšanje uporabniške izkušnje. Več o tem lahko preberete v mojem obvestilu o piškotkih.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
