import { useState } from "react"


export default function TriviaQuestion({question, category, answer1, answer2, answer3, answer4, correct}) {

    let [flipped, setFlipped] = useState(false)
    let [rightAnswer, setRightAnswer] = useState(false)
    let [answerGiven, setAnswerGiven] = useState("")
    let [resultComment, setResultComment] = useState("")

    function handleAnswerClick() {
        setFlipped(flipped=true)
        alert("Answer Given is " + answerGiven)
        alert("Correct Answer is " + correct)

        if (answerGiven === correct) {
            setResultComment(resultComment = "That's correct!")
            alert("We are in the CORRECT answer place!")
        } else {
            setResultComment(resultComment = "You're WRONG!")
            alert("We are in the WRONG answer place!")
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
                                setAnswerGiven(answerGiven = answer1)
                                handleAnswerClick()
                                }} className="badge">{answer1}</button></p>
                            <p><button onClick={()=>{
                                setAnswerGiven(answerGiven = answer2)
                                handleAnswerClick()
                                }} className="badge">{answer2}</button></p>
                            <p><button onClick={()=>{
                                setAnswerGiven(answerGiven = answer3)
                                handleAnswerClick()
                                }} className="badge">{answer3}</button></p>
                            <p><button onClick={()=>{
                                setAnswerGiven(answerGiven = answer4)
                                handleAnswerClick()
                                }} className="badge">{answer4}</button></p>
                            
                            <p>
                                <button onClick={()=>console.log("Answer given is " + answerGiven)}>Answer Given</button>
                            </p>
                            <p>
                                <button onClick={handleAnswerClick}>Check Your Answer</button>
                            </p>
                        </div>
                        <div className="card-butt">
                            <button className="navBadge">Previous<br></br>Question</button>
                            <button className="navBadge">Next<br></br>Question</button>
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
                        </div>
                        <div className="card-butt-back">
                            <button className="navBadge">Previous<br></br>Question</button>
                            <button className="navBadge">Review<br></br>Choices</button>
                            <button className="navBadge">Next<br></br>Question</button>
                        </div>
                    </>
                }
            </div>
        </>
        
)
}