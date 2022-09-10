import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { IMG } from "../../assets";

function CarouselComponent({ headlines }) {
  const onChange = () => {};
  const onClickItem = () => {};
  const onClickThumb = () => {};

  const images = [IMG.blackPepper, IMG.crispynori, IMG.hoke, IMG.pudding];

  return (
    <div className="px-4">
      <div className="hidden lg:display">
        <Image
          src={"https://www.hokben.co.id/assets/img/bgslide-l.png"}
          width={131}
          height={352}
          objectFit="contain"
          className="hidden lg:display"
        />
      </div>
      <div className="lg:flex lg:w-full lg:justify-center">
      <Carousel
        autoPlay
        swipeabljustify-cente
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <div
            onClick={onClickHandler}
            title={label}
            className="md:hidden hidden lg:block p-[12px] bottom-[50%] mr-[9%] lg:ml-[2%] z-20 absolute cursor-pointer border-2 rounded"
          >
            <ArrowLeftIcon className="text-white w-[22px] h-[22px]" />
          </div>
        )}
        renderArrowNext={(onClickHandler, hasPrev, label) => (
          <div
            onClick={onClickHandler}
            title={label}
            className="md:hidden hidden lg:block p-[12px] bottom-[50%] right-0 mr-[9%] lg:mr-[3%] z-20 absolute cursor-pointer border-2 rounded"
          >
            <ArrowRightIcon className="text-white w-[22px] h-[22px]" />
          </div>
        )}
        className="relative lg:w-[900px] rounded-lg"
      >
        {images.map((item, index) => {
          return (
              <div className="w-full h-[370px] lg:w-full lg:h-[428px] relative rounded-lg" key={index}>
                <Image
                  src={item}
                  alt={item?.gambar || ""}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
          );
        })}
      </Carousel>
      </div>
      <div className="hidden lg:display">
        <Image
          src={"https://www.hokben.co.id/assets/img/bgslide-r.png"}
          width={131}
          height={352}
          objectFit="contain"
          className="hidden lg:display"
        />
      </div>
    </div>
  );
}

export default CarouselComponent;
