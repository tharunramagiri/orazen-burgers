"use client";
import Link from "next/link";
import shopConfig from "@/data/shop-config.json";
import reelsData from "@/data/instagram-reels.json";
import { burgers } from "@/lib/data";

export default function AdminOverview() {
  const { shop } = shopConfig;

  const stats = [
    { label: "Menu Items", value: burgers.length, icon: "🍔", href: "/admin/menu" },
    { label: "Reels", value: reelsData.reels.length, icon: "📸", href: "/admin/reels" },
    { label: "Shop Info", value: "✓", icon: "🏪", href: "/admin/shop" },
    { label: "Site Live", value: "✓", icon: "🌐", href: "/" },
  ];

  return (
    <div>
      <div className="mb-[3vw] flex items-center justify-between">
        <div>
          <h1 className="font-modak text-[3vw] uppercase text-ink">Dashboard</h1>
          <p className="font-body text-[.9vw] text-ink/50">Welcome back! Manage your burger shop.</p>
        </div>
        <a
          href="https://burger.orazen.online"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-red px-[2vw] py-[.7vw] font-body text-[.9vw] font-bold uppercase text-white hover:bg-ink"
        >
          View Live Site ↗
        </a>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-[1.5vw] max-md:grid-cols-2">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-[1vw] border-2 border-ink/10 bg-white p-[1.5vw] shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-2xl">{stat.icon}</span>
            <p className="mt-2 font-modak text-[2.5vw] leading-none text-ink">{stat.value}</p>
            <p className="mt-1 font-body text-[.8vw] font-bold uppercase text-ink/40">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick info */}
      <div className="mt-[3vw] grid grid-cols-2 gap-[1.5vw] max-md:grid-cols-1">
        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.8vw] uppercase text-red">Shop Status</h2>
          <div className="mt-3 space-y-2 font-body text-[.85vw] text-ink/70">
            <p>📍 {shop.address}</p>
            <p>📞 {shop.phone}</p>
            <p>✉️ {shop.email}</p>
            <p>📸 {shop.social.instagram}</p>
          </div>
          <Link href="/admin/shop" className="mt-3 inline-block font-body text-[.8vw] font-bold text-red underline">
            Edit shop info →
          </Link>
        </div>

        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.8vw] uppercase text-red">Quick Actions</h2>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/admin/menu" className="rounded-full border-2 border-ink/20 px-4 py-2 font-body text-[.85vw] font-bold text-ink hover:bg-ink hover:text-white transition-colors">
              🍔 Add/Edit Menu Items
            </Link>
            <Link href="/admin/reels" className="rounded-full border-2 border-ink/20 px-4 py-2 font-body text-[.85vw] font-bold text-ink hover:bg-ink hover:text-white transition-colors">
              📸 Manage Instagram Reels
            </Link>
            <Link href="/admin/shop" className="rounded-full border-2 border-ink/20 px-4 py-2 font-body text-[.85vw] font-bold text-ink hover:bg-ink hover:text-white transition-colors">
              🏪 Update Shop Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
