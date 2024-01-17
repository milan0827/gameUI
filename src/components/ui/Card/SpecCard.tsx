import CardHeader from "./CardHeader";
import CharacterStats from "../CharacterStats/CharacterStats";
import Points from "../CharacterStats/Points";
import ArrowButton from "../Button/ArrowButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image1 from "./../../../assets/images/weapon-image.png";
import { CHARACTER_STAT_OPTION, SKILL } from "../../../data";
import { SkillType } from "../../../Shared/type";
import { useState } from "react";
import { useGameStore } from "../../../store/store";

type SkillsType = {
  skills: SkillType;
};

function SkillItem({ skills }: SkillsType) {
  return (
    <li className="flex w-[12rem] items-center justify-start gap-4 text-center">
      <input type="radio" />
      <label>{skills.skill}</label>
    </li>
  );
}

const SpecCard = () => {
  const gameSkill = useGameStore((state) => state.gameSkill);
  console.log(gameSkill);

  return (
    <div className="relative col-spec-col mb-8 mr-8 rounded-[40px] bg-gray-1/40 p-10 backdrop-blur-[8px]">
      <CardHeader title="Character Stats" />
      <div className="flex items-center justify-between gap-4">
        <ul className="flex flex-col items-center justify-center">
          {gameSkill.map((skill) => (
            <CharacterStats
              skillLabel={skill.skillLabel}
              key={skill.skillLabel}
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
            {SKILL.map((skills: SkillType) => (
              <SkillItem skills={skills} />
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
          <p className=" text-2xl font-semibold drop-shadow-2xl text-shadow-shadowText">
            Azure Dragon Slayer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecCard;
