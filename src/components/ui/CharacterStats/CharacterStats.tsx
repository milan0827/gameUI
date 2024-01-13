import { CharacterStatsType } from "../../../Shared/type";
import CountButton from "../Button/CountButton";

const CharacterStats = ({ skillLabel, skillPoints }: CharacterStatsType) => {
  return (
    <li className=" mb-2 flex items-center gap-8 text-start">
      <span className="block w-20 text-start text-[1.1rem] text-gray-2/80">
        {skillLabel}
      </span>
      <div className="relative h-4 w-[24rem] rounded-lg bg-gray-2/60 shadow-sm shadow-slate-900/80 before:absolute before:left-[0.1rem] before:top-[0.05rem] before:h-[0.9rem] before:w-20 before:rounded-full before:bg-bluish-white before:shadow-sm before:shadow-slate-900/60 before:content-['']"></div>
      <div className="flex w-[8rem] items-center justify-center gap-4">
        <CountButton btnName="-" />
        <span className="block w-10 text-center text-xl font-semibold text-gray-2/80">
          {skillPoints}
        </span>
        <CountButton btnName="+" />
      </div>
    </li>
  );
};

export default CharacterStats;
