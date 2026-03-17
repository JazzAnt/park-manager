import { TbWreckingBall } from "react-icons/tb";
const Demolish = ({onDemolish = f=>f}) => {
  return (
    <button onClick={() => onDemolish()} className="btn btn-warning demolishBtn mx-5">
      <TbWreckingBall color="black"/>
      Demolish
    </button>
  );
};

export default Demolish;
