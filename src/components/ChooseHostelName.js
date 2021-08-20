import React from 'react'
import App from '../App';
import '../css/chosseHostelName.css'

export default function ChooseHostelName(props) {
    const {openHostel, boysHostels } = props;
    // {console.log(openHostel)}
    
    
    return (
        <div className="mainContainer">
            <h1>Choose a Hostel</h1>
            <div className="internalContainer">
                {boysHostels.map(element => (
                    <div key={element} onClick={openHostel}  className="container" >{element}</div>)
                )}
            </div>
        </div>
    )
}
