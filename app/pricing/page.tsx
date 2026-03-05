import { Logo, Right } from '@/components/icons';
import { Footer } from '@/modules';
import TutorialSection from '@/modules/Pricing';
import { getRequest } from '@/services';
import Link from 'next/link';

const Pricing = async () => {
  const data = await getRequest('/tutorialSection');
  const data1: { id: string; path: string; text: string }[] =
    await getRequest('/header-data');
  return (
    <div>
      <div className="container mb-10 flex gap-[480px] mt-5 mx-auto px-4 max-w-7xl items-center flex">
        <div className="flex items-center gap-[53px]">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="flex gap-[31px]">
            {data1?.map((item) => (
              <Link key={item.id} href={item.path}>
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <button className="w-[172px] h-[32px] flex items-center gap-2  jusitfy-between p-1 rounded-[4px] bg-[#2E4FD7] text-white">
            <span className="ml-2">Book A Meeting</span>
            <Right />
          </button>
        </div>
      </div>
      <TutorialSection data={data} />
      <Footer />
    </div>
  );
};

export default Pricing;
