import { useState } from "react"
import KeepScore from "./Score"


export default function TriviaQuestion({question, category, answer1, answer2, answer3, answer4, correct, setScoreKeeper, scoreKeeper}) {

    const [flipped, setFlipped] = useState(false)
    const [answerGiven, setAnswerGiven] = useState("")
    const [resultComment, setResultComment] = useState("")


    function handleAnswerClick(answerSelected) {
        setFlipped(true)
        setAnswerGiven(answerSelected)
        if (answerSelected === correct) {
            setScoreKeeper(scoreKeeper + 1)
            // KeepScore(true)
            setResultComment("That's correct!")
        } else {
            setResultComment("You're WRONG!")
        }
    }

    return (
        <>
            <div className="card-top">
                {!flipped &&
                    <>
                        <div className='card'>
                            <p>{category}</p>
                            <h4>{question}</h4>
                            <p><button onClick={()=>{
                                // setAnswerGiven(answer1)
                                handleAnswerClick(answer1)
                                }} className="badge">{answer1}</button></p>
                            <p><button onClick={()=>{
                                // setAnswerGiven(answer2)
                                handleAnswerClick(answer2)
                                }} className="badge">{answer2}</button></p>
                            <p><button onClick={()=>{
                                // setAnswerGiven(answer3)
                                handleAnswerClick(answer3)
                                }} className="badge">{answer3}</button></p>
                            <p><button onClick={()=>{
                                // setAnswerGiven(answer4)
                                handleAnswerClick(answer4)
                                }} className="badge">{answer4}</button></p>
                            
                        </div>
                    </>

                }
                {flipped &&
                    <>
                        <div className="card-back">
                            <h4>{question}</h4>
                            <h3>{resultComment}</h3>
                            <p>You said<br></br>{answerGiven}</p>
                            <p>The Answer is<br></br>{correct}</p>
                            {/* <h4>Score from use State = {scoreKeeper}</h4> */}
                        </div>
                    </>
                }
            </div>
        </>
        
)
}