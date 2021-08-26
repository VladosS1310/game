import React from 'react';
import './PageStart.scss';
import {Hand} from "../../assets/images";
import { useHistory } from "react-router-dom";

const PageStart = () => {
    let history = useHistory();

    return (
        <div className="start">
            <div className="start_content">
                <div className="start_content-img">
                    <img src={Hand} alt="Hand" />
                </div>
                <div className="start_content-text">
                    <span>Who wants to be a millionaire?</span>
                    <button onClick={ () => history.push('/game')}>Start</button>
                </div>
            </div>
        </div>
    );
};

export default PageStart;