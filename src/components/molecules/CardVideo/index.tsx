import ImageThumbnail from '@/components/atoms/ImageThumbnail';
import React from 'react';
import CardContent from '@/components/atoms/CardContent';

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
    <div>
      <ImageThumbnail thumbnail={thumbnail} />
      <CardContent accountName={accountName} title={title} />
    </div>
  );
};

export default CardVideo;
