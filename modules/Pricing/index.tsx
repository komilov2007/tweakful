type Data = {
  title: string;
  desc: string;
  img: string;
  badgeText: string;
  btnText: string;
};

export default function TutorialSection({ data }: { data: Data }) {
  if (!data) return null;

  const titleLines = data.title.split('\n');

  return (
    <section className=" bg-white mb-10 flex items-center justify-center">
      <div className="w-[980px] flex items-center gap-[70px]">
        <div className="relative  rounded-[6px] overflow-hidden bg-gray-200">
          <img
            src={data.img}
            alt="tutorial"
            className="w-[800px]! h-[500px]!"
          />

          <div className="absolute left-[16px] bottom-[16px] text-white text-[10px] leading-[1.35]">
            {data.badgeText.split('\n').map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-[#111827] font-extrabold text-[42px] leading-[1.2]">
            {titleLines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h2>

          <p className="mt-[14px] text-[#6B7280] text-[11px] leading-[1.6] max-w-[520px]">
            {data.desc}
          </p>

          <button className="mt-[18px] inline-flex items-center gap-[10px] text-[#111827] text-[11px] font-semibold">
            <span className="w-[34px] h-[34px] rounded-full border border-black/20 flex items-center justify-center">
              {/* play icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 7.5V16.5L17 12L9 7.5Z" fill="currentColor" />
              </svg>
            </span>

            {data.btnText}
          </button>
        </div>
      </div>
    </section>
  );
}
