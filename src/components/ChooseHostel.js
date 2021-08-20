import React from 'react'
import '../css/hostelchoo.css'

export default function ChooseHostel(props) {
    
    return (
        <div className="mainContainer">
            <h1>Choose Your Hostel</h1>
            <div className="internalMain">
                <div onClick={props.hostelNames} name="girls" className="Container">Girls Hostel</div>
                <div onClick={props.hostelNames} name="boys" className="Container">Boys Hostel</div>
            </div>
        </div>
    )
}
