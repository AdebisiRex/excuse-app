// import { Button } from 'bootstrap'

import React from "react";
import Buttons from "./components/Buttons";
import DisplayExcuse from "./components/DisplayExcuse";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [display, setdisplay] = useState("");
  const [button, setbutton] = useState("");
  const [bg, setbg] = useState("");
  const [zipcode, setzipcode] = useState("")
  const zip = `https://api.zippopotam.us/us/${zipcode}`;
  const sex = `https://api.genderize.io/?name=${zipcode}`;
  // const children = "https://excuser.herokuapp.com/v1/excuse/children/";
  // const college = "https://excuser.herokuapp.com/v1/excuse/college/";
  // const party = "https://excuser.herokuapp.com/v1/excuse/party/";

  const getZip = () => {
    axios.get(zip).then((result) => {
      setbg("bg-warning col-6 py-5 px-5 mx-auto border shadow-sm");
      console.log(result.data)
      setbutton("You clicked Zip Code Data");
      let content = result.data;
      setdisplay(content.country);
    });
  };

  const getSex = () => {
    axios.get(sex).then((result) => {
      setbg("bg-info col-6 py-5 px-5 mx-auto border shadow-sm");
      console.log(result)
      setbutton("You clicked Sex Generator");
      let content = result.data;
      setdisplay(content.gender);
    });
  };
  // const getChildren = () => {
  //   axios.get(children).then((result) => {
  //     setbg("bg-success col-6 py-5 px-5 mx-auto border shadow-sm");
  //     setbutton("You clicked Children");
  //     let content = result.data;
  //     setdisplay(content[0].excuse);
  //   });
  // };
  // const getCollege = () => {
  //   axios.get(college).then((result) => {
  //     setbg("bg-primary col-6 py-5 px-5 mx-auto border shadow-sm");
  //     setbutton("You clicked College");
  //     let content = result.data;
  //     setdisplay(content[0].excuse);
  //   });
  // };
  // const getParty = () => {
  //   axios.get(party).then((result) => {
  //     setbg("bg-secondary col-6 py-5 px-5 mx-auto border shadow-sm");
  //     setbutton("You clicked Party");
  //     let content = result.data;
  //     setdisplay(content[0].excuse);
  //   });
  // };

  return (
    <>
      <Buttons
        zip={getZip}
        sex={getSex}
        // children={getChildren}
        // college={getCollege}
        // party={getParty}
      />
      <div className="col-7 mx-auto">
      <input type="text" className="form-control mb-3" placeholder="Zip, Name" onChange={(e)=>setzipcode(e.target.value)}/>
      </div>
      <DisplayExcuse style={bg} content={display} button={button} />
    </>
  );
};

export default App;
