type Props = {
  btnName: string;
};

const CountButton = ({ btnName }: Props) => {
  return (
    <button className="bg-gray-1/60 text-black/30 w-6 h-6 text-xl rounded-full">
      {btnName}
    </button>
  );
};

export default CountButton;
