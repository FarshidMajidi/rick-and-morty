import React from "react";
import Link from "next/link";
import { Location } from "@/types";

const Card = ({ items }: { items: Location[] }) => {
  let display: string | JSX.Element[];

  items
    ? (display = items.map((location) => {
        return (
          <Link
            key={location.id}
            href={`/location/${location.id}`}
            className="p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 flex flex-grow-0 flex-shrink-0 flex-col w-[220px] rounded-lg overflow-hidden mt-0 mx-2 mb-2"
          >
            <h5 className="mb-2 text-lg  font-bold tracking-tight">
              {location.name}
            </h5>
            <div className="flex flex-col">
              <div className="text-[#9E9E9E]">type:</div>
              <div className="text-[16px] text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
                {location.type}
              </div>
            </div>
          </Link>
        );
      }))
    : (display = "No Characters Found :/");

  return display;
};

export default Card;
