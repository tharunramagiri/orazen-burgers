"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import shopConfig from "@/data/shop-config.json";

export default function ContactPage() {
  const [booking, setBooking] = useState({ name: "", email: "", date: "", time: "", guests: "2" });
  const [bookingSent, setBookingSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({ email: "", message: "" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSent(true);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  const { shop } = shopConfig;

  return (
    <div className="bg-beige">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-red px-[3vw] pb-[3vw] pt-[12vw] max-md:pt-[24vw]">
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.7 }}
          className="absolute left-[3vw] top-[8vw] w-[10vw] max-md:w-[24vw]"
        >
          <Image src="/img/burger-boy.png" alt="" width={400} height={500} className="h-auto w-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-[70%] text-center font-body text-[8vw] uppercase leading-[.8] text-beige max-md:w-full max-md:text-[12vw]"
          style={{
            WebkitTextStroke: "0.5vw var(--color-white)",
            paintOrder: "stroke fill",
          }}
        >
          Got a craving? Let&apos;s talk
        </motion.h1>
      </section>

      {/* ===== SHOP INFO CARDS ===== */}
      <section className="relative z-10 mx-auto -mt-[4vw] max-w-[1200px] px-[3vw]">
        <div className="grid grid-cols-3 gap-[1.5vw] max-md:grid-cols-1 max-md:gap-[4vw] max-md:gap-[4vw]">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.5vw] border-2 border-ink bg-white p-[2vw] shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            <span className="text-3xl">🕐</span>
            <h3 className="mt-2 font-modak text-[1.8vw] uppercase text-red max-md:text-[5vw]">Hours</h3>
            <div className="mt-3 space-y-1 font-body text-[.9vw] text-ink/70 max-md:text-[3vw]">
              {Object.entries(shop.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}</span>
                  <span className="font-bold">{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[1.5vw] border-2 border-ink bg-white p-[2vw] shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            <span className="text-3xl">📍</span>
            <h3 className="mt-2 font-modak text-[1.8vw] uppercase text-red max-md:text-[5vw]">Find Us</h3>
            <p className="mt-3 font-body text-[.9vw] leading-relaxed text-ink/70 max-md:text-[3vw]">
              {shop.address}
            </p>
            <p className="mt-2 font-body text-[.9vw] text-ink/70 max-md:text-[3vw]">
              📞 <a href={`tel:${shop.phone}`} className="hover:text-red">{shop.phone}</a>
            </p>
            <p className="mt-1 font-body text-[.9vw] text-ink/70 max-md:text-[3vw]">
              ✉️ <a href={`mailto:${shop.email}`} className="hover:text-red">{shop.email}</a>
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[1.5vw] border-2 border-ink bg-white p-[2vw] shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            <span className="text-3xl">🔗</span>
            <h3 className="mt-2 font-modak text-[1.8vw] uppercase text-red max-md:text-[5vw]">Follow</h3>
            <div className="mt-3 flex gap-3">
              <a href={shop.social.instagram} target="_blank" rel="noopener" className="rounded-full bg-red px-3 py-1.5 font-body text-xs font-bold text-white hover:bg-ink">Instagram</a>
              <a href={shop.social.facebook} target="_blank" rel="noopener" className="rounded-full bg-red px-3 py-1.5 font-body text-xs font-bold text-white hover:bg-ink">Facebook</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="mx-auto mt-[4vw] max-w-[1200px] px-[3vw]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[1.5vw] border-2 border-ink"
        >
          <iframe
            src={shop.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* ===== TABLE BOOKING + CONTACT FORM ===== */}
      <section className="mx-auto mt-[6vw] max-w-[1200px] px-[3vw] pb-[8vw]">
        <div className="grid grid-cols-2 gap-[4vw] max-md:grid-cols-1 max-md:gap-[8vw]">
          {/* Table Booking */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block -rotate-3 font-modak text-[2vw] uppercase leading-none text-red max-md:text-[5vw]">
              Reserve
            </span>
            <h2 className="mt-1 font-body text-[5vw] uppercase leading-[.85] text-ink max-md:text-[10vw]">
              Book a Table
            </h2>

            {bookingSent ? (
              <div className="mt-4 rounded-[1vw] border-2 border-ink bg-mustard p-[2vw]">
                <p className="font-body text-2xl font-bold text-ink">Table reserved! 🎉</p>
                <p className="mt-2 font-body text-ink/70">We&apos;ll confirm via email shortly.</p>
                <button onClick={() => setBookingSent(false)} className="mt-4 font-body text-sm font-bold text-red underline">Book another</button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="mt-4 space-y-3">
                <input type="text" required placeholder="Your name" value={booking.name} onChange={e => setBooking(p => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 max-md:rounded-[3vw] max-md:py-4" />
                <input type="email" required placeholder="Email" value={booking.email} onChange={e => setBooking(p => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 max-md:rounded-[3vw] max-md:py-4" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="date" required value={booking.date} onChange={e => setBooking(p => ({ ...p, date: e.target.value }))}
                    className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink max-md:rounded-[3vw] max-md:py-4" />
                  <input type="time" required value={booking.time} onChange={e => setBooking(p => ({ ...p, time: e.target.value }))}
                    className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink max-md:rounded-[3vw] max-md:py-4" />
                </div>
                <select value={booking.guests} onChange={e => setBooking(p => ({ ...p, guests: e.target.value }))}
                  className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink max-md:rounded-[3vw] max-md:py-4">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} guest{n>1?'s':''}</option>)}
                </select>
                <button type="submit" className="w-full rounded-full bg-red py-3 font-body text-sm font-bold uppercase tracking-[.08em] text-white transition-transform hover:scale-105 hover:bg-ink max-md:py-4 max-md:text-base">
                  Reserve Table
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block -rotate-3 font-modak text-[2vw] uppercase leading-none text-red max-md:text-[5vw]">
              Say Hello
            </span>
            <h2 className="mt-1 font-body text-[5vw] uppercase leading-[.85] text-ink max-md:text-[10vw]">
              Drop Us a Line
            </h2>

            {contactSent ? (
              <div className="mt-4 rounded-[1vw] border-2 border-ink bg-mustard p-[2vw]">
                <p className="font-body text-2xl font-bold text-ink">Message sent! 💌</p>
                <p className="mt-2 font-body text-ink/70">We&apos;ll get back to you asap.</p>
                <button onClick={() => setContactSent(false)} className="mt-4 font-body text-sm font-bold text-red underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleContact} className="mt-4 space-y-3">
                <input type="email" required placeholder="Your best email" value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 uppercase max-md:rounded-[3vw] max-md:py-4" />
                <textarea required rows={5} placeholder="Tell us your craving..." value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full resize-none rounded-[.8vw] border-2 border-ink bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 uppercase max-md:rounded-[3vw] max-md:py-4" />
                <button type="submit" className="w-full rounded-full bg-red py-3 font-body text-sm font-bold uppercase tracking-[.08em] text-white transition-transform hover:scale-105 hover:bg-ink max-md:py-4 max-md:text-base">
                  Send Craving
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
