import Image from 'next/image';
import React from 'react';

const ImageSubsription = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="logo-subcription"
      height={170}
      width={170}
      className="rounded-full object-cover w-7 h-7"
    />
  );
};

export default ImageSubsription;
