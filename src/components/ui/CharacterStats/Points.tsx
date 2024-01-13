type PointsType = {
  content: string;
  point: number;
};

function PointsContent({ content, point }: PointsType) {
  return (
    <div className="flex w-full flex-col items-center gap-1 text-4xl text-gray-2/50">
      <h2 className="text-2xl ">{content}</h2>
      <p>{point}</p>
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
