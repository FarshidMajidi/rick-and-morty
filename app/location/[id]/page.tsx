import { Suspense } from "react";
import { LocationDetail } from "@/types";
import { getDetailLocation } from "@/services";
import ListEpisode from "@/components/list";
import Loading from "@/app/loading";
import Detail from "@/components/location/detail";

async function DetailLocation({ params }: { params: { id: string } }) {
  const data: LocationDetail = await getDetailLocation(params.id);

  return (
    <div className="flex justify-center w-full flex-wrap">
      <Suspense fallback={<Loading />}>
        <div className="flex w-full">
          <div className="flex w-fit">
            <Detail item={data} />
          </div>

          <div className="flex w-fit">
            <ListEpisode
              items={data.residents}
              title="Resident/Character List"
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default DetailLocation;
