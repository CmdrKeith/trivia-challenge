import { useState } from 'react'
import './App.css'
import TriviaQuestion from './Question'

const categories = [
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "All"
]

const questions = [
	{question: "Who was the first female justice appointed to the U.S. Supreme Court in 1981?",
		category: "1980s", 
		answer1: "Nancy Pelosi", 
		answer2: "Sandra Day O'Connor", 
		answer3: "Flip Wilson", 
		answer4: "Sonia Sotomayor", 
		correct: "Sandra Day O'Connor"},
	{question: "Which popular toy line featuring small collectible figures was introduced in 1982?",
		category: "1980s",
		answer1: "Beanie Babies",
		answer2: "Sour Patch Kids",
		answer3: "Cabbage Patch Kids",
		answer4: "Smurfs",
		correct: "Cabbage Patch Kids"},
	{question: "What band sang the popular song 'Sweet Child o' Mine' in 1987?",
		category: "1980s",
		answer1: "Guns N' Roses",
		answer2: "AC/DC",
		answer3: "Boston",
		answer4: "The Beanie Babies",
		correct: "Guns N' Roses"},
	{question: "1970s Question One?",
		category: "1970s",
		answer1: "70 Answer1",
		answer2: "70 Answer2",
		answer3: "70 Answer3",
		answer4: "70 Answer4",
		correct: "70 Answer4"}
]

function App() {
  const [filteredQuestions, setFilteredQuestions] = useState(questions)
  let currentQuestion = 0
  let score = 0

  const handleClick = (category) => {
    console.log("Clicked on " + category)

    if(category === "All") {
      setFilteredQuestions(questions)
    } else {
      const newQuestions = questions.filter(question => question.category === category)
      setFilteredQuestions(newQuestions)
    }
  }

  return (
    <>
      <div className='title-bar'>
        <h2>Welcome to<br></br>Krazy Keith's Tome of Trivia!</h2>
        <h3>Choose a Category to Answer 10 Questions:</h3>
 
        <div className='nav-bar'>
          {categories.map((category) => {
            return (
              <button
                className='badge'
                key={category} 
                onClick={
                  () => {handleClick(category)}
                }>
                  {category}
              </button>
            )
          })}
        </div>

      </div>
        <div className='cardsContainer'>

          {filteredQuestions.map((question, index) => {
            if (index === currentQuestion) {
              return (
                <TriviaQuestion
                  key={question.question}
                  category={question.category}
                  question={question.question}
                  answer1={question.answer1}
                  answer2={question.answer2}
                  answer3={question.answer3}
                  answer4={question.answer4} 
                  correct={question.correct} />
              )
            }
          })}
          
        </div>
    </>
  )
}

export default App
