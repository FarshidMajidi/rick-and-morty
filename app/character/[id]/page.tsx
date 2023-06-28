import { Suspense } from "react";
import { CharacterDetail } from "@/types";
import { getDetailCharacter } from "@/services";
import Loading from "@/app/loading";
import ListEpisode from "@/components/list";
import Detail from "@/components/character/detail";

async function DetailCharacter({ params }: { params: { id: string } }) {
  const data: CharacterDetail = await getDetailCharacter(params.id);

  return (
    <div className="flex justify-center w-full flex-wrap">
      <Suspense fallback={<Loading />}>
        <div className="flex w-full">
          <div className="flex w-fit">
            <Detail item={data} />
          </div>

          <div className="flex w-fit">
            <ListEpisode items={data.episode} title="Episode List" />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default DetailCharacter;
