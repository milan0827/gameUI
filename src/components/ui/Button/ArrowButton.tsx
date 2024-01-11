import { ReactNode } from "react";

type Props = {
  btnName: ReactNode;
};

const Button = ({ btnName }: Props) => {
  return (
    <button className="bg-gray-1/60 text-black/30 w-12 h-12 text-2xl font-bold rounded-full flex items-center justify-center">
      {btnName}
    </button>
  );
};

export default Button;
