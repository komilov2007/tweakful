import { Logo, Right } from '@/components/icons';
import { getRequest } from '@/services';
import Link from 'next/link';

const Headers = async () => {
  const data: { id: string; path: string; text: string }[] =
    await getRequest('/header-data');
  return (
    <div className="container flex gap-[480px] mt-5 mx-auto px-4 max-w-7xl items-center flex">
      <div className="flex items-center gap-[53px]">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex gap-[31px]">
          {data.map((item) => (
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
  );
};

export default Headers;
