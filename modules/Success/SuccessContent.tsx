'use client';
import { Logitech, Right } from '@/components/icons';
import { FC } from 'react';

interface SuccessType {
  title: string;
  text: string;
  desc: string;
  image: string;
}

const SuccessContent: FC<{ data: SuccessType }> = ({ data }) => {
  return (
    <section className="bg-[#E7EBFC]  mt-37.5 flex w-full h-[700px] container max-w-7xl mx-auto">
      <div className="flex flex-col pt-[120px] ml-[95px] w-[588px]">
        <h1 className="text-[42px] mb-8 font-bold">{data.title}</h1>
        <p className="text-[42px] mb-8">{data.desc}</p>
        <span>
          <Logitech />
        </span>
        <p className="text-[#2E4FD7] font-bold">{data.text}🔜</p>
        <span className="text-[50px] text-[#B4B4B4]">
          <span className="text-[#2E4FD7]">.</span>..
        </span>
      </div>
      <div className="flex items-center ml-54">
        <img src={data.image} className="w-[380px] h-[420px]" alt="" />
      </div>
    </section>
  );
};

export default SuccessContent;
