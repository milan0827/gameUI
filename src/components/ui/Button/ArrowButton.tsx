import { ReactNode } from "react";

type Props = {
  btnName: ReactNode;
};

const ArrowButton = ({ btnName }: Props) => {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-1/60 text-2xl font-bold text-black/30 transition-all duration-300 hover:scale-[1.2] hover:bg-gray-1 hover:text-black/60 hover:shadow-md hover:shadow-black/50">
      {btnName}
    </button>
  );
};

export default ArrowButton;
