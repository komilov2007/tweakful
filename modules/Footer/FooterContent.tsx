import { FC } from 'react';
import Link from 'next/link';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  id: string;
  links: FooterLink[];
};

interface FooterType {
  brand: {
    title: string;
    aboutTitle: string;
    aboutText: string;
    buttonText: string;
    buttonHref: string;
  };
  columns: FooterColumn[];
  bottom: {
    leftText: string;
    rightText: string;
  };
}

const FooterContent: FC<{ data: FooterType }> = ({ data }) => {
  return (
    <footer className="bg-[#062A26] text-white h-[408px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full px-6 pt-16">
        <div className="flex justify-between">
          <div className="max-w-[420px]">
            <h2 className="text-2xl font-semibold">{data.brand.title}</h2>

            <h3 className="mt-10 text-sm font-semibold text-gray-300">
              {data.brand.aboutTitle}
            </h3>

            <p className="mt-4 text-gray-400 text-sm leading-6">
              {data.brand.aboutText}
            </p>

            <Link
              href={data.brand.buttonHref}
              className="inline-flex items-center gap-2 mt-6 text-sm text-white hover:text-gray-200"
            >
              {data.brand.buttonText}→
            </Link>
          </div>

          <div className="flex gap-20">
            {data.columns.map((col) => (
              <ul key={col.id} className="space-y-4 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-sm text-gray-400">
          <p className="max-w-[500px]">{data.bottom.leftText}</p>

          <p>{data.bottom.rightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
