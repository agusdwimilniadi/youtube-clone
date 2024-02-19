import ImageThumbnail from '@/components/atoms/ImageThumbnail';
import React from 'react';
import CardContent from '@/components/atoms/CardContent';
import Link from 'next/link';

const CardVideo = ({
  thumbnail,
  title,
  accountName,
}: {
  thumbnail: string;
  title: string;
  accountName: string;
}) => {
  return (
    <Link href={'/12345'}>
      <ImageThumbnail thumbnail={thumbnail} />
      <CardContent accountName={accountName} title={title} />
    </Link>
  );
};

export default CardVideo;
