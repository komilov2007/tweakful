import Image from 'next/image';
import { Amazon, Google, Logitech, Right } from '@/components/icons';
import { getRequest } from '@/services';

interface HeroType {
  id: string;
  title: string;
  description: string;
  text: string;
  image: string;
  textt: string;
}

const HeroSection = async () => {
  const data: HeroType[] = await getRequest('/hero-data');

  return (
    <section className="bg-white container mx-auto max-w-7xl  mt-17.5">
      {data.map((item) => (
        <div
          key={item.id}
          className="container mx-auto max-w-7xl  py-24 flex flex-row items-start gap-[05px]"
        >
          <div className="flex-1 w-[70%]">
            <h1 className="text-[64px] font-extrabold text-gray-900 leading-snug mb-6">
              {item.title}
            </h1>
            <p className="text-gray-600 text-lg mb-8">{item.description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <button className="flex items-center justify-between w-[198px] h-[56px] px-4 rounded-md bg-[#2E4FD7] text-white font-medium hover:bg-blue-700 transition">
                <span>Book A Meeting</span>
                <Right />
              </button>
              <div className="flex flex-col">
                <span className=" mt-3 sm:mt-0">{item.text}</span>{' '}
                <span className=" mt-3 sm:mt-0">{item.textt}</span>
              </div>
            </div>
          </div>

          <div className="flex-1  relative  h-[550px]">
            <Image
              src={item.image}
              alt="Hero"
              fill
              className="w-[460px]! ml-45 rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-[20px] mt-[-120]">
        <Logitech />
        <Google />
        <Amazon />
      </div>
    </section>
  );
};

export default HeroSection;
