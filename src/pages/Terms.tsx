import React from 'react';
import { motion } from 'motion/react';

const Terms = ({ lang }: { lang: string }) => {
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
            {lang === 'SLO' ? 'Splošni pogoji poslovanja' : 'Terms & Conditions'}
          </h1>
          
          <div className="space-y-8 text-slate-300 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">1. Splošne določbe</h2>
              <p>
                Ti splošni pogoji poslovanja določajo pogoje uporabe storitev Masažnega studia Staš (S.T.art, Staš Trunk s.p.). Z rezervacijo termina se strinjate s temi pogoji.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">2. Podatki o podjetju</h2>
              <p>
                S.T.art, Staš Trunk s.p., PE MASAŽNI STUDIO STAŠ<br />
                Tržaška cesta 14, 2000 Maribor<br />
                Matična številka: 8283591001<br />
                Davčna številka: 88321410 (Nismo zavezanec za DDV)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">3. Rezervacije in odpovedi</h2>
              <p>
                Rezervacija termina je obvezujoča. Prosimo, da se na termin naročite vnaprej preko telefona, spletnega obrazca ali emaila.
              </p>
              <p className="mt-2">
                Odpoved termina je možna najkasneje 24 ur pred dogovorjenim časom. V primeru kasnejše odpovedi ali neopravičenega izostanka si pridržujemo pravico do zaračunavanja stroškov rezervacije v višini 50% vrednosti storitve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">4. Zdravstveno stanje</h2>
              <p>
                Stranka je dolžna pred začetkom masaže opozoriti na morebitne zdravstvene težave, poškodbe ali stanja (npr. nosečnost, alergije), ki bi lahko vplivala na izvedbo masaže. Masažo izvajamo na lastno odgovornost stranke.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">5. Cene in plačilo</h2>
              <p>
                Vse cene so navedene v evrih (€) in so veljavne v trenutku rezervacije. Nismo zavezanci za DDV, zato DDV ni obračunan na podlagi 1. odstavka 94. člena Zakona o davku na dodano vrednost. Plačilo se izvede po opravljeni storitvi z gotovino ali drugimi dogovorjenimi plačilnimi sredstvi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">6. Darilni boni</h2>
              <p>
                Darilni boni so veljavni do datuma, navedenega na bonu (običajno 6 mesecev od nakupa). Bona ni mogoče zamenjati za gotovino.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">7. Varovanje osebnih podatkov</h2>
              <p>
                Vaše osebne podatke obdelujemo v skladu z našim Pravilnikom o zasebnosti in veljavno zakonodajo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">8. Končne določbe</h2>
              <p>
                Pridržujemo si pravico do spremembe splošnih pogojev brez predhodnega obvestila. Za morebitne spore je pristojno sodišče v Mariboru.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;
