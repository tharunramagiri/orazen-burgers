"use client";
import { useState } from "react";

const initialBurgers = [
  { id: 1, name: "Classic Burger", price: 16, bun: "Brioche", patty: "Beef", spice: "Mild", prepTime: "10–12 min", calories: 720, protein: 32, image: "/img/real/double-smash-burger-fries-drink.jpg", description: "The original Crazy Smash." },
  { id: 2, name: "Spicy Jalapeño", price: 18, bun: "Brioche", patty: "Beef", spice: "Hot", prepTime: "12–14 min", calories: 810, protein: 34, image: "/img/real/chicken-burger-fanta-fries.jpg", description: "Fiery jalapeños, pepper jack." },
  { id: 3, name: "Bacon Cheese Burger", price: 21, bun: "Brioche", patty: "Beef", spice: "Mild", prepTime: "12–15 min", calories: 900, protein: 37, image: "/img/real/burger-closeup-hands.jpg", description: "Crispy smoked bacon, double cheddar." },
  { id: 4, name: "Veggie Delight", price: 15, bun: "Sesame", patty: "Veggie", spice: "Mild", prepTime: "10–12 min", calories: 620, protein: 17, image: "/img/real/burger-cola-tray.jpg", description: "House-made veggie patty." },
  { id: 5, name: "BBQ Ranch", price: 19, bun: "Brioche", patty: "Beef", spice: "Medium", prepTime: "12–14 min", calories: 870, protein: 36, image: "/img/real/combo-tray-branded-wall.jpg", description: "Smoky BBQ glaze, house ranch." },
  { id: 6, name: "Mushroom Swiss", price: 20, bun: "Brioche", patty: "Beef", spice: "Mild", prepTime: "12–14 min", calories: 830, protein: 33, image: "/img/real/double-burger-held-fries.jpg", description: "Sautéed wild mushrooms, Swiss." },
];

export default function MenuAdmin() {
  const [burgers, setBurgers] = useState(initialBurgers);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "menu-items.json", data: { burgers } }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateBurger = (id: number, field: string, value: string | number) => {
    setBurgers((prev) =>
      prev.map((b) => (b.id === id ? { ...b, [field]: value } : b))
    );
  };

  return (
    <div>
      <div className="mb-[3vw] flex items-center justify-between">
        <div>
          <h1 className="font-modak text-[3vw] uppercase text-ink">Menu Items</h1>
          <p className="font-body text-[.9vw] text-ink/50">{burgers.length} burgers on the menu.</p>
        </div>
        <button
          onClick={handleSave}
          className={`rounded-full px-[2vw] py-[.7vw] font-body text-[.9vw] font-bold uppercase text-white transition-colors ${
            saved ? "bg-green" : "bg-red hover:bg-ink"
          }`}
        >
          {saved ? "Saved ✓" : "Save All"}
        </button>
      </div>

      <div className="space-y-[1vw]">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            className="rounded-[1vw] border-2 border-ink/10 bg-white p-[1.5vw]"
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => setEditingId(editingId === burger.id ? null : burger.id)}
            >
              <div className="flex items-center gap-[1vw]">
                <span className="text-2xl">{burger.spice === "Hot" ? "🌶️" : burger.spice === "Medium" ? "🔥" : "🍔"}</span>
                <div>
                  <h3 className="font-modak text-[1.5vw] uppercase text-ink">{burger.name}</h3>
                  <p className="font-body text-[.8vw] text-ink/50">${burger.price} · {burger.calories} cal · {burger.protein}g protein</p>
                </div>
              </div>
              <span className="font-body text-[.8vw] text-ink/30">{editingId === burger.id ? "▲" : "▼"}</span>
            </div>

            {editingId === burger.id && (
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4">
                {[
                  { label: "Name", key: "name" },
                  { label: "Price ($)", key: "price", type: "number" },
                  { label: "Bun", key: "bun" },
                  { label: "Patty", key: "patty" },
                  { label: "Spice", key: "spice" },
                  { label: "Prep Time", key: "prepTime" },
                  { label: "Calories", key: "calories", type: "number" },
                  { label: "Protein (g)", key: "protein", type: "number" },
                  { label: "Image Path", key: "image" },
                ].map(({ label, key, type = "text" }) => (
                  <div key={key}>
                    <label className="font-body text-[.7vw] font-bold uppercase text-ink/50">{label}</label>
                    <input
                      type={type}
                      value={(burger as any)[key]}
                      onChange={(e) => updateBurger(burger.id, key, type === "number" ? Number(e.target.value) : e.target.value)}
                      className="mt-1 w-full rounded-[.4vw] border-2 border-ink/20 px-3 py-2 font-body text-[.8vw] text-ink"
                    />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="font-body text-[.7vw] font-bold uppercase text-ink/50">Description</label>
                  <textarea
                    rows={2}
                    value={burger.description}
                    onChange={(e) => updateBurger(burger.id, "description", e.target.value)}
                    className="mt-1 w-full rounded-[.4vw] border-2 border-ink/20 px-3 py-2 font-body text-[.8vw] text-ink resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
