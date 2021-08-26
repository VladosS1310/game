import React from 'react';
import {CONFIG} from "../../../const";
import {Close} from "../../../assets/images";


const PriceBlock = ({isActive, setIsActive, questionPosition}) => {
    return (
        <>
            <div className={`close_icon ${isActive ? 'active' : ''}`}>
                <img src={Close} alt="Close" onClick={() => setIsActive(!isActive)}/>
            </div>
            <div className={`price-content ${isActive ? 'active' : ''}`}>
                {CONFIG.questions.map((q, i) => (
                    <div key={q.amount} className="price-content_amounts-wrapper" data-active={questionPosition === i} data-inactive={questionPosition > i}>
                        <div className="left-hr"/>
                        <div className="price-content_amounts" key={q.amount}>{q.amount}</div>
                        <div className="right-hr"/>
                    </div>)).reverse()}
            </div>
        </>

    );
};

export default PriceBlock;