import { FC } from 'react';

interface ProcessType {
  id: string;
  text: string;
  desc: string;
}

const ProcessContent: FC<{ data: ProcessType }> = ({ data }) => {
  return (
    <div>
      <div className="w-[285px]">
        <div className="flex gap-7 items-center">
          <div className="w-9 h-9 bg-blue-700 rounded-full"></div>
          <p className="text-gray-400">. . . . . . . . . . . . . . . .</p>
        </div>

        <h2 className="text-[24px] font-bold mt-4">{data.text}</h2>
        <p className="text-gray-500 mt-2">{data.desc}</p>
      </div>
    </div>
  );
};

export default ProcessContent;
