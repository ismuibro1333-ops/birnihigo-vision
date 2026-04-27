import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#4F3C1C]">
      <div className="text-center px-6">
        <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
          Lost in Transit
        </p>
        <h1 className="text-7xl md:text-9xl font-black text-[#EFE7DC] tracking-tighter italic mb-6">
          404
        </h1>
        <p className="mb-10 text-xl text-[#EFE7DC]/60 font-bold italic">
          This page hatched into nothing.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#FEA42A] text-[#4F3C1C] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
