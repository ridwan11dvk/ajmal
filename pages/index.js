import Image from "next/image";
import { Carousel, Header } from "../components";

export default function Home() {
  let data = [
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
    {
      name: "HOKA HEMAT 3",
      japan: "お得なセット",
      price: "Rp. 26.500",
    },
  ];

  return (
    <div>
      <Header />
      <Carousel />
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full flex justify-center py-4">
          <span className="text-red-600 font-bold text-2xl text-center">
            RECCOMENDATION
          </span>
        </div>
        {/* Card */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-4">
          {data.map((item, index) => {
            return (
              <div>
                <div
                  className="mx-auto p-4 flex flex-col justify-center items-center gap-4 border rounded-xl border-gray-200"
                  key={index}
                >
                  <div className="relative w-[100px] h-[90px] ">
                    <Image
                      src={
                        "https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/db0a4a72f3cb8702f80bddd07230e937-1660019366755"
                      }
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <span className="font-bold text-sm lg:text-base">
                    {item.name}
                  </span>
                  <span className="font-bold text-sm lg:text-base">
                    {item.japan}
                  </span>
                  <span className="font-bold text-sm lg:text-base text-red-600">
                    {item.price}
                  </span>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="font-bold text-sm lg:text-base text-red-600 underline">
                      Details
                    </span>
                    <div className="px-[12px] py-[6px] bg-[#FFB400] text-black rounded-full font-bold text-sm lg:text-base">
                      + Order
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 items-center justify-center bg-[rgb(255,180,0)] p-[15px] lg:p-0 lg:py-4 py-0">
          <div className="relative h-[50px] w-[50px]">
            <Image
              src={"https://www.hokben.co.id/assets/img/img_banner_2_6.png"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <span className="text-2xl font-bold">We Make Sure</span>
          <div className="w-[350px] text-center">
            <span className="text-3xl font-bold text-red-600">
              Products will be delivered on time
            </span>
          </div>
          <p className="text-center font-bold">
            If you’re having a meeting, working late at night and need an extra
            push.
          </p>
          <p className="text-center font-bold">
            Let us know and we will be there
          </p>
        </div>
        <div className="flex lg:flex-row w-full">
          <div className="py-4 px-4 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">Links</span>
            <div className="grid grid-cols-2 gap-3 text-center pt-4">
              <span className="text-base font-bold text-gray-400">
                About us
              </span>
              <span className="text-base font-bold text-gray-400">
                Contact us
              </span>
              <span className="text-base font-bold text-gray-400">
                Terms And Conditions
              </span>
              <span className="text-base font-bold text-gray-400">
                Privacy Policy
              </span>
              <span className="text-base font-bold text-gray-400">
                Order Tracking
              </span>
            </div>
          </div>
          <div className="py-4 px-4 flex flex-col items-center justify-center gap-4">
            <div className="relative h-[150px] w-[150px]">
              <Image
                src={"https://www.hokben.co.id/assets/img/hokbendelivery.png"}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
          {/* <div className="py-4 px-4">
            <span className="text-2xl font-bold">FOLLOW US</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
