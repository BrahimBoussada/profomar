import { clients } from "@/lib/data";
import Image from "next/image";

export const Clients = () => {
  return (
    <div className="w-full pt-[4rem] mb-[0rem]  md:pt-[6rem]  md:mb-[5rem]">
      <h2 className="text-center text-primary font-bold tracking-widest font-ubuntu">
        TRUSTED BY THE BEST
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 auto-rows-auto gap-[2rem]  pt-[3rem]  ">
        {clients.map((client) => (
          <div key={client.path} className=" flex  items-center justify-center">
            <Image
              className="w-auto h-[56px] lg:h-[64px] select-none hover:scale-110 transition-all duration-300"
              src={client.path}
              alt={client.alt}
              width={0}
              height={0}
              quality={95}
              sizes="100%"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
