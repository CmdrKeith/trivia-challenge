import { useMemo, useState } from 'react'
import './App.css'
import TriviaQuestion from './Question'

const categories = [
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "All"
]

// const phases = [
//   "Choose Category",
//   "Answer Questions",
//   "Show Result"
// ]

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
  {question: "Who won the Super Bowl in 1985, famously known as the 'Super Bowl Shuffle' year?",
    category: "1980s",
    answer1: "Detroit Tigers",
    answer2: "Chicago Bears",
    answer3: "Dallas Cowboys",
    answer4: "Jacksonville Jaguars",
    correct: "Chicago Bears"},
  {question: "What was the name of the artificial intelligence in the film 'WarGames' released in 1983?",
    category: "1980s",
    answer1: "Tesla",
    answer2: "Chat GPT",
    answer3: "Ask Jeeves",
    answer4: "Joshua",
    correct: "Joshua"},
  {question: "What was the name of the popular soap opera that aired from 1981 to 1989, set in the fictional town of Pine Valley?",
    category: "1980s",
    answer1: "All My Children",
    answer2: "Real Housewives of Dubuque",
    answer3: "Dallas",
    answer4: "Melrose Place",
    correct: "All My Children"},
  {question: "Who starred as the character Alex P. Keaton in the TV series 'Family Ties'?",
    category: "1980s",
    answer1: "Alf",
    answer2: "J.J. Walker",
    answer3: "Michael J. Fox",
    answer4: "Bill Cosby",
    correct: "Michael J. Fox"},
  {question: "Which famous space shuttle exploded shortly after launch in 1986?",
    category: "1980s",
    answer1: "Discovery",
    answer2: "Enterprise",
    answer3: "Odyssey",
    answer4: "Challenger",
    correct: "Challenger"},
  {question: "What was the name of the computer virus that infected many Apple II computers in 1982?",
    category: "1980s",
    answer1: "Elk Cloner",
    answer2: "Mumps",
    answer3: "Mad Cow Disease",
    answer4: "Banana Peel",
    correct: "Elk Cloner"},
  {question: "Who became the President of the United States in 1981?",
    category: "1980s",
    answer1: "Harry S. Truman",
    answer2: "Bill Clinton",
    answer3: "Ronald Reagan",
    answer4: "Jimmy Carter",
    correct: "Ronald Reagan"},
  {question: "Which popular fashion accessory was invented in the 1970s?",
    category: "1970s",
    answer1: "Crystal Pendants",
    answer2: "Louvered Sunglasses",
    answer3: "The Mood Ring",
    answer4: "Calculator Watch",
    correct: "The Mood Ring"},
  {question: "Which country was the host of the 1976 Summer Olympics?",
    category: "1970s",
    answer1: "USA",
    answer2: "France",
    answer3: "Japan",
    answer4: "Canada",
    correct: "Canada"},
  {question: "What popular toy was introduced in 1977, consisting of colored plastic tiles?",
    category: "1970s",
    answer1: "Ice Breaker",
    answer2: "Trivial Pursuit",
    answer3: "Slider Puzzles",
    answer4: "Rubik's Cube",
    correct: "Rubik's Cube"},
  {question: "Which space probe was launched in 1977 to explore the outer planets of our solar system?",
    category: "1970s",
    answer1: "Odyssey",
    answer2: "Voyager 1",
    answer3: "Saturn V",
    answer4: "Calypso",
    correct: "Voyager 1"},
  {question: "Who released the album 'Dark Side of the Moon' in 1973?",
    category: "1970s",
    answer1: "Jefferson Starship",
    answer2: "Pink Floyd",
    answer3: "NASA",
    answer4: "Boston",
    correct: "Pink Floyd"},
  {question: "Who sang the rock anthem 'Free Bird' in 1973?",
    category: "1970s",
    answer1: "AC/DC",
    answer2: "The Jackson 5",
    answer3: "Lynyrd Skynyrd",
    answer4: "Donny & Marie",
    correct: "Lynyrd Skynyrd"},
  {question: "Who played the character Vito Corleone in the film 'The Godfather' (1972)?",
    category: "1970s",
    answer1: "Robert Dinero",
    answer2: "Robert Duvall",
    answer3: "Marlon Brando",
    answer4: "Burt Lancaster",
    correct: "Marlon Brando"},
  {question: "Which actor starred as James Bond in the 1973 film 'Live and Let Die'?",
    category: "1970s",
    answer1: "Roger Moore",
    answer2: "Sean Connery",
    answer3: "Piece Brosnan",
    answer4: "Roddy McDowel",
    correct: "Roger Moore"},
  {question: "What was the name of the popular detective show that aired from 1975 to 1979, starring James Garner?",
    category: "1970s",
    answer1: "The Rockford Files",
    answer2: "Greatest American Hero",
    answer3: "McGyver",
    answer4: "Murder She Wrote",
    correct: "The Rockford Files"},
  {question: "Who played the character J.R. Ewing in the TV series 'Dallas'?",
    category: "1970s",
    answer1: "Robert Blake",
    answer2: "Tony Danza",
    answer3: "Alf",
    answer4: "Larry Hagman",
    correct: "Larry Hagman"},
  {question: "Who sang 'Kiss From a Rose'?",
    category: "1990s",
    answer1: "David Bowie",
    answer2: "Guns N Roses",
    answer3: "Seal",
    answer4: "Janet Jackson",
    correct: "Seal"},
  {question: "What group sang the song 'Zombie'?",
    category: "1990s",
    answer1: "The Rembrants",
    answer2: "The Cranberries",
    answer3: "Mike and The Mechanics",
    answer4: "Wham",
    correct: "The Cranberries"},
  {question: "Wonderwall was released in 1995 by which British rock band from Manchester?",
    category: "1990s",
    answer1: "The Verve",
    answer2: "Blur",
    answer3: "Oasis",
    answer4: "Wham",
    correct: "Oasis"},
  {question: "Who was 'Getting Jiggy With It' in 1999?",
    category: "1990s",
    answer1: "Eminem",
    answer2: "George Michael",
    answer3: "Will Smith",
    answer4: "Billy Idol",
    correct: "Will Smith"},
  {question: "Who sang 'Livin' La Vida Loca'?",
    category: "1990s",
    answer1: "Ricky Martin",
    answer2: "La Bamba",
    answer3: "Santana",
    answer4: "Shakira",
    correct: "Ricky Martin"},
  {question: "'I Have Nothing' and 'I'm Every Woman' were UK Top 10 hits for which female artist in 1993?",
    category: "1990s",
    answer1: "Celine Dion",
    answer2: "Janet Jackson",
    answer3: "Madonna",
    answer4: "Whitney Houston",
    correct: "Whitney Houston"},
  {question: "Who sang 'I Will Always Love You'?",
    category: "1990s",
    answer1: "Nelly",
    answer2: "Whitney Houston",
    answer3: "Billy Joel",
    answer4: "Mariah Carey",
    correct: "Whitney Houston"},
  {question: "Who made rockers sad with the somber song 'Creep'?",
    category: "1990s",
    answer1: "Blur",
    answer2: "The Verve",
    answer3: "Ash",
    answer4: "Radiohead",
    correct: "Radiohead"},
  {question: "What rapper had a number one hit with the song 'Hypnotize'?",
    category: "1990s",
    answer1: "Jay-Z",
    answer2: "Notorious BIG",
    answer3: "Busta Rhymes",
    answer4: "Eminem",
    correct: "Notorious BIG"},
  {question: "Who composed the music for the 1994 musical Copacabana?",
    category: "1990s",
    answer1: "Santana",
    answer2: "Paul McCartney",
    answer3: "Barry Manilow",
    answer4: "John Williams",
    correct: "Barry Manilow"},
  {question: "Complete the title of the 2000 Backstreet Boys hit 'Show me the meaning of being…'?",
    category: "2000s",
    answer1: "a Boy",
    answer2: "in Love",
    answer3: "Lonely",
    answer4: "a Poophead",
    correct: "Lonely"},
  {question: "Complete the title of the 2006 Ludacris and Pharrell hit 'Money…'?",
    category: "2000s",
    answer1: "Maker",
    answer2: "Ball",
    answer3: "Talks",
    answer4: "Honey",
    correct: "Maker"},
  {question: "Which band is Matt Bellamy the front man for?",
    category: "2000s",
    answer1: "Linkin Park",
    answer2: "Foo Fighters",
    answer3: "Green Day",
    answer4: "Muse",
    correct: "Muse"},
  {question: "What group released 'I Believe in a Thing Called Love' in 2003 only to break up three years later?",
    category: "2000s",
    answer1: "The Killers",
    answer2: "Coldplay",
    answer3: "The Darkness",
    answer4: "Plain White T's",
    correct: "The Darkness"},
  {question: "What group's biggest hit in the 2000s was a cover of Michael Jackson's 'Smooth Criminal'?",
    category: "2000s",
    answer1: "Fallout Boy",
    answer2: "Alien Ant Farm",
    answer3: "Red Hot Chili Peppers",
    answer4: "The White Stripes",
    correct: "Alien Ant Farm"},
  {question: "In what year did Fergie reach No.1 with 'Big Girls Don't Cry'?",
    category: "2000s",
    answer1: "2005",
    answer2: "2003",
    answer3: "2007",
    answer4: "2009",
    correct: "2007"},
  {question: "In what year did The Baha Men release 'Who Let The Dogs Out'?",
    category: "2000s",
    answer1: "2000",
    answer2: "2002",
    answer3: "2004",
    answer4: "2007",
    correct: "2000"},
  {question: "What is the name of Eminem's third album?",
    category: "2000s",
    answer1: "Number Three",
    answer2: "The Eminem Show",
    answer3: "Buy This F**kin Record",
    answer4: "The Best",
    correct: "The Eminem Show"},
  {question: "Who featured on the 2007 Timbaland hit 'Apologize'?",
    category: "2000s",
    answer1: "Maroon 5",
    answer2: "Kings of Leon",
    answer3: "One Republic",
    answer4: "Disturbed",
    correct: "One Republic"},
  {question: "Who performed the 2003 hit 'Crazy in Love'?",
    category: "2000s",
    answer1: "Madonna",
    answer2: "Beyoncé",
    answer3: "Britany Spears",
    answer4: "Shakira",
    correct: "Beyoncé"}
]

