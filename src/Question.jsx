import { useState } from "react"


export default function TriviaQuestion({question, category, answer1, answer2, answer3, answer4, correct}) {

    let [flipped, setFlipped] = useState(false)
    let [rightAnswer, setRightAnswer] = useState(false)
    let answerGiven = ""
    let resultComment = "You're WRONG!"

    // function handleClickAnswer(answerGiven) {
    //     alert(answerGiven)
    // }

    // function answerButton({answerGiven, children})  {
    //     return (
    //         <button className="badge" onClick={() => alert(answerGiven)}>
    //             {children}
    //         </button>
    //     );
    // }



    // function handleClick() {
    //     setFlipped(!flipped)
    //     console.log("flip state is " + flipped)
    // }

    function handleAnswerClick() {
        setFlipped(flipped=true)
        alert(answerGiven)
        if (answerGiven === correct) {
            // setRightAnswer(rightAnswer=true)
            resultComment = "That's correct!"
        } else {
            resultComment = "You're WRONG!"
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
                            <p><button onClick={()=> answerGiven = answer1} className="badge">{answer1}</button></p>
                            <p><button onClick={()=> answerGiven = answer2} className="badge">{answer2}</button></p>
                            <p><button onClick={()=> answerGiven = answer3} className="badge">{answer3}</button></p>
                            <p><button onClick={()=> answerGiven = answer4} className="badge">{answer4}</button></p>
                            
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