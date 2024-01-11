type Props = {};

const Points = (props: Props) => {
  return (
    <div className="flex flex-col h-full items-end justify-between">
      <div className="flex flex-col items-center ">
        <h2>Points Remaining</h2>
        <p>40</p>
      </div>
      <div>
        <h2>Points Allocated</h2>
        <p>0</p>
      </div>
    </div>
  );
};

export default Points;
