import { useState } from 'react'
import './Flashcard.css'

export default function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  return ( 
<button className={`flashcard ${isFlipped ? "flipped" : ""}`}
    onClick={() => {setIsFlipped((flipped => !flipped))}}
    >
      <span className="card-text">
      {isFlipped ? `Answer: ${answer}` : `Question: ${question}`}
    </span>
    </button>

    
  )
}
