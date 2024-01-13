import CardHeader from "./CardHeader";
import Character from "./../../../assets/images/character.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ArrowButton from "../Button/ArrowButton";

const CharacterCard = () => {
  return (
    <div className="col-character-col mb-8 ml-8 flex flex-col  items-center justify-between rounded-[40px] bg-gray-1/40 p-12 backdrop-blur-[8px] ">
      <CardHeader title="Select Character Class" />
      <img
        src={Character}
        alt="Character Image"
        className="w-[8rem] cursor-pointer drop-shadow-character transition-all duration-300 hover:scale-[1.2]"
      />
      <div className="flex w-full items-center justify-between">
        <ArrowButton btnName={<FaArrowLeft />} />
        <p className="font-sans text-2xl font-semibold text-gray-1/80">
          Warrior
        </p>
        <ArrowButton btnName={<FaArrowRight />} />
      </div>

      <button className="relative w-full overflow-hidden rounded-md border-[3.5px] border-gray-2/50 py-3 text-xl text-gray-1/80 transition-all duration-300 before:left-0 before:top-0 before:h-14 before:w-0 before:transition-all before:duration-500 hover:scale-[1.1] hover:text-gray-2 hover:shadow-lg hover:shadow-black/50 hover:before:absolute hover:before:w-full hover:before:bg-gray-1/40 hover:before:content-['']">
        Confirm
      </button>
    </div>
  );
};

export default CharacterCard;
