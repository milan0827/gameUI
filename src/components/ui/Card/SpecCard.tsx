import CardHeader from "./CardHeader";
import Progress from "../Progress/Progress";
import Points from "../Progress/Points";

type Props = {};

const SpecCard = () => {
  return (
    <div className="col-spec-col backdrop-blur-[8px] bg-gray-1/40 p-12 rounded-[40px] mb-8 mr-8">
      <CardHeader title="Character Stats" />
      <div className="flex items-center justify-center gap-10">
        <div className="">
          <Progress />
          <Progress />
          <Progress />
          <Progress />
          <Progress />
        </div>
        <Points />
      </div>
    </div>
  );
};

export default SpecCard;
