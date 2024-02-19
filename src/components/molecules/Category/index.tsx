import CategoryItem from '@/components/atoms/CategoryItem';
import React from 'react';
interface ICategory {
  title: string;
  isActive?: boolean;
}
const CATEGORY_DATA: ICategory[] = [
  {
    title: 'Semua',
    isActive: true,
  },
  {
    title: 'Game',
    isActive: false,
  },
  {
    title: 'Mix',
    isActive: false,
  },
  {
    title: 'Live',
    isActive: false,
  },
  {
    title: 'Music',
    isActive: false,
  },
  {
    title: 'Game Petualangan Aksi',
    isActive: false,
  },
  {
    title: 'Sepakbola',
    isActive: false,
  },
  {
    title: 'Memasak',
    isActive: false,
  },
  {
    title: 'Baru Diupload',
    isActive: false,
  },
  {
    title: 'Ditonton',
    isActive: false,
  },
  {
    title: 'Baru Untuk Anda',
    isActive: false,
  },
  {
    title: 'Ditonton',
    isActive: false,
  },
  {
    title: 'Baru Untuk Anda',
    isActive: false,
  },
  {
    title: 'Ditonton',
    isActive: false,
  },
  {
    title: 'Baru Untuk Anda',
    isActive: false,
  },
];
const Category = () => {
  return (
    <div className="flex gap-3 w-[83vw] overflow-x-scroll">
      {CATEGORY_DATA.map((item: ICategory) => (
        <CategoryItem
          key={item.title}
          title={item.title}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Category;
