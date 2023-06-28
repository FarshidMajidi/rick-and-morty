import { LocationDetail } from "@/types";

const Detail = ({ item }: { item: LocationDetail }) => {
  const { name, type, dimension } = item;

  return (
    <div className="p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 flex flex-grow-0 flex-shrink-0 flex-col w-[220px] rounded-lg overflow-hidden mt-0 mx-2 mb-2">
      <h5 className="mb-2 text-lg  font-bold tracking-tight">{name}</h5>
      <div className="flex flex-col">
        <div className="text-[#9E9E9E]">type:</div>
        <div className="text-[16px] text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
          {type}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[#9E9E9E]">dimension:</div>
        <div className="text-[16px] text-ellipsis overflow-hidden w-[200px] whitespace-nowrap">
          {dimension}
        </div>
      </div>
    </div>
  );
};

export default Detail;
