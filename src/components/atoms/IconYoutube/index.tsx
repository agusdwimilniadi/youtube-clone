import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IconYoutube = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'/assets/images/youtube-icon.png'}
        alt="youtube-image"
        width={170}
        height={150}
        className="-ml-5"
      />
    </Link>
  );
};

export default IconYoutube;
