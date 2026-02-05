import { TbWreckingBall } from "react-icons/tb";
const Demolish = ({onDemolish = f=>f}) => {
  return (
    <button onClick={() => onDemolish()} className="btn btn-warning col-2">
      <TbWreckingBall color="black"/>
      Demolish
    </button>
  );
};

export default Demolish;
