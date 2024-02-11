import React from 'react';
import Navbar from '../organism/Navbar';
import ButtonItemSidebar from '../atoms/ButtonItemSidebar';
import {
  ISidebarItem,
  SIDEBAR_ITEM_ANDA,
  SIDEBAR_ITEM_HOME,
  SIDEBAR_ITEM_SUBSCRIPTION,
} from '@/utils/sidebar-item.contant';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[15vw] flex flex-col gap-2 h-[89vh] overflow-y-scroll">
          {/* HOME */}
          {SIDEBAR_ITEM_HOME.map((item: ISidebarItem) => (
            <ButtonItemSidebar
              href={item.href}
              key={item.href}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/15 mx-3"></div>
          <ButtonItemSidebar href="#">Anda {'>'}</ButtonItemSidebar>
          {/* ANDA */}
          {SIDEBAR_ITEM_ANDA.map((item: ISidebarItem) => (
            <ButtonItemSidebar
              href={item.href}
              key={item.href}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/15 mx-3"></div>
          <p className="mx-5 font-semibold text-sm">Subscription</p>
          {SIDEBAR_ITEM_SUBSCRIPTION.map((item: ISidebarItem) => (
            <ButtonItemSidebar
              href={item.href}
              key={item.href}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
