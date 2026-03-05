import { benOne, benTwo, bendThree, benFour } from '@/components/icons';
import { getRequest } from '@/services';
import React from 'react';

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  benOne,
  benTwo,
  bendThree,
  benFour,
};

interface BenefitType {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

const BenefitsSection = async () => {
  const data: BenefitType[] = await getRequest('/benefits');

  return (
    <section className="bg-white py-16  mt-37.5 container mx-auto max-w-7xl px-4">
      <h2 className="text-[51px] font-bold text-gray-900 mb-12 text-start">
        Benefits of working with us
      </h2>

      <div className="grid grid-cols-2 gap-x-[100px] gap-y-10">
        {data.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.id} className="flex items-start gap-10 ">
              <div className="w-[82px] h-[72px] bg-[#E7EBFC] rounded-full flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-[24px] font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
