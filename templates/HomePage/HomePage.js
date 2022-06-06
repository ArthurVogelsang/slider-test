import React from "react";
import SlickSlider from "../../components/SlickSlider";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1128,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        }
      },
    ]
  };
  const items = [
    {
      img: '/imgs/slider1.svg',
      title: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      hostIn: 'Client in Atlanta'
    },
    {
      img: '/imgs/slider1.svg',
      title: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      hostIn: 'Client in Atlanta'
    },
    {
      img: '/imgs/slider1.svg',
      title: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      hostIn: 'Client in Atlanta'
    },
    {
      img: '/imgs/slider1.svg',
      title: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      hostIn: 'Client in Atlanta'
    },
    {
      img: '/imgs/slider1.svg',
      title: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      hostIn: 'Client in Atlanta'
    },
  ]
  return (
    <div className=''>
      <div className='w-full text-left sm:text-center text-2xl sm:text-6xl leading-8 sm:leading-[64px] mb-6 sm:mb-14'>Don’t trust us,<br />trust our clients</div>
      <SlickSlider settings={settings} items={items} />
    </div>
  );
}

export default HomePage;
