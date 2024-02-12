import Image from 'next/image';
import React from 'react';

const ImageSubsription = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="logo-subcription"
      height={170}
      width={170}
      className="rounded-full object-cover w-6 h-6"
    />
  );
};

export default ImageSubsription;
