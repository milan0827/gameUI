import CountButton from "../Button/CountButton";

type Props = {};

const Progress = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-8 mb-2">
      <span className="text-gray-2/80">Strength</span>
      <div className="w-[24rem] h-4 bg-gray-2/60 rounded-lg"></div>
      <div className="flex items-center justify-center gap-4">
        <CountButton btnName="-" />
        <span className="text-gray-2/80 font-semibold text-xl">12</span>
        <CountButton btnName="+" />
      </div>
    </div>
  );
};

export default Progress;
