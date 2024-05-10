import React from "react";

const CheckBoxComponent = ({ checkboxValues }) => {
  return (
    <div className="CheckBoxComponentContainer">
      <div className="CheckBoxComponentWrapper">
        {/* heading starts  */}
        <h1 className=" font-medium text-lg mb-2 "> {checkboxValues[0]} </h1>
        {/* heading ends  */}

        {checkboxValues[1] &&
          checkboxValues[1].map((value) => (
            <div className="bodyContainer  flex justify-between items-center self-center ">
              {/* input container starts  */}
              <div className="inputContainer flex items-center gap-x-1.5  ">
                <input type="checkbox" name="" id={value?.inputId} />
                <label htmlFor={value?.inputId}> {value?.label} </label>
              </div>
              {/* input container endss  */}

              {/* money container starts  */}
              {value?.price && (
                <div className="mnonecontainer">
                  <h1> {value?.price} </h1>
                </div>
              )}

              {/* money container ends 

              {/*  */}
            </div>
          ))}

        {/*  */}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
