import { getRequest } from '@/services';
import ActionContent from './ActionContent';

interface ActionType {
  id: string;
  title: string;
  text: string;
}

const Action = async () => {
  const data: ActionType[] = await getRequest('/action-data');

  return (
    <div className="h-[660px] bg-[#E7EBFC]">
      {data.map((item: ActionType) => (
        <ActionContent key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Action;
