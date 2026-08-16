"use client";
import { useState } from "react";
import shopConfig from "@/data/shop-config.json";

export default function ShopAdmin() {
  const [shop, setShop] = useState(shopConfig.shop);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "shop-config.json", data: { shop } }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateHours = (day: string, value: string) => {
    setShop((s) => ({ ...s, hours: { ...s.hours, [day]: value } }));
  };

  return (
    <div>
      <div className="mb-[3vw] flex items-center justify-between">
        <div>
          <h1 className="font-modak text-[3vw] uppercase text-ink">Shop Info</h1>
          <p className="font-body text-[.9vw] text-ink/50">Edit your shop details.</p>
        </div>
        <button
          onClick={handleSave}
          className={`rounded-full px-[2vw] py-[.7vw] font-body text-[.9vw] font-bold uppercase text-white transition-colors ${
            saved ? "bg-green" : "bg-red hover:bg-ink"
          }`}
        >
          {saved ? "Saved ✓" : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-[2vw] max-md:grid-cols-1">
        {/* Basic info */}
        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.5vw] uppercase text-red">Basic Info</h2>
          <div className="mt-4 space-y-3">
            {[
              { label: "Shop Name", key: "name" },
              { label: "Tagline", key: "tagline" },
              { label: "Phone", key: "phone" },
              { label: "Email", key: "email" },
              { label: "Address", key: "address" },
            ].map(({ label, key }) => (
              <div key={key}>
                <label className="font-body text-[.75vw] font-bold uppercase text-ink/50">{label}</label>
                <input
                  type="text"
                  value={String(shop[key as keyof typeof shop])}
                  onChange={(e) => setShop((s) => ({ ...s, [key]: e.target.value }))}
                  className="mt-1 w-full rounded-[.5vw] border-2 border-ink/20 px-3 py-2 font-body text-[.85vw] text-ink"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.5vw] uppercase text-red">Opening Hours</h2>
          <div className="mt-4 space-y-2">
            {Object.entries(shop.hours).map(([day, hours]) => (
              <div key={day} className="flex items-center gap-3">
                <span className="w-[5vw] font-body text-[.8vw] font-bold capitalize text-ink">{day}</span>
                <input
                  type="text"
                  value={hours}
                  onChange={(e) => updateHours(day, e.target.value)}
                  className="flex-1 rounded-[.5vw] border-2 border-ink/20 px-3 py-2 font-body text-[.85vw] text-ink"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.5vw] uppercase text-red">Social Links</h2>
          <div className="mt-4 space-y-3">
            {Object.entries(shop.social).map(([platform, url]) => (
              <div key={platform}>
                <label className="font-body text-[.75vw] font-bold capitalize text-ink/50">{platform}</label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setShop((s) => ({ ...s, social: { ...s.social, [platform]: e.target.value } }))}
                  className="mt-1 w-full rounded-[.5vw] border-2 border-ink/20 px-3 py-2 font-body text-[.85vw] text-ink"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="rounded-[1vw] border-2 border-ink/10 bg-white p-[2vw]">
          <h2 className="font-modak text-[1.5vw] uppercase text-red">Google Maps Embed</h2>
          <div className="mt-4">
            <label className="font-body text-[.75vw] font-bold uppercase text-ink/50">Map Embed URL</label>
            <textarea
              rows={3}
              value={shop.mapEmbed}
              onChange={(e) => setShop((s) => ({ ...s, mapEmbed: e.target.value }))}
              className="mt-1 w-full rounded-[.5vw] border-2 border-ink/20 px-3 py-2 font-body text-[.75vw] text-ink resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
