import { FaStar, FaRegStar } from "react-icons/fa6";
const Star = ({ selected = false, onRate = (f) => f }) =>
  selected ? (
    <FaStar onClick={() => onRate()} color="green" />
  ) : (
    <FaRegStar onClick={() => onRate()} color="red" />
  );

export default Star;
