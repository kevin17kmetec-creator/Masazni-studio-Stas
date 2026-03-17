import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar as CalendarIcon, Clock, User, Phone, Mail } from 'lucide-react';
import { servicesList, bodyShapingList } from '../constants/services';

const BookingPage = ({ lang }: { lang: string }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const [dateError, setDateError] = useState('');

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 19; hour++) {
      if (hour === 12) continue; // Skip lunch break
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return slots;
  };

  const availableTimes = generateTimeSlots();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay();
    
    if (day === 0) { // Sunday
      setDateError(lang === 'SLO' ? 'Nedelje niso na voljo.' : 'Sundays are not available.');
      setBookingData({ ...bookingData, date: '' });
    } else {
      setDateError('');
      setBookingData({ ...bookingData, date: e.target.value });
    }
  };

  const isSaturday = bookingData.date ? new Date(bookingData.date).getDay() === 6 : false;

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="pt-20 pb-32">
      <section className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f151a]/80 backdrop-blur-xl border border-slate-800/80 p-8 md:p-14 rounded-sm shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-gold-gradient mb-4">{lang === 'SLO' ? 'Spletna Rezervacija' : 'Online Booking'}</h2>
            <p className="text-slate-400 font-light italic">{lang === 'SLO' ? 'Zagotovite si svoj trenutek sprostitve.' : 'Secure your moment of relaxation.'}</p>
          </div>

          <div className="flex justify-between mb-12 relative max-w-md mx-auto z-10">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10 -translate-y-1/2"></div>
            {[1, 2, 3].map((num) => (
              <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${step >= num ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'bg-[#0c1115] border border-slate-700 text-slate-500'}`}>
                {num}
              </div>
            ))}
          </div>

          <div className="relative z-10">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xl text-gold-gradient mb-8 font-serif text-center">{lang === 'SLO' ? 'Izberite storitev' : 'Select a service'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...servicesList, ...bodyShapingList].map(srv => (
                    <button
                      key={srv.id}
                      onClick={() => setBookingData({ ...bookingData, service: lang === 'SLO' ? srv.title_short || srv.title : srv.title_en_short || srv.title_en })}
                      className={`p-6 border rounded-sm text-left transition-all duration-300 ${bookingData.service === (lang === 'SLO' ? srv.title_short || srv.title : srv.title_en_short || srv.title_en) ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-slate-800 hover:border-slate-600 bg-[#0c1115]/50'}`}
                    >
                      <div className="font-serif text-lg text-white">{lang === 'SLO' ? srv.title_short || srv.title : srv.title_en_short || srv.title_en}</div>
                      <div className="text-xs text-slate-500 mt-2 tracking-widest uppercase">{srv.duration} • {lang === 'SLO' ? 'od' : 'from'} {srv.price}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={handleNext}
                    disabled={!bookingData.service}
                    className="bg-white text-black px-10 py-3 uppercase tracking-[0.2em] text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors"
                  >
                    {lang === 'SLO' ? 'Naprej' : 'Next'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h3 className="text-xl text-gold-gradient mb-8 font-serif text-center">{lang === 'SLO' ? 'Izberite datum in uro' : 'Select date and time'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">{lang === 'SLO' ? 'Datum' : 'Date'}</label>
                    <input 
                      type="date" 
                      className={`w-full bg-[#0c1115] border ${dateError ? 'border-red-500' : 'border-slate-800'} rounded-sm p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors`}
                      value={bookingData.date}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {dateError && <p className="text-red-500 text-[10px] mt-2 uppercase tracking-widest">{dateError}</p>}
                    {isSaturday && (
                      <p className="text-[#D4AF37] text-[10px] mt-2 uppercase tracking-widest italic">
                        {lang === 'SLO' 
                          ? 'Sobota: Termin bo poslan kot povpraševanje in še ni potrjen.' 
                          : 'Saturday: Appointment will be sent as an inquiry and is not yet confirmed.'}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">{lang === 'SLO' ? 'Ura' : 'Time'}</label>
                    <div className="grid grid-cols-3 gap-3">
                      {availableTimes.map(time => (
                        <button
                          key={time}
                          onClick={() => setBookingData({ ...bookingData, time })}
                          className={`p-3 border rounded-sm text-sm transition-all duration-300 ${bookingData.time === time ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37]' : 'border-slate-800 text-slate-400 hover:border-slate-600 bg-[#0c1115]'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-between items-center">
                  <button onClick={handlePrev} className="text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors">{lang === 'SLO' ? 'Nazaj' : 'Back'}</button>
                  <button 
                    onClick={handleNext}
                    disabled={!bookingData.date || !bookingData.time}
                    className="bg-white text-black px-10 py-3 uppercase tracking-[0.2em] text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors"
                  >
                    {lang === 'SLO' ? 'Naprej' : 'Next'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl text-gold-gradient mb-8 font-serif text-center">{lang === 'SLO' ? 'Vaši podatki' : 'Your details'}</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">{lang === 'SLO' ? 'Ime in priimek' : 'Full name'}</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#0c1115] border border-slate-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-[#0c1115] border border-slate-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">{lang === 'SLO' ? 'Telefon' : 'Phone'}</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-[#0c1115] border border-slate-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0c1115] p-6 rounded-sm border border-slate-800 mt-8 text-center">
                  <p className="text-sm text-slate-300 font-serif mb-1">{bookingData.service}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{bookingData.date} {lang === 'SLO' ? 'ob' : 'at'} {bookingData.time}</p>
                  {isSaturday && (
                    <p className="text-[#D4AF37] text-[10px] mt-2 uppercase tracking-widest italic">
                      {lang === 'SLO' ? '* Povpraševanje (ni še potrjeno)' : '* Inquiry (not yet confirmed)'}
                    </p>
                  )}
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button type="button" onClick={handlePrev} className="text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors">{lang === 'SLO' ? 'Nazaj' : 'Back'}</button>
                  <button 
                    type="submit"
                    className="bg-[#D4AF37] text-black px-10 py-3 uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#FFF2CD] transition-colors"
                  >
                    {lang === 'SLO' ? 'Potrdi' : 'Confirm'}
                  </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#D4AF37]/30">
                  <Check className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-3xl text-gold-gradient mb-4 font-serif">
                  {isSaturday 
                    ? (lang === 'SLO' ? 'Povpraševanje poslano' : 'Inquiry sent')
                    : (lang === 'SLO' ? 'Rezervacija uspešna' : 'Booking successful')}
                </h3>
                <p className="text-slate-400 max-w-md mx-auto font-light italic leading-relaxed">
                  {isSaturday
                    ? (lang === 'SLO' 
                        ? 'Hvala za vaše povpraševanje za soboto. Kontaktiral vas bom v najkrajšem možnem času za potrditev termina.'
                        : 'Thank you for your Saturday inquiry. I will contact you as soon as possible to confirm the appointment.')
                    : (lang === 'SLO' 
                        ? 'Hvala za vaše zaupanje. Na vaš elektronski naslov sem poslal potrditev termina. Veselim se vašega obiska.'
                        : 'Thank you for your trust. I have sent a confirmation to your email address. I look forward to your visit.')}
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setBookingData({ service: '', date: '', time: '', name: '', email: '', phone: '' });
                  }}
                  className="mt-10 border border-slate-600 text-slate-300 px-8 py-3 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-colors"
                >
                  {lang === 'SLO' ? 'Nova rezervacija' : 'New booking'}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BookingPage;
