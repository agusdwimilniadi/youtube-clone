import React from 'react';
import ImageSubsription from '../ImageSubscription';
import { GoCheckCircleFill } from 'react-icons/go';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoMdMore } from 'react-icons/io';

const CardContent = ({
  title,
  accountName,
}: {
  title: string;
  accountName: string;
}) => {
  return (
    <div className="flex gap-3 mt-2 justify-between items-start group">
      <div className="flex gap-3">
        <div>
          <ImageSubsription src="/assets/subs/subs-deankt.jpeg" />
        </div>
        <div>
          <p className="font-black mb-1">{title}</p>
          <div className="text-white/50 text-sm ">
            <p className=" flex items-center gap-1">
              {accountName} <FaCircleCheck size={9} />
            </p>
            <p>1,3 jt x ditonton ∙ 45 menit yang lalu </p>
          </div>
        </div>
      </div>
      <button>
        <span className="hidden group-hover:block">
          <IoMdMore size={23} />
        </span>
      </button>
    </div>
  );
};

export default CardContent;
