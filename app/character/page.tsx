import { Suspense } from "react";
import { Card } from "@/components/character/card";
import { CharacterResponse } from "@/types";
import { Paginate } from "@/components/character/pagination";
import { getCharacters } from "@/services";
import Filter from "@/components/character/filter";
import Loading from "@/app/loading";

async function Character({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const page = (searchParams?.page as string) ?? "1";
  const search = (searchParams?.search as string) ?? "";
  const gender = (searchParams?.gender as string) ?? "";

  const data: CharacterResponse = await getCharacters(page, search, gender);

  return (
    <div className="flex justify-center w-full flex-wrap">
      <Suspense fallback={<Loading />}>
        <Filter />
        {data?.results ? (
          <>
            <Card items={data.results} />
            <div className="flex w-full items-center justify-center py-9">
              <Paginate pageNumber={+page} info={data.info} />
            </div>
          </>
        ) : (
          <p>no result</p>
        )}
      </Suspense>
    </div>
  );
}

export default Character;
