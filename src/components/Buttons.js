import React from "react";

const Buttons = ({zip, sex, college, children, party}) => {
  return (
    <>
      <div className="col-7 mx-auto text-center shadow-sm mb-5 border p-5 px-auto">
        <button onClick={zip} className="btn  mx-3 btn-lg btn-warning">Generate Zip Data</button>
        <button onClick={sex} className="btn  mx-3 btn-lg btn-info">Sex Generator</button>
        {/* <button onClick={college} className="btn mx-3 btn-lg btn-success">Children</button>
        <button onClick={children} className="btn mx-3 btn-lg btn-primary">College</button>
        
        <button onClick={party} className="btn mx-3 btn-lg btn-secondary" >Party</button> */}
      </div>
    </>
  );
};

export default Buttons;
