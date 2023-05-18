import './Dropdown.css'
import { useState } from "react"
function Dropdown({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options =['Upcoming Projects', 'Ongoing Projects','Completed Projects']
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(o) => 
            setIsActive(!isActive)}>
                {selected}
                <img src='./orange-down-arrow.webp' alt='#' className="down-arrow" />
                <span className="fas fa-caret-down"></span>
                </div>
                {isActive &&(
                <div className="dropdown-content">
                {options.map((option) =>(
                    <div
                    onClick={(e) =>{
                        setSelected(option);
                        setIsActive(false);
                    }}
                    className="dropdown-item"
                    >
                        {option}
                        
                        </div>
                ))}
            </div>
                )}
        </div>
    )
}

export default Dropdown;