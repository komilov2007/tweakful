import { getRequest } from '@/services';
import ProcessContent from './ProcessContent';

interface ProcessType {
  id: string;
  title?: string;
  text: string;
  desc: string;
}

const Process = async () => {
  const data: ProcessType[] = await getRequest('/process-data');

  return (
    <section className="max-w-7xl mx-auto mt-37.5 py-20">
      <h1 className="text-[42px] font-bold mb-15">The process we follow</h1>

      <div className="flex gap-10">
        {data.map((item: ProcessType) => (
          <ProcessContent key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Process;
