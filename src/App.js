import React, { useState } from 'react';
import './App.css';
import './css/hostelchoo.css'
// import ChooseHostel from './components/ChooseHostel';
import ChooseHostelName from './components/ChooseHostelName';
import Floor from './components/Floor';
import FloorRooms from './components/FloorRooms';
import { googleProvider, facebookProvider } from './config/authMethods';
import socialMediaAuth from './service/auth';

function App() {
  let [hostelType, setHostelType] = useState(null);

  function hostelNames(e) {
    let name = e.target.getAttribute("name")
    if (name === "girls") {
      setHostelType("girls");
    }
    else if (name === "boys") {
      setHostelType("boys");
    }
  }
  console.log(hostelType);

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider)
    setHostelType("mainPage")
    console.log(res);
  }

  function pickHostel() {
    setHostelType("hostelPage")
  }
  return (
    <div className="App">

      {hostelType == null && <div className="authButton">
        <h2>Hostel Allocation</h2>
        <h5>Please Sign In: </h5>
        <button onClick={() => handleOnClick(googleProvider)}>google</button>
        <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
      </div>}


      {hostelType == "mainPage" &&
        <div className="mainContainer">
          <h1>Choose Your Hostel</h1>
          <div className="internalMain">
            <div onClick={hostelNames} name="girls" className="Container">Girls Hostel</div>
            <div onClick={hostelNames} name="boys" className="Container">Boys Hostel</div>
          </div>
        </div>
      }

      {hostelType == "boys" &&
        <ChooseHostelName openHostel={pickHostel} boysHostels={["B1", "B2", "B3", "B4", "B5", "B6"]} />
      }
      {hostelType == "girls" &&
        <ChooseHostelName openHostel={pickHostel} boysHostels={["G1", "G2", "G3", "G4", "G5", "G6"]} />
      }
      {hostelType == "hostelPage" &&
        <Floor id={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      }
    </div >
  );
}



export default App;






