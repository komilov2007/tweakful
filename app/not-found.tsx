import Link from 'next/link';
import BackButton from './BackButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050B14] text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Back to Home</span>
          </Link>

          <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
            404 • Not Found
          </span>
        </div>

        {/* Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Oops! This page doesn’t exist
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
              Page <span className="text-emerald-300">Not Found</span>
            </h1>

            <p className="mt-4 text-white/70 text-base leading-7 max-w-xl">
              Siz qidirgan sahifa o‘chirilgan bo‘lishi mumkin yoki link
              noto‘g‘ri. Pastdagi tugmalar orqali asosiy sahifaga qayting yoki
              kerakli bo‘limga o‘ting.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition shadow-lg shadow-emerald-500/20"
              >
                Go Home <span className="text-lg">→</span>
              </Link>

              {/* ✅ client component */}
              <BackButton />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/90"
              >
                Contact <span className="text-lg">✉</span>
              </Link>
            </div>

            {/* Hint */}
            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                Tip
              </span>
              URL’ni tekshirib ko‘ring yoki menyudan sahifani toping.
            </div>
          </div>

          {/* Right: Big 404 card */}
          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl" />

              <div className="relative">
                <p className="text-white/60 text-sm">Error code</p>
                <div className="mt-3 text-[88px] font-extrabold leading-none tracking-tight">
                  404
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Status</span>
                    <span className="text-white/90">Not Found</span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Suggestion</span>
                    <span className="text-white/90">Try homepage</span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Support</span>
                    <span className="text-white/90">/contact</span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-white/60 leading-5">
                    Agar bu xatolik doim chiqaversa, route yoki linklar
                    konfiguratsiyasini tekshiring.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
              © {new Date().getFullYear()} • Your Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
