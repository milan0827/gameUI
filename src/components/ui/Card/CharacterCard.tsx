import CardHeader from "./CardHeader";
import Character from "./../../../assets/images/character.png";
import Button from "../Button/ArrowButton";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

type Props = {};

const CharacterCard = (props: Props) => {
  return (
    <div className="flex col-character-col flex-col items-center justify-between  bg-gray-1/40 p-12 ml-8 mb-8 rounded-[40px] backdrop-blur-[8px] ">
      <CardHeader title="Select Character Class" />
      <img
        src={Character}
        alt="Character Image"
        className="drop-shadow-character w-[8rem]"
      />
      <div className="flex items-center justify-between w-full">
        <Button btnName={<FaArrowLeft />} />
        <p className="text-2xl font-semibold text-gray-1/80 font-sans">
          Warrior
        </p>
        <Button btnName={<FaArrowRight />} />
      </div>

      <button className="py-3 w-full border-[3.5px] border-gray-2/30 rounded-md text-xl text-gray-1/80">
        Confirm
      </button>
    </div>
  );
};

export default CharacterCard;
