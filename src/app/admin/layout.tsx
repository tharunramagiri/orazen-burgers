"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ADMIN_PASSWORD = "orazen2026";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/shop", label: "Shop Info", icon: "🏪" },
  { href: "/admin/menu", label: "Menu", icon: "🍔" },
  { href: "/admin/reels", label: "Reels", icon: "📸" },
  { href: "/admin/bookings", label: "Bookings", icon: "📅" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const handleLogout = () => {
    sessionStorage.removeItem("admin-auth");
    setAuthenticated(false);
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-beige">
        <div className="w-full max-w-sm rounded-[2vw] border-2 border-ink bg-white p-[4vw] shadow-[0_15px_50px_rgba(0,0,0,0.15)] max-md:mx-4">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 animate-float">
              <img src="/img/burger-boy.png" alt="ORAZEN" className="w-full h-full object-contain" />
            </div>
            <h1 className="mt-4 font-modak text-[3vw] uppercase text-red max-md:text-[8vw]">Admin</h1>
            <p className="mt-1 font-body text-[.9vw] text-ink/40 max-md:text-[3.5vw]">Enter password to continue</p>
          </div>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full border-2 border-ink/20 px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink/30 focus:border-red focus:outline-none"
              autoFocus
            />
            {error && (
              <p className="text-center font-body text-sm text-red animate-bounce">Wrong password! Try again.</p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-red py-3.5 font-body text-sm font-bold uppercase tracking-[.08em] text-white transition-all hover:bg-ink hover:scale-[1.02] active:scale-95"
            >
              Unlock Dashboard
            </button>
          </form>
          <p className="mt-4 text-center font-body text-[.7vw] text-ink/30 max-md:text-[3vw]">
            <Link href="/" className="hover:text-red underline">← Back to site</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-beige">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-[14vw] shrink-0 border-r-2 border-ink/10 bg-white p-[1.5vw] flex flex-col max-md:hidden">
        <Link href="/" className="block" title="View site">
          <div className="font-modak text-[2.5vw] leading-none text-red hover:text-ink transition-colors">
            ORAZEN
          </div>
        </Link>
        <p className="mt-1 font-body text-[.65vw] uppercase tracking-[.2em] text-ink/30">Admin Panel</p>

        <nav className="mt-[3vw] flex-1 flex flex-col gap-[.3vw]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-[.6vw] rounded-full px-[1vw] py-[.7vw] font-body text-[.8vw] font-bold transition-all ${
                pathname === item.href
                  ? "bg-red text-white shadow-md scale-[1.02]"
                  : "text-ink/50 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pt-[2vw] border-t border-ink/10 space-y-[.5vw]">
          <Link
            href="/"
            className="block rounded-full border-2 border-ink/10 px-[1vw] py-[.6vw] text-center font-body text-[.7vw] font-bold uppercase text-ink/50 hover:border-ink hover:text-ink transition-all"
          >
            ← View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full rounded-full px-[1vw] py-[.6vw] text-center font-body text-[.65vw] font-bold text-red/50 hover:text-red hover:bg-red/5 transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="hidden max-md:block fixed top-0 inset-x-0 z-40 bg-white border-b-2 border-ink/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-modak text-2xl text-red">ORAZEN</Link>
          <div className="flex items-center gap-3">
            <span className="font-body text-xs font-bold text-ink/30 uppercase tracking-widest">Admin</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full bg-red px-3 py-1.5 font-body text-xs font-bold text-white"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="mt-3 flex flex-wrap gap-2 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-full px-3 py-1.5 font-body text-xs font-bold ${
                  pathname === item.href
                    ? "bg-red text-white"
                    : "bg-ink/5 text-ink/60"
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
            <button onClick={handleLogout} className="rounded-full px-3 py-1.5 font-body text-xs font-bold text-red/60 bg-red/5">
              Logout
            </button>
          </nav>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-[3vw] ml-[14vw] max-md:ml-0 max-md:mt-16 max-md:p-4">
        {children}
      </main>
    </div>
  );
}
