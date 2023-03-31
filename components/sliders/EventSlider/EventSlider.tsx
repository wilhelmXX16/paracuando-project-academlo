import { FC, useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: Publication[];
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  const [like, setLike] = useState(false);
  const clicklike = () => {
    setLike(!like);
  };
  return (
    <div>
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              {/* ------------Card Populares-----------------*/}
              <div>
                <div className=" border border-app-grayLight shadow-lg shadow-app-gray/50 rounded-[20px] my-2 mx-1 w-[300px] h-[454px]">
                  <div id="img" className="h-[239px]">
                    <img
                      src={
                        event.images
                          ? event.images[0].image_url
                          : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
                      }
                      alt="mock"
                      className="rounded-t-[20px] h-[239px]"
                    />
                  </div>
                  <div
                    id="inf"
                    className=" app-text-1 px-6 py-4 flex-col gap-4  relative"
                  >
                    <div id="informacion" className=" h-[130px]">
                      <a href="#" className="app-title-3 ">
                        {event.title}
                      </a>
                      <div className="relative max-h-[76px] min-h-[60px] overflow-hidden ">
                        <p className="w-full h-full  text-app-grayDark pt-2 ">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div id="link" className="flex-col flex gap-3  ">
                      <a
                        href="#"
                        className="text-app-subtitle-2 text-app-blue font-semibold"
                      >
                        {event.reference_link}
                      </a>
                      <div className="flex gap-2 items-center">
                        {/*<img src="/public/img/Vector.svg" alt="">*/}
                        <img src="Vector.svg" alt="mock" />
                        <span>{event.votes_count} votos</span>
                      </div>
                    </div>

                    {/* pruebas */}
                    <div className="relative top-[-221px]  left-[215px]">
                      <button
                        onClick={clicklike}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                      >
                        {like ? (
                          <img src="like.svg" alt="" />
                        ) : (
                          <img src="like2.svg" alt="" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -left-20 right-auto cursor-pointer origin-center rotate-180 ">
            <AntButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import { Publication } from '../../../lib/interfaces/publications.interface';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
//............................
interface ISAntButton {
  className?: string;
}
const AntButton = ({ className }: ISAntButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
