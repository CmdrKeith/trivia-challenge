import { useState } from "react"

export default function TriviaQuestion({question, category, answer1, answer2, answer3, answer4, correct}) {

    const [flipped, setFlipped] = useState(false)
    const [rightAnswer, setRightAnswer] = useState(false)
    let resultComment = "You're WRONG!"
    let score = 0

    function handleClick() {
        setFlipped(!flipped)
        console.log("flip state is " + flipped)
    }

    function answerClick(answerGiven) {
        if (answerGiven === correct) {
            setRightAnswer(rightAnswer=true)
            resultComment = "That's correct!"
            score++
        } else {
            resultComment = "You're WRONG!"
        }
        setFlipped(flipped=true)
    }

    return (
        <>
            <div className="card-top">
                {!flipped &&
                    <>
                        <div className='card'>
                            <p>{category}</p>
                            <h4>{question}</h4>
                            <p><button className="badge">{answer1}</button></p>
                            <p><button className="badge">{answer2}</button></p>
                            <p><button className="badge">{answer3}</button></p>
                            <p><button className="badge">{answer4}</button></p>
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