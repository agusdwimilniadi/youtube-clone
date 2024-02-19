import Image from 'next/image';
import React from 'react';

const ImageThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <div className="relative">
      <Image
        width={500}
        height={500}
        src={thumbnail}
        alt="thumb-youtube"
        className="w-full h-full rounded-lg object-cover object-center"
      />
      <span className="bg-black absolute bottom-2 right-2 text-xs px-2 py-1">
        2.11.57
      </span>
    </div>
  );
};

export default ImageThumbnail;
