import { getRequest } from '@/services';
import SuccessContent from './SuccessContent';

const Success = async () => {
  const data = await getRequest('/success-data');
  return <SuccessContent data={data} />;
};

export default Success;