export default function App() {
  const [filteredQuestions, setFilteredQuestions] = useState(questions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scoreKeeper, setScoreKeeper] = useState(0)
  // const [currentPhase, setCurrentPhase] = useState(phase[0])

  const handleClick = (category) => {
    if(category === "All") {
      setFilteredQuestions(questions)
    } else {
      const newQuestions = questions.filter(question => question.category === category)
      setFilteredQuestions(newQuestions)
    }
    setCurrentQuestion(0)
  }

  function handleNavForward() {
    if(currentQuestion === filteredQuestions.length - 1) {
      console.log("Time to show results")
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  function handleNavReverse() {
    console.log(currentQuestion)
    if(currentQuestion === 0) {
      alert("This is the first question, Numb Nuts! Just answer it!")
    } else {
      setCurrentQuestion(currentQuestion - 1)
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
      

        <div className='cardsContainer'>
          <div>
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
                      correct={question.correct}
                      setScoreKeeper={setScoreKeeper}
                      scoreKeeper={scoreKeeper}
                    />
                  )
                }
              })}  
          </div>

          <div className="card-butt">
              <h4>Score ={scoreKeeper}</h4>
              {/* <h4>Score = < KeepScore correctAnswer={false} /></h4> */}
              <button onClick={()=>{handleNavReverse()}} className="navBadge">Previous<br></br>Question</button>
              <button onClick={()=>{handleNavForward()}} className="navBadge">Next<br></br>Question</button>
          </div>
        </div>
      </div>
    </>
  )
}
