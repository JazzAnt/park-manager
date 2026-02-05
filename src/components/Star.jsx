import {FaStar , FaRegStar} from "react-icons/fa6"
const Star = ({selected}) => selected ? 
<FaStar color="green"/> : <FaRegStar color="red"/>;
 
export default Star;
