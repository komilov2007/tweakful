import {
  Amazon,
  Faceebook,
  Google,
  Linkedin,
  Logitech,
  Philips,
  Right,
} from '@/components/icons';
import { FC } from 'react';

interface ActionType {
  id: string;
  title: string;
  text: string;
}

const ActionContent: FC<{ data: ActionType }> = ({ data }) => {
  return (
    <section className="container max-w-7xl text-center mx-auto pt-26">
      <h2 className="font-bold text-[52px]">{data.title}</h2>
      <p className="text-[18px] pt-6">{data.text}</p>
      <div className="flex items-center justify-between mt-[60px]">
        <button className="flex items-center justify-between w-[198px] h-[56px] px-4 rounded-md bg-[#2E4FD7] ml-135 text-white font-medium hover:bg-blue-700 transition">
          <span>Book A Meeting</span>
          <Right />
        </button>
      </div>
      <div>
        <div className="h-[2px] w-full bg-gray-400 mt-10"></div>
        <div className="flex mt-13 items-center justify-between">
          <Philips />
          <Logitech />
          <Amazon />
          <Faceebook />
          <Google />
          <Linkedin />
        </div>
      </div>
    </section>
  );
};

export default ActionContent;
