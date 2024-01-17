type Props = {
  title: string;
};

const CardHeader = ({ title }: Props) => {
  return (
    <h2 className="font-Exo text-2xl font-bold text-gray-2/80">{title}</h2>
  );
};

export default CardHeader;
