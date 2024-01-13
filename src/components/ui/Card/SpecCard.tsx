import CardHeader from "./CardHeader";
import CharacterStats from "../CharacterStats/CharacterStats";
import Points from "../CharacterStats/Points";
import ArrowButton from "../Button/ArrowButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image1 from "./../../../assets/images/weapon-image.png";

type CharacterStatOptionType = {
  skillLabel: string;
  skillPoints: number;
};

type SkillType = {
  id: number;
  skill: string;
};

const CHARACTER_STAT_OPTION: CharacterStatOptionType[] = [
  { skillLabel: "strength", skillPoints: 40 },
  { skillLabel: "Agility", skillPoints: 40 },
  { skillLabel: "Magic", skillPoints: 40 },
  { skillLabel: "Vitality", skillPoints: 40 },
  { skillLabel: "Luck", skillPoints: 40 },
];

const SKILL: SkillType[] = [
  {
    id: 1,
    skill: "Whirland Slash",
  },
  {
    id: 2,
    skill: "Sword Mastery",
  },
  {
    id: 3,
    skill: "Battle Tactics",
  },
  {
    id: 4,
    skill: "Brutal Strike",
  },
  {
    id: 3,
    skill: "Shield Rush",
  },
  {
    id: 3,
    skill: "War Cry",
  },
  {
    id: 3,
    skill: "Repel Counter",
  },
  {
    id: 3,
    skill: "Armor Proficincy",
  },
  {
    id: 3,
    skill: "Triple Slash",
  },
  {
    id: 3,
    skill: "Whirland Slash",
  },
  {
    id: 3,
    skill: "Blade Rush",
  },
  {
    id: 3,
    skill: "Berserker Rush",
  },
];

const SpecCard = () => {
  return (
    <div className="relative col-spec-col mb-8 mr-8 rounded-[40px] bg-gray-1/40 p-10 backdrop-blur-[8px]">
      <CardHeader title="Character Stats" />
      <div className="mt-6 flex items-center justify-center gap-8">
        <ul className="flex flex-col items-center justify-center">
          {CHARACTER_STAT_OPTION.map((skill) => (
            <CharacterStats
              skillLabel={skill.skillLabel}
              skillPoints={skill.skillPoints}
            />
          ))}
        </ul>
        <Points />
      </div>
      <hr className="absolute left-0 top-[45%] w-full" />
      <div className="mt-12 flex items-center gap-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <CardHeader title="Character Skills" />
            <p className="text-[0.8rem]">(Select 6 skills)</p>
          </div>
          <ul className="mt-6 flex w-[30rem] flex-wrap items-center gap-2 px-4 text-lg">
            {SKILL.map((skill) => (
              <li className="flex w-[12rem] items-center justify-start gap-4 text-center">
                <input type="radio" />
                <label>{skill.skill}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <CardHeader title="Choose Starting Weapon" />
          <div className="flex w-full items-center justify-between">
            <ArrowButton btnName={<FaArrowLeft />} />
            <img
              src={Image1}
              alt="Image"
              className=" drop-shadow-character transition-all duration-300 hover:scale-[1.2]"
            />

            <ArrowButton btnName={<FaArrowRight />} />
          </div>
          <p className=" text-shadow-shadowText text-2xl font-semibold drop-shadow-2xl">
            Azure Dragon Slayer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecCard;
