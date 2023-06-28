import { Suspense } from "react";
import { LocationResponse } from "@/types";
import { Paginate } from "@/components/location/pagination";
import { getLocations } from "@/services";
import Card from "@/components/location/card";
import Loading from "@/app/loading";
import Filter from "@/components/location/filter";

async function Location({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const page = (searchParams?.page as string) ?? "1";
  const search = (searchParams?.search as string) ?? "";

  const data: LocationResponse = await getLocations(page, search);

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

export default Location;
