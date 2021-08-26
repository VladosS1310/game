import React, {useEffect, useState} from 'react';
import {Hand} from "../../assets/images";
import './PageOver.scss';
import {useHistory} from "react-router-dom";
import {CONFIG} from "../../const";

const PageOver = () => {
    let history = useHistory();
    const [totalScore, setTotalScore] = useState('');

    useEffect(() => {
        setTotalScore(CONFIG.questions[localStorage.getItem('currentPosition')].amount);
    }, []);

    const tryAgain = () => {
        localStorage.setItem('currentPosition', '0');
        history.push("/");
    }

    return (
        <div className="over-wrapper">
            <div className="over">
                <div className="over_img">
                    <img src={Hand} alt="Hand"/>
                </div>
                <div className="over_content">
                    <span className="over_content-score">Total score:</span>
                    <span className="over_content-price">{totalScore} earned</span>
                    <button onClick={() => tryAgain()}>Try again</button>
                </div>
            </div>
        </div>
    );
};

export default PageOver;