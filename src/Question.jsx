import { useState } from "react"

export default function TriviaQuestion({category, question, answer1, answer2, answer3, answer4, correct}) {
    console.log("Peaceful Warrior")

    const [flipped, setFlipped] = useState(false)
    function handleClick() {
        setFlipped(!flipped)
        console.log("flip state is " + flipped)
    }

    return (
        <div
            onClick={
            () => {handleClick()}
        }
        >
            {!flipped &&
                <div className='card'>

                    <div className='top'>
                        <p>{category}</p>
                        <h3>{question}</h3>
                    </div>
                    <div className='bottom'>
                        <h2>{correct}</h2>
                    </div>
                </div>

                }
                {flipped &&
                    <div className="card-back">
                        <p>{correct}</p>
                    </div>
                }
        </div>
        
)
}