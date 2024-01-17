import { useGameStore } from "../../../store/store";

type PointsType = {
  content: string;
  point: number;
};

function PointsContent({ content, point }: PointsType) {
  return (
    <div className="flex w-full font-semibold flex-col items-center gap-1 text-gray-2/50">
      <h2 className="text-[1.7rem] w-full text-center ">{content}</h2>
      <p className="text-4xl"> {point}</p>
    </div>
  );
}

const Points = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <PointsContent content="Points Remaining" point={40} />
      <PointsContent content="Points Allocated" point={0} />
    </div>
  );
};

export default Points;
