import { FC } from 'react';


interface IEventUser {
  title?: string;
  subtitle?: string;
  events: Publication[];
}

export const EventUser: FC<IEventUser> = ({events}) => {
  return (
    <div>
      <div className="relative flex flex-wrap justify-around">
        {events?.map((event) => {
          return (
            <div key={event.id}>
              <div className=" border border-app-grayLight shadow-lg shadow-app-gray/50 rounded-[20px] my-2 mx-1 w-[300px] h-[454px]">
                <div className="h-[239px]">
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
                      <span>{event.votes_count}</span>
                    </div>
                  </div>
                  <div
                    id="corazon"
                    className="relative top-[-221px]  left-[215px]"
                  >
                    {/*<img src="/public/img/like.svg" alt="">*/}
                    <img
                      src="like.svg"
                      alt="mock"
                      className="cursor-pointer "
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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

    </button>
  );
};

