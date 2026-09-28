import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard.jsx'

const flashcards = [
  {
    question: 'What are props in React?',
    answer: 'Props are inputs passed from a parent component to a child component. The child reads them without modifying them.',
  },
  {
    question: 'What is state in React?',
    answer: 'State is data a component owns and can change over time. Updating state causes the component to re-render.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It compiles to React.createElement calls.',
  },
  {
    question: 'What does the useState hook return?',
    answer: 'An array with two items: the current state value and a function to update it.',
  },
  {
    question: 'What is the useEffect hook used for?',
    answer: 'Running side effects after render, such as fetching data, setting up subscriptions, or updating the document title.',
  },
  {
    question: 'Why do list items need a key prop?',
    answer: 'Keys give each item a stable identity so React can efficiently track which items were added, removed, or reordered.',
  },
  {
    question: 'What is the virtual DOM?',
    answer: 'A lightweight in-memory copy of the real DOM. React compares versions of it to apply only the necessary changes to the page.',
  },
  {
    question: 'What is a controlled component?',
    answer: 'A form element whose value is driven by React state and updated through an onChange handler.',
  },
  {
    question: 'What is a React fragment?',
    answer: 'A wrapper (<>...</>) that groups multiple elements without adding an extra node to the DOM.',
  },
  {
    question: 'What does "lifting state up" mean?',
    answer: 'Moving shared state to the closest common parent so multiple child components can use and update it through props.',
  },
]

export default function App() {
  const [currentCard, setCurrentCard] = useState(0)

  
  function handleClick() {
   let randomIndex
do {
  randomIndex = Math.floor(Math.random() * flashcards.length)
} while (randomIndex === currentCard)

  setCurrentCard(randomIndex)
  }

  return (
    <>
      <h1>The React Study Quizlet</h1>
      <p>Are you an React expert? Test your knowledge.</p>
      <p>Number of cards: 10</p>
      <Flashcard
        question={flashcards[currentCard].question}
        answer={flashcards[currentCard].answer}
        key={currentCard}
      />
      <button className="arrow-button" aria-label="Next card" onClick={handleClick}>→</button>
    </>
  )
}
