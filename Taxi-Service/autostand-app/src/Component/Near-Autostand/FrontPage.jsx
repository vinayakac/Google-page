import React from 'react';

import "../Near-Autostand/FrontPage.css"
import { Link } from 'react-router-dom';

const BoxButton = () => {
    return (
        <div className="box">
            <div className="box1">
                <Link to='/autostand/table'>
                <button className="butn-box1">
                    <label className="label">Kumta</label>
                </button></Link>
                <Link to='/autostand/table'><button className="butn-box2">
                    <label className="label">Bargi</label>
                </button></Link>
            </div>

            <div className="box2">
            <Link to='/autostand/table'><button className="butn-box3">
                    <label className="label">Ankola</label>
                </button></Link>
                <Link to='/autostand/table'><button className="butn-box4">
                    <label className="label">Honnavar</label>
                </button></Link>
            </div>

        </div>
    );
};

export default BoxButton;


