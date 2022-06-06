import Image from "next/image";
import React from "react";

function SliderItem({
  img,
  title,
  hostIn,
  focused = false
}) {

  return (
    <div className='w-full pr-3 sm:pr-0'>
      <div className='relative w-full'>
        <div className='relative pt-[100%]'>
          <Image
            src={img}
            className=' top-0 w-full h-full'
            layout='fill'
            objectFit='cover'
            alt='slider-img'
          />
        </div>
        <div className={`slide-description ${focused ? 'focused' : 'no-focused'}`}>
          <div className='mt-9 sm:mt-12 text-base sm:text-[26px] font-light leading-8 -tracking-[0.02rem]'>{title}</div>
          <div className='mt-6 sm:mt-14 font-normal text-gray-600 leading-8 -tracking-[0.02rem]'>{hostIn}</div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
