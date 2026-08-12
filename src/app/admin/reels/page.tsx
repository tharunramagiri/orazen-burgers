"use client";
import { useState } from "react";
import reelsData from "@/data/instagram-reels.json";

export default function ReelsAdmin() {
  const [reels, setReels] = useState(reelsData.reels);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "instagram-reels.json", data: { reels } }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateReel = (id: number, field: string, value: string) => {
    setReels((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addReel = () => {
    const newId = Math.max(...reels.map((r) => r.id), 0) + 1;
    setReels((prev) => [...prev, { id: newId, image: "/img-webp/about-1.webp", caption: "New reel", link: "https://instagram.com/crazysmash_caserta" }]);
  };

  const removeReel = (id: number) => {
    setReels((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="mb-[3vw] flex items-center justify-between">
        <div>
          <h1 className="font-modak text-[3vw] uppercase text-ink">Instagram Reels</h1>
          <p className="font-body text-[.9vw] text-ink/50">{reels.length} reels in carousel.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={addReel} className="rounded-full border-2 border-ink/20 px-[1.5vw] py-[.6vw] font-body text-[.8vw] font-bold uppercase text-ink hover:bg-ink hover:text-white">
            + Add Reel
          </button>
          <button
            onClick={handleSave}
            className={`rounded-full px-[2vw] py-[.7vw] font-body text-[.9vw] font-bold uppercase text-white transition-colors ${
              saved ? "bg-green" : "bg-red hover:bg-ink"
            }`}
          >
            {saved ? "Saved ✓" : "Save All"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1.5vw] max-md:grid-cols-1">
        {reels.map((reel) => (
          <div key={reel.id} className="rounded-[1vw] border-2 border-ink/10 bg-white p-[1.5vw]">
            <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-[.5vw] bg-beige">
              <img src={reel.image} alt="" className="h-full w-full object-cover" />
              <button
                onClick={() => removeReel(reel.id)}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red text-xs font-bold text-white hover:bg-ink"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              <div>
                <label className="font-body text-[.65vw] font-bold uppercase text-ink/50">Image Path</label>
                <input
                  type="text"
                  value={reel.image}
                  onChange={(e) => updateReel(reel.id, "image", e.target.value)}
                  className="mt-1 w-full rounded-[.3vw] border-2 border-ink/20 px-3 py-2 font-body text-[.75vw] text-ink"
                />
              </div>
              <div>
                <label className="font-body text-[.65vw] font-bold uppercase text-ink/50">Caption</label>
                <input
                  type="text"
                  value={reel.caption}
                  onChange={(e) => updateReel(reel.id, "caption", e.target.value)}
                  className="mt-1 w-full rounded-[.3vw] border-2 border-ink/20 px-3 py-2 font-body text-[.75vw] text-ink"
                />
              </div>
              <div>
                <label className="font-body text-[.65vw] font-bold uppercase text-ink/50">Link</label>
                <input
                  type="text"
                  value={reel.link}
                  onChange={(e) => updateReel(reel.id, "link", e.target.value)}
                  className="mt-1 w-full rounded-[.3vw] border-2 border-ink/20 px-3 py-2 font-body text-[.75vw] text-ink"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
