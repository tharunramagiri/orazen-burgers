"use client";
import { useState } from "react";

interface Booking {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: "confirmed" | "pending" | "cancelled";
  createdAt: string;
}

const initialBookings: Booking[] = [
  { id: 1, name: "John Doe", email: "john@example.com", date: "2026-08-15", time: "19:00", guests: 4, status: "confirmed", createdAt: "2026-08-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", date: "2026-08-16", time: "20:30", guests: 2, status: "pending", createdAt: "2026-08-11" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", date: "2026-08-14", time: "18:00", guests: 6, status: "confirmed", createdAt: "2026-08-09" },
];

const statusColors: Record<Booking["status"], string> = {
  confirmed: "bg-green/20 text-green",
  pending: "bg-mustard/20 text-mustard-dark",
  cancelled: "bg-red/10 text-red",
};

export default function BookingsAdmin() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState<"all" | Booking["status"]>("all");

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const updateStatus = (id: number, status: Booking["status"]) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  return (
    <div>
      <div className="mb-[3vw] flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:items-start">
        <div>
          <h1 className="font-modak text-[3vw] uppercase text-ink max-md:text-[8vw]">Bookings</h1>
          <p className="font-body text-[.9vw] text-ink/50 max-md:text-[3.5vw]">{bookings.length} total bookings</p>
        </div>
        <div className="flex gap-2">
          {(["all", "pending", "confirmed", "cancelled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1.5 font-body text-[.75vw] font-bold capitalize max-md:text-[3vw] transition-all ${
                filter === f ? "bg-red text-white" : "bg-ink/5 text-ink/50 hover:bg-ink/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="overflow-hidden rounded-[1vw] border-2 border-ink/10 bg-white max-md:hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-ink/10 bg-beige/50">
              {["Guest", "Date", "Time", "Party", "Status", "Actions"].map((h) => (
                <th key={h} className="px-[1.5vw] py-[1vw] text-left font-body text-[.75vw] font-bold uppercase tracking-[.1em] text-ink/40">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((booking) => (
              <tr key={booking.id} className="border-b border-ink/5 hover:bg-beige/30 transition-colors">
                <td className="px-[1.5vw] py-[1vw]">
                  <p className="font-body text-[.85vw] font-bold text-ink">{booking.name}</p>
                  <p className="font-body text-[.7vw] text-ink/40">{booking.email}</p>
                </td>
                <td className="px-[1.5vw] py-[1vw] font-body text-[.8vw] text-ink">{booking.date}</td>
                <td className="px-[1.5vw] py-[1vw] font-body text-[.8vw] text-ink">{booking.time}</td>
                <td className="px-[1.5vw] py-[1vw] font-body text-[.8vw] text-ink">{booking.guests} guests</td>
                <td className="px-[1.5vw] py-[1vw]">
                  <span className={`inline-block rounded-full px-3 py-1 font-body text-[.7vw] font-bold capitalize ${statusColors[booking.status]}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-[1.5vw] py-[1vw]">
                  <div className="flex gap-2">
                    {booking.status !== "confirmed" && (
                      <button onClick={() => updateStatus(booking.id, "confirmed")} className="rounded-full bg-green/10 px-2.5 py-1 font-body text-[.65vw] font-bold text-green hover:bg-green/20">Confirm</button>
                    )}
                    {booking.status !== "cancelled" && (
                      <button onClick={() => updateStatus(booking.id, "cancelled")} className="rounded-full bg-red/10 px-2.5 py-1 font-body text-[.65vw] font-bold text-red hover:bg-red/20">Cancel</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="hidden max-md:flex flex-col gap-3">
        {filtered.map((booking) => (
          <div key={booking.id} className="rounded-[3vw] border-2 border-ink/10 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-base font-bold text-ink">{booking.name}</p>
                <p className="font-body text-xs text-ink/40">{booking.email}</p>
              </div>
              <span className={`rounded-full px-3 py-1 font-body text-xs font-bold capitalize ${statusColors[booking.status]}`}>
                {booking.status}
              </span>
            </div>
            <div className="mt-3 flex gap-4 font-body text-sm text-ink/60">
              <span>{booking.date}</span>
              <span>{booking.time}</span>
              <span>{booking.guests} guests</span>
            </div>
            <div className="mt-3 flex gap-2">
              {booking.status !== "confirmed" && (
                <button onClick={() => updateStatus(booking.id, "confirmed")} className="rounded-full bg-green/10 px-3 py-1.5 font-body text-xs font-bold text-green">Confirm</button>
              )}
              {booking.status !== "cancelled" && (
                <button onClick={() => updateStatus(booking.id, "cancelled")} className="rounded-full bg-red/10 px-3 py-1.5 font-body text-xs font-bold text-red">Cancel</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Email template preview */}
      <div className="mt-[3vw] rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
        <h2 className="font-modak text-[1.5vw] uppercase text-red max-md:text-[5vw]">Email Template</h2>
        <p className="mt-2 font-body text-[.8vw] text-ink/50 max-md:text-[3vw]">
          Booking confirmation emails are sent with this branded template.
        </p>
        <div className="mt-4 rounded-[.5vw] border-2 border-ink/10 bg-beige p-[1.5vw] max-md:p-4">
          <div className="text-center">
            <p className="font-modak text-[2vw] uppercase text-red max-md:text-[6vw]">ORAZEN</p>
            <p className="font-body text-[.8vw] text-ink/50 max-md:text-[3vw]">🍔 Your table is reserved!</p>
          </div>
          <div className="mt-4 space-y-2 font-body text-[.8vw] text-ink max-md:text-[3.5vw]">
            <p>Hi <strong>{`{name}`}</strong>,</p>
            <p>Your booking at ORAZEN Burgers is confirmed:</p>
            <div className="my-3 rounded-[.5vw] bg-white p-3 space-y-1">
              <p>📅 <strong>Date:</strong> {`{date}`}</p>
              <p>⏰ <strong>Time:</strong> {`{time}`}</p>
              <p>👥 <strong>Guests:</strong> {`{guests}`}</p>
            </div>
            <p>📍 <strong>Location:</strong> 123 Burger Street, Foodie District, NY 10001</p>
            <p className="mt-4 text-ink/40 text-[.7vw] max-md:text-[3vw]">Smashed patties · toasted buns · built by orazen.online</p>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            {["🌶️", "🧅", "🍅", "🥬", "🍔", "🧀"].map((e, i) => (
              <span key={i} className="text-xl sm:text-2xl animate-float-emoji" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
