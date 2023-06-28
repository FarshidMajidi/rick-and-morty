import { Character } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToFavorite from "@/components/character/favorite/add-favorite";

export const Card = ({ items }: { items: Character[] }) => {
  let display: string | JSX.Element[];
  items
    ? (display = items.map((item) => {
        const { id, name, species, gender, origin, location, image } = item;

        return (
          <div
            key={id}
            className="flex flex-grow-0 flex-shrink-0 flex-col w-fit rounded-lg overflow-hidden mt-0 mx-2 mb-2"
          >
            <Link href={`/character/${id}`}>
              <div className="overflow-hidden">
                <Image
                  width={200}
                  height={220}
                  src={image}
                  className="object-cover h-auto w-auto"
                  alt=""
                />
              </div>
            </Link>
            <div className="p-[.5rem] flex flex-col gap-[.5rem]">
              <div>
                <div className="flex justify-between w-full text-[16px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                  {name}
                  <AddToFavorite name={name} />
                </div>
                <div className="flex gap-[.2rem]">
                  <div>{gender}</div>
                  <div> - </div>
                  <div>{species}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#9E9E9E]">Last know location:</div>
                <div className="text-[16px] text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
                  {location?.name}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#9E9E9E]">Origin:</div>
                <div className="text-[16px] text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
                  {origin?.name}
                </div>
              </div>
            </div>
          </div>
        );
      }))
    : (display = "No Characters Found :/");

  return <>{display}</>;
};
