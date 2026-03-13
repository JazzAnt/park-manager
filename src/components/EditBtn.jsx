import { FaEdit } from "react-icons/fa";
const EditBtn = ({onEditBtn = f=>f}) => {
  return (
    <button onClick={() => onEditBtn()} className="btn btn-primary demolishBtn mx-5">
      <FaEdit color="white"/>
      Edit
    </button>
  );
};

export default EditBtn;
