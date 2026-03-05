type Data = {
  title: string;
  desc: string;

  callBtn: string;
  callText: string;

  emailBtn: string;
  emailText: string;

  formTitle: string;
  formDesc: string;

  nameLabel: string;
  namePlaceholder: string;

  emailLabel: string;
  emailPlaceholder: string;

  topicLabel: string;
  topicPlaceholder: string;

  messageLabel: string;
  messagePlaceholder: string;

  submitText: string;
  logos: string[];
};

export default function ContactSection({ data }: { data: Data }) {
  if (!data) return null;

  return (
    <section className="w-[1440px] h-[520px] bg-[#E9EEFB] overflow-hidden">
      <div className="h-[400px] px-[150px] pt-[70px] flex gap-[120px]">
        <div className="w-[430px]">
          <h2 className="text-[34px] font-extrabold text-[#0F172A]">
            {data.title}
          </h2>
          <p className="mt-[10px] text-[11px] leading-[1.7] text-[#0F172A]/60 max-w-[360px]">
            {data.desc}
          </p>
          <div className="mt-[24px] flex items-center gap-[12px]">
            <div className="bg-[#2F5AE5] text-white px-[16px] py-[10px] rounded-[2px]">
              <div className="text-[10px] font-semibold leading-none">
                {data.callBtn}
              </div>
              <div className="text-[10px] mt-[3px] text-white/90">
                {data.callText}
              </div>
            </div>
            <div className="border border-[#2F5AE5]/50 bg-white px-[16px] py-[10px] rounded-[2px]">
              <div className="text-[10px] font-semibold text-[#2F5AE5] leading-none">
                {data.emailBtn}
              </div>
              <div className="text-[10px] mt-[3px] text-[#2F5AE5]/90">
                {data.emailText}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[420px] bg-white rounded-[2px] shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-[22px] py-[18px]">
          <div className="text-[12px] font-bold text-[#0F172A]">
            {data.formTitle}
          </div>
          <div className="mt-[6px] text-[10px] leading-[1.6] text-[#0F172A]/55">
            {data.formDesc}
          </div>
          <div className="mt-[14px] grid grid-cols-2 gap-x-[12px] gap-y-[10px]">
            <div>
              <div className="text-[10px] font-semibold text-[#0F172A]">
                {data.nameLabel}
              </div>
              <input
                className="mt-[6px] w-full h-[34px] border border-black/10 rounded-[2px] px-[10px] text-[10px] outline-none"
                placeholder={data.namePlaceholder}
              />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-[#0F172A]">
                {data.emailLabel}
              </div>
              <input
                className="mt-[6px] w-full h-[34px] border border-black/10 rounded-[2px] px-[10px] text-[10px] outline-none"
                placeholder={data.emailPlaceholder}
              />
            </div>
            <div className="col-span-2">
              <div className="text-[10px] font-semibold text-[#0F172A]">
                {data.topicLabel}
              </div>

              <div className="mt-[6px] relative">
                <select className="w-full h-[34px] border border-black/10 rounded-[2px] px-[10px] pr-[30px] text-[10px] outline-none bg-white text-[#0F172A]/60">
                  <option>{data.topicPlaceholder}</option>
                  <option>Billing</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>

                <span className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[#0F172A]/50">
                  ▾
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] font-semibold text-[#0F172A]">
                {data.messageLabel}
              </div>
              <textarea
                className="mt-[6px] w-full h-[90px] border border-black/10 rounded-[2px] px-[10px] py-[8px] text-[10px] outline-none resize-none"
                placeholder={data.messagePlaceholder}
              />
            </div>
          </div>

          <button className="mt-[14px] w-full h-[34px] bg-[#2F5AE5] text-white text-[10px] font-semibold rounded-[2px]">
            {data.submitText}
          </button>
        </div>
      </div>
      {/* LOGOS ROW */}
      <div className="h-[120px] bg-white px-[150px] flex items-center gap-[28px]">
        {data.logos?.map((x, i) => (
          <div
            key={i}
            className="text-[12px] font-bold text-[#0F172A]/70 flex items-center gap-[6px]"
          >
            {x === 'google' ? (
              <span className="border border-[#16A34A] px-[6px] py-[1px] text-[10px] text-[#16A34A] font-semibold">
                Google
              </span>
            ) : null}
            {x === 'amazon' ? (
              <span className="text-[11px]">amazon</span>
            ) : null}
            {x === 'intel' ? (
              <span className="border border-[#16A34A] px-[6px] py-[1px] text-[10px] text-[#16A34A] font-semibold">
                intel
              </span>
            ) : null}
            {x === 'atlassian' ? (
              <span className="text-[10px] font-semibold tracking-[0.08em]">
                ▲ ATLASSIAN
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
