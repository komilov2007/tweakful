'use client';

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/90"
    >
      Go Back <span className="text-lg">↩</span>
    </button>
  );
}
