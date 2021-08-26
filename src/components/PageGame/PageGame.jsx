import React, {useEffect, useState} from 'react';
import {CONFIG} from "../../const";
import {useHistory} from "react-router-dom";
import './PageGame.scss';
import PriceBlock from "./PriceBlock/PriceBlock";
import {Hamburger} from "../../assets/images";


const PageGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [questionPosition, setQuestionPosition] = useState(0);
    const [answer, setAnswer] = useState({});
    const [isActive, setIsActive] = useState(false);

    let history = useHistory();

    useEffect(() => {
        start();
    });

    const setQuestion = (index) => {
        setCurrentQuestion(CONFIG.questions[index]);
        setQuestionPosition(index);
        localStorage.setItem('currentPosition', `${index}`);
    }

    const start = () => {
        setQuestion(+localStorage.getItem('currentPosition'));
    }

    const next = () => {
        setQuestion(questionPosition + 1);
    }

    const end = () => {
        history.push('/over');
    }

    const handlerOnClick = (e) => {
        setAnswer({answerId: e, status: 'answered'});
        setTimeout(() => {
            if (e === currentQuestion.correctAnswer) {
                setAnswer({answerId: e, status: 'correct'});
                setTimeout(() => {
                    if (CONFIG.questions.length - 1 !== questionPosition) {
                        next();
                    } else {
                        end();
                    }
                }, 2000);
            } else {
                setAnswer({answerId: e, status: 'incorrect'});
                setTimeout(() => {
                    end();
                }, 2000);
            }
        }, 2000)
    }

    return (
        <div className="game">
            <div className="hamburger_icon">
                <img src={Hamburger} alt="Hamburger" onClick={() => setIsActive(!isActive)}/>
            </div>
            <div className="main-content">
                <span className='main-content_question'>{currentQuestion?.question}</span>
                <div className="buttons-wrapper">
                    {currentQuestion?.answers?.map((a) => (<>
                        <div className="block-buttons" key={a.id}>
                            <div className="left-hr"/>
                            <button
                                data-answered={answer.answerId === a.id && answer.status === "answered"}
                                data-correct={answer.answerId === a.id && answer.status === "correct"}
                                data-incorrect={answer.answerId === a.id && answer.status === "incorrect"}
                                key={a.id} id={a.id} onClick={(e) => handlerOnClick(e.target.id)}
                            >
                                <span className="letter" key={a.letter}>{a.letter}</span> {a.label}
                            </button>
                            <div className="right-hr"/>
                        </div>
                    </>))}
                </div>
            </div>
            <PriceBlock isActive={isActive} setIsActive={setIsActive} questionPosition={questionPosition}/>
        </div>
    );
};

export default PageGame;