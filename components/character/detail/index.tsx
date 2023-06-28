import Image from "next/image";
import Link from "next/link";
import { CharacterDetail } from "@/types";

const Detail = ({ item }: { item: CharacterDetail }) => {
  const { name, species, gender, origin, location, image, status } = item;
  const splitLocation = location.url.split("/");

  return (
    <div className="flex flex-grow-0 flex-shrink-0 flex-col w-fit rounded-lg overflow-hidden shadow-lg mt-0 mx-2 mb-2 relative">
      <div className="overflow-hidden">
        <Image
          width={200}
          height={220}
          src={image}
          className="object-cover h-auto w-auto"
          alt=""
        />
      </div>
      <div className="p-[.5rem] flex flex-col gap-[.5rem]">
        <div>
          <div className="text-[16px] font-bold">{name}</div>
          <div className="flex gap-[.2rem]">
            <div>{gender}</div>
            <div> - </div>
            <div>{species}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#9E9E9E]">Last know location:</div>
          <div className="text-[16px]">
            <Link
              className="underline"
              href={`/location/${splitLocation[splitLocation.length - 1]}`}
            >
              {location?.name}
            </Link>
            ;
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#9E9E9E]">Origin:</div>
          <div className="text-[16px]">{origin?.name}</div>
        </div>
      </div>

      {(() => {
        if (status === "Dead") {
          return (
            <div className="absolute top-[5px] left-[10px]">
              <div className="flex items-center gap-[.5rem]">
                <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
                <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                <div className="text-white">{status}</div>
              </div>
            </div>
          );
        } else if (status === "Alive") {
          return (
            <div className="absolute top-[5px] left-[10px]">
              <div className="flex items-center gap-[.5rem]">
                <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                <div className="text-white">{status}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="absolute top-[5px] left-[10px]">
              <div className="flex items-center gap-[.5rem]">
                <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-400 opacity-75" />
                <div className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                <div className="text-white">{status}</div>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Detail;
