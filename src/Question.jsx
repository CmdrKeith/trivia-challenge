import { useState } from "react"


export default function TriviaQuestion({question, category, answer1, answer2, answer3, answer4, correct}) {

    let [flipped, setFlipped] = useState(false)
    let [answerGiven, setAnswerGiven] = useState("")
    let [resultComment, setResultComment] = useState("")

    function handleAnswerClick() {
        setFlipped(flipped=true)

        if (answerGiven === correct) {
            setResultComment(resultComment = "That's correct!")
        } else {
            setResultComment(resultComment = "You're WRONG!")
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
                    </>
                }
            </div>
        </>
        
)
}