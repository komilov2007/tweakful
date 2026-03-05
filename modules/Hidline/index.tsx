import { First, Right, Second, Thrid } from '@/components/icons';
import { getRequest } from '@/services';

interface HeadlineType {
  id: string;
  headline: string;
  subtext: string;
  buttonText: string;
  firsttitle: string;
  firstdesc: string;
  secondtitle: string;
  seconddesc: string;
  thridtitle: string;
  thriddesc: string;
  firstimg: string;
  secongimg: string;
  thridimg: string;
}

const HeadlineSection = async () => {
  const data: HeadlineType[] = await getRequest('/headline-data');

  return (
    <section className="bg-white mt-37.5 container mx-auto max-w-7xl mb-10">
      {data.map((item) => (
        <div key={item.id} className="flex gap-[164px]">
          <div className="flex  w-[410px]">
            <div className="">
              <div className="flex items-center gap-6">
                <div className="w-20 flex justify-center h-12 bg-[#E7EBFC] rounded-full">
                  <span className="flex items-center">
                    <First />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[20px] font-bold">{item.firsttitle}</h1>
                  <p>{item.firstdesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-12">
                <div className="w-20 flex justify-center h-12 bg-[#E7EBFC] rounded-full">
                  <span className="flex items-center">
                    <Second />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[20px] font-bold">{item.secondtitle}</h1>
                  <p>{item.seconddesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-12">
                <div className="w-20 flex justify-center h-12 bg-[#E7EBFC] rounded-full">
                  <span className="flex items-center">
                    <Thrid />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[20px] font-bold">{item.thridtitle}</h1>
                  <p>{item.thriddesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[540px] ml-30">
            <h1 className="text-[51px] font-extrabold text-gray-900 leading-snug mb-2">
              {item.headline}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{item.subtext}</p>
            <button className="px-6 py-3 flex items-center gap-2  bg-[#2E4FD7] text-white font-medium rounded transition">
              {item.buttonText}{' '}
              <span>
                <Right />
              </span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeadlineSection;
