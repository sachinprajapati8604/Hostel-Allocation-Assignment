import React from 'react'
import FloorRooms from './FloorRooms'
import '../css/floorrooms.css'

export default function Floor(props) {
    const { id } = props;
    const chnageFloor = (e) => {
    }
    return (
        <div className="FloormainContainer">
            <div className="headerContainer">
                <h3>Choose Your Floor</h3>
                <select onChange={chnageFloor}>
                    <option >1st Floor</option>
                    <option >2st Floor</option>
                    <option >3st Floor</option>
                    <option >4st Floor</option>
                    <option >5st Floor</option>
                    <option >6st Floor</option>
                </select>
                <div className="roomMainContainer">
                    {id.map(element => (
                        <div id={element} occupied={0} className="roomContainer">{element}</div>)

                    )}
                </div>
            </div>


        </div>
    )
}
