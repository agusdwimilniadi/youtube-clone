import VideoPlayer from '@/components/organism/VideoPlayer';
import HomeLayout from '@/components/templates/HomeLayout';
import React from 'react';

const DetailVideo = () => {
  7 / 3;
  3 / 2;

  return (
    <HomeLayout isDetail>
      <div className="grid grid-cols-10 mt-5 mx-10">
        <div className="col-span-7">
          <VideoPlayer />
        </div>
        <div className="col-span-3">List Video</div>
      </div>
    </HomeLayout>
  );
};

export default DetailVideo;
