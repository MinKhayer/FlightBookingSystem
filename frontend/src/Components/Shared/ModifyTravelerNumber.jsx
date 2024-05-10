import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const ModifyTravelerNumber = ({
  traveler,
  setTraveler,
  travelerGroup,
  travelerAge,
}) => {
  //   const [traveler, setTraveler] = useState(0);

  // function for increaseing traveler number
  const addTraveler = () => {
    let count = traveler;
    count++;
    setTraveler(count);
  };

  // function for decreasing traveler number
  const removeTraveler = () => {
    let count = traveler;
    if (traveler <= 0) {
      return setTraveler(0);
    } else {
      count--;
    }
    setTraveler(count);
  };
  return (
    <div className="adultTraveler  flex justify-between items-center gap-x-6  ">
      {/* traveler left starts  */}
      <div className="travelerLeft   ">
        <p className=" text-gray-600 font-medium "> {travelerGroup} </p>
        <p className=" text-xs "> {travelerAge} </p>
      </div>
      {/* traveler left ends   */}

      {/* traveler right section starts  */}

      <div className="travelerRight  flex justify-between items-center gap-x-3 text-xl ">
        {/* minus icon starts  */}
        <div className="minusIcon    ">
          <FaMinus className=" primaryText " onClick={() => removeTraveler()} />
        </div>
        {/* minus icon ends */}

        {/* traveler number starts  */}
        <div className="travelerNumber  ">
          <h1> {traveler} </h1>
        </div>
        {/* traveler number ends */}

        {/* add icon starts  */}
        <div className="addIcon    ">
          <IoMdAdd className=" primaryText " onClick={() => addTraveler()} />
        </div>
        {/* add icon ends */}
      </div>

      {/* traveler right section ends  */}
    </div>
  );
};

export default ModifyTravelerNumber;
