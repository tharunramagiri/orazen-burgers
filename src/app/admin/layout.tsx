"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ADMIN_PASSWORD = "orazen2026";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("admin-auth");
    if (auth === ADMIN_PASSWORD) setAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin-auth", password);
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-beige">
        <div className="w-full max-w-sm rounded-[1.5vw] border-2 border-ink bg-white p-[3vw] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <h1 className="text-center font-modak text-[3vw] uppercase text-red">Admin Login</h1>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full border-2 border-ink px-5 py-3 font-body text-sm text-ink placeholder:text-ink/40"
              autoFocus
            />
            {error && <p className="text-center font-body text-sm text-red">Wrong password!</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-red py-3 font-body text-sm font-bold uppercase tracking-[.08em] text-white hover:bg-ink"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Overview", icon: "📊" },
    { href: "/admin/shop", label: "Shop Info", icon: "🏪" },
    { href: "/admin/menu", label: "Menu", icon: "🍔" },
    { href: "/admin/reels", label: "Reels", icon: "📸" },
  ];

  return (
    <div className="flex min-h-screen bg-beige">
      {/* Sidebar */}
      <aside className="w-[16vw] shrink-0 border-r-2 border-ink/10 bg-white p-[1.5vw] max-md:hidden">
        <Link href="/" className="block font-modak text-[2.5vw] leading-none text-red hover:text-ink">
          ORAZEN
        </Link>
        <p className="mt-1 font-body text-[.7vw] uppercase tracking-[.2em] text-ink/40">Admin Panel</p>
        <nav className="mt-[3vw] flex flex-col gap-[.5vw]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-[.8vw] rounded-full px-[1vw] py-[.7vw] font-body text-[.9vw] font-bold transition-colors ${
                pathname === item.href
                  ? "bg-red text-white"
                  : "text-ink/60 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-[3vw]">
          <Link
            href="/"
            className="block rounded-full border-2 border-ink/20 px-[1vw] py-[.6vw] text-center font-body text-[.8vw] font-bold uppercase text-ink/60 hover:border-ink hover:text-ink"
          >
            ← View Site
          </Link>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin-auth");
              setAuthenticated(false);
            }}
            className="mt-2 w-full rounded-full px-[1vw] py-[.6vw] text-center font-body text-[.7vw] font-bold text-red/60 hover:text-red"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="hidden max-md:block fixed bottom-0 left-0 right-0 z-50 border-t-2 border-ink/10 bg-white">
        <nav className="flex justify-around py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 font-body text-[10px] font-bold ${
                pathname === item.href ? "text-red" : "text-ink/40"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-[3vw] max-md:pb-20">{children}</main>
    </div>
  );
}
