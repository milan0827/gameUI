type Props = {
  btnName: string;
  onClick: () => void;
};

const CountButton = ({ btnName, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="h-6 w-6 rounded-full bg-gray-1/60 text-xl text-black/30 transition-all duration-300 hover:scale-[1.1] hover:bg-gray-1 hover:text-black/60 hover:shadow-sm hover:shadow-black/50"
    >
      {btnName}
    </button>
  );
};

export default CountButton;
