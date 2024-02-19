import Button from '@/components/atoms/Button';
import ButtonFlat from '@/components/atoms/ButtonFlat';
import Image from 'next/image';
import React from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { IoIosArrowDown, IoIosMore } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdNotificationsActive } from 'react-icons/md';
import { RiDownloadLine, RiShareForwardLine } from 'react-icons/ri';

const VideoPlayer = () => {
  return (
    <div className="h-screen">
      <div className="h-[70vh]">
        <iframe
          width={'100%'}
          height={'100%'}
          src="https://www.youtube.com/embed/a7AO3-mTT8A?si=wuKoDGxdqY_vWc12"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        />
      </div>
      <h1 className="my-3 text-xl font-bold">
        🔴 LIVE | LIBAS PRESIDEN MABAR | GRATIS KAOS ADIK2
      </h1>
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={'/assets/subs/subs-deankt.jpeg'}
              alt="logo-user"
              width={100}
              height={100}
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium flex items-center gap-1">
              DEANKT <IoCheckmarkCircle color="#aaaaaa" />
            </h3>
            <p className="text-[11px] text-white/50">837 rb subscriber</p>
          </div>
          <div className="flex ms-5 gap-3">
            <ButtonFlat>Lihat Keuntungan</ButtonFlat>
            <ButtonFlat>
              <MdNotificationsActive size={20} />
              Disubscribe
              <IoIosArrowDown size={17} />
            </ButtonFlat>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <button className="flex items-center gap-1 py-2 px-4 rounded-s-full hover:bg-white/50 bg-white/20 text-xs relative">
              <AiOutlineLike size={17} />
              1000 jt
              <div className="absolute w-px bg-white/30 h-[60%] right-0"></div>
            </button>
            <button className="flex  items-center gap-1 py-2 px-4 rounded-e-full hover:bg-white/50 bg-white/20">
              <AiOutlineDislike size={17} />
            </button>
          </div>
          <ButtonFlat>
            <RiShareForwardLine size={17} />
            Bagikan
          </ButtonFlat>
          <ButtonFlat>
            <RiDownloadLine size={17} />
            Download
          </ButtonFlat>
          <ButtonFlat>
            <IoIosMore size={17} />
          </ButtonFlat>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
