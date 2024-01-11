type Props = {
  title: string;
};

const CardHeader = ({ title }: Props) => {
  return (
    <h2 className="text-2xl text-gray-2/80 font-bold font-Exo">{title}</h2>
  );
};

export default CardHeader;
