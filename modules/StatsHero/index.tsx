type Stat = { value: string; label: string };

type Data = {
  heroTitle: string;
  quote: string;
  personName: string;
  personRole: string;
  buttonText: string;
  imageBadge: string;
  statsTitle: string;
  statsSubtitle: string;
  stats: Stat[];
  avatar: string;
};

export default function StatsHeroSection({ data }: { data: Data }) {
  if (!data) return null;

  const titleLines = data.heroTitle.split('\n');

  return (
    <section className="w-full  h-[800px] overflow-hidden">
      <div className="container mx-auto">
        <div className="h-[520px] bg-[#E9EEFB] px-[110px] pt-[90px]">
          <h1 className="text-[#0F172A] font-extrabold text-[56px] leading-[1.05] tracking-[-0.02em]">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-[18px] max-w-[700px] text-[12px] leading-[1.7] italic text-[#0F172A]/70 whitespace-pre-line">
            {data.quote}
          </p>

          <div className="mt-[14px] flex items-center gap-[10px]">
            <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
              <img
                src={data.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="text-[12px] font-semibold text-[#0F172A]">
                {data.personName}
              </div>
              <div className="text-[10px] text-[#0F172A]/55">
                {data.personRole}
              </div>
            </div>
          </div>

          <button className="mt-[16px] bg-[#2F5AE5] text-white text-[11px] font-semibold px-[16px] py-[10px] rounded-[2px] inline-flex items-center gap-[10px]">
            {data.buttonText}
            <span className="text-[14px] leading-none translate-y-[0.5px]">
              →
            </span>
          </button>
        </div>

        <div className="relative h-[280px] bg-[#2B57E6]">
          {/* badge */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-14px] bg-[#3DA2FF] text-white text-[12px] font-semibold px-[12px] py-[4px] rounded-[3px]">
            {data.imageBadge}
          </div>

          <div className="pt-[64px] text-center">
            <div className="text-white font-extrabold text-[26px]">
              {data.statsTitle}
            </div>
            <div className="mt-[6px] text-white/80 text-[11px]">
              {data.statsSubtitle}
            </div>

            <div className="mt-[48px] px-[140px] grid grid-cols-4">
              {data.stats.map((s, idx) => (
                <div key={idx} className="relative">
                  {idx !== 0 && (
                    <span className="absolute left-0 top-[10px] h-[58px] w-[1px] bg-white/20" />
                  )}

                  <div className="text-white font-extrabold text-[38px] leading-none">
                    {s.value}
                  </div>
                  <div className="mt-[10px] text-white/80 text-[10px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
