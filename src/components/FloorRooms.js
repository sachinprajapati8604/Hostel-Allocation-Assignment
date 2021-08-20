import React, { useState } from 'react'
import '../css/floorrooms.css'

export default function FloorRooms(props) {
    let [occupied, setOccupied] = useState([0,0,0,0,0,0,0,0,0,0]);
    localStorage.setItem("occupied",occupied);
    const { id } = props;
    
    
    return (
        <div className="roomMainContainer">
            {id.map(element => (
                <div id={element} className="roomContainer">{element}</div>)
                )}
        </div>
    )
}

            // (element >4 && element<7) && <div id={element} className="roomContainer">{element}</div>