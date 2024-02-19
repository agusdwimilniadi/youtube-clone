'use client';
import React, { useState } from 'react';
import Navbar from '../organism/Navbar';
import ButtonItemSidebar from '../atoms/ButtonItemSidebar';
import {
  ISidebarItem,
  SIDEBAR_ITEM_ANDA,
  SIDEBAR_ITEM_EXPLORASI,
  SIDEBAR_ITEM_HOME,
  SIDEBAR_ITEM_SETELAN,
  SIDEBAR_ITEM_SUBSCRIPTION,
} from '@/utils/sidebar-item.contant';
import SidebarItemLayout from '../atoms/SidebarItemLayout';
import Link from 'next/link';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);
  return (
    <>
      <Navbar
        onClikNavbar={() => {
          setIsOpenMobileNav(!isOpenMobileNav);
        }}
      />
      <div className="flex ">
        {isOpenMobileNav ? (
          <div className="w-[6vw]">
            {SIDEBAR_ITEM_HOME.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="block m-2 p-2 rounded hover:bg-white/20"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {item.icon}
                  <p className="text-[9px]">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-[17vw] flex flex-col gap-2 h-[89vh] overflow-y-scroll">
            {/* HOME */}
            <SidebarItemLayout isNotHaveTitle>
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
            </SidebarItemLayout>
            {/* ANDA */}
            <SidebarItemLayout isNotHaveTitle>
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
            </SidebarItemLayout>
            <SidebarItemLayout title="Subscription">
              {SIDEBAR_ITEM_SUBSCRIPTION.map((item: ISidebarItem) => (
                <ButtonItemSidebar
                  isLive
                  href={item.href}
                  key={item.href}
                  isActive={item.isActive}
                >
                  {item.icon}
                  <span className="line-clamp-1">{item.label}</span>
                </ButtonItemSidebar>
              ))}
            </SidebarItemLayout>
            <SidebarItemLayout title="Eksplorasi">
              {SIDEBAR_ITEM_EXPLORASI.map((item: ISidebarItem) => (
                <ButtonItemSidebar
                  href={item.href}
                  key={item.href}
                  isActive={item.isActive}
                >
                  {item.icon}
                  <span className="line-clamp-1">{item.label}</span>
                </ButtonItemSidebar>
              ))}
            </SidebarItemLayout>
            <SidebarItemLayout>
              {SIDEBAR_ITEM_SETELAN.map((item: ISidebarItem) => (
                <ButtonItemSidebar
                  href={item.href}
                  key={item.href}
                  isActive={item.isActive}
                >
                  {item.icon}
                  <span className="line-clamp-1">{item.label}</span>
                </ButtonItemSidebar>
              ))}
            </SidebarItemLayout>
          </div>
        )}
        <div className="grow px-3 py-1">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
