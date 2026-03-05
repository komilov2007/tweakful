import { getRequest } from '@/services';
import FooterContent from './FooterContent';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  id: string;
  links: FooterLink[];
};

interface FooterType {
  brand: {
    title: string;
    aboutTitle: string;
    aboutText: string;
    buttonText: string;
    buttonHref: string;
  };
  columns: FooterColumn[];
  bottom: {
    leftText: string;
    rightText: string;
  };
}

const Footer = async () => {
  const data: FooterType = await getRequest('/footer-data');

  return <FooterContent data={data} />;
};

export default Footer;
