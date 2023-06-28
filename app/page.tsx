import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Link
        href={{
          pathname: "/character",
          query: { page: 1 },
        }}
        className="flex items-center justify-center w-fit px-4 py-3 h-8 rounded-xl font-bold text-lg hover:bg-slate-300 "
      >
        Character List
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link
        href={{
          pathname: "/location",
          query: { page: 1 },
        }}
        className="flex items-center justify-center w-fit px-4 py-3 h-8 rounded-xl font-bold text-lg hover:bg-slate-300 "
      >
        Location List
      </Link>
    </div>
  );
}
