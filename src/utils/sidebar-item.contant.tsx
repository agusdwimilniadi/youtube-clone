import ImageSubsription from '@/components/atoms/ImageSubscription';
import { BsPersonSquare } from 'react-icons/bs';
import {
  GoClock,
  GoHistory,
  GoHomeFill,
  GoSidebarExpand,
  GoVideo,
} from 'react-icons/go';
import { MdExpandMore, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';

export interface ISidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
}
export const SIDEBAR_ITEM_HOME: ISidebarItem[] = [
  {
    icon: <GoHomeFill size={20} />,
    label: 'Beranda',
    isActive: true,
    href: '/',
  },
  {
    icon: <SiYoutubeshorts size={20} />,
    label: 'Shorts',
    href: '/shorts',
    isActive: false,
  },
  {
    icon: <MdOutlineSubscriptions size={20} />,
    label: 'Subscription',
    href: '/subscription',
    isActive: false,
  },
];
export const SIDEBAR_ITEM_ANDA: ISidebarItem[] = [
  {
    icon: <BsPersonSquare size={20} />,
    href: '/channel-anda',
    label: 'Channel Anda',
    isActive: false,
  },
  {
    icon: <GoHistory size={20} />,
    href: '/channel-anda',
    label: 'Histori',
    isActive: false,
  },
  {
    icon: <GoVideo size={20} />,
    href: '/video-anda',
    label: 'Video Anda',
    isActive: false,
  },
  {
    icon: <GoClock size={20} />,
    href: '/tonton-nanti',
    label: 'Tonton Nanti',
    isActive: false,
  },
  {
    icon: <MdExpandMore size={20} />,
    href: '#',
    label: 'Lebih Banyak',
    isActive: false,
  },
];
export const SIDEBAR_ITEM_SUBSCRIPTION: ISidebarItem[] = [
  {
    icon: <ImageSubsription src="/assets/subs/subs-cjm.png" />,
    href: '#',
    label: 'CJM',
    isActive: false,
  },
  {
    icon: <ImageSubsription src="/assets/subs/subs-deankt.jpeg" />,
    href: '#',
    label: 'DEANKT',
    isActive: false,
  },
  {
    icon: <ImageSubsription src="/assets/subs/subs-jess.jpeg" />,
    href: '#',
    label: 'Jess No Limit',
    isActive: false,
  },
  {
    icon: <ImageSubsription src="/assets/subs/subs-windah.jpeg" />,
    href: '#',
    label: 'Windah Basudara',
    isActive: false,
  },
];
