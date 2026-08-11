"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  exiting: boolean;
}

const ToastContext = createContext<{
  toast: (message: string, type?: ToastType) => void;
}>({ toast: () => {} });

export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((message: string, type: ToastType = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);
    setTimeout(() => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
      setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 300);
    }, 3000);
  }, []);

  const bg: Record<ToastType, string> = {
    success: "bg-green text-white",
    error: "bg-red text-white",
    info: "bg-ink text-beige",
  };

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
        {toasts.map((t) => (
          <div key={t.id} className={`rounded-full px-6 py-3 font-body text-sm font-bold shadow-lg ${t.exiting ? "toast-exit" : "toast-enter"} ${bg[t.type]}`}>
            {t.type === "success" ? "✓" : t.type === "error" ? "✕" : "ℹ"} {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
