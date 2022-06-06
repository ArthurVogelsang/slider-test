import React, { useState } from "react";
import MultiCarousel from "react-multi-carousel";
import ElasticCarousel from 'react-elastic-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import ArrowButton from "../ArrowButton";
import SliderItem from "../SliderItem/SliderItem";

function SlickSlider({
  items,
}) {
  const elasticSlider = React.useRef(null);
  const multiSlider = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(1)

  const onPreviousSlider = () => {
    elasticSlider.current && elasticSlider.current.slidePrev();
    multiSlider.current && multiSlider.current.previous();
  };
  const onNextSlider = () => {
    elasticSlider.current && elasticSlider.current.slideNext();
    multiSlider.current && multiSlider.current.next();
  };

  return (
    <div className='relative w-full'>
      <div className='block md:hidden'>
        <MultiCarousel
          ref={multiSlider}
          arrows={false}
          autoPlay={null}
          autoPlaySpeed={99999}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          partialVisible
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable={false}
        >
          {items.map((_item, _i) =>
            // <div key={_i} className='w-full h-[300px] bg-amber-600' />
            <SliderItem
              key={_i}
              img={_item.img}
              title={_item.title}
              hostIn={_item.hostIn}
            />
          )}
        </MultiCarousel>
      </div>
      <div className='hidden md:block'>
        <ElasticCarousel
          ref={elasticSlider}
          itemPadding={[0, 9]}
          itemsToShow={3}
          outerSpacing={30}
          showArrows={false}
          pagination={false}
          initialActiveIndex={1}
          onChange={(currentItem, pageIndex) => {
            console.log(currentItem.index)
            setActiveIndex(currentItem.index)
          }}
        >
          {items.map((_item, _i) =>
            <SliderItem
              key={_i}
              img={_item.img}
              title={_item.title}
              hostIn={_item.hostIn}
              fucused={activeIndex == _i}
            />
          )}
        </ElasticCarousel>
      </div>
      <div className={`absolute bottom-0 right-4 sm:right-[calc(33.3%+54px)] flex gap-2 justify-end`}>
        <ArrowButton
          icon={<FiChevronLeft size={24} />}
          disabled={activeIndex === 0}
          onClick={onPreviousSlider}
        />
        <ArrowButton
          icon={<FiChevronRight size={24} />}
          disabled={activeIndex === items.length - 1}
          onClick={onNextSlider}
        />
      </div>
    </div>
  );
}

export default SlickSlider;
