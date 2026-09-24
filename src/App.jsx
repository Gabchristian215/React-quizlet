import './App.css'
import Flashcard from './components/Flashcard.jsx'

export default function App() {
  return (
    <>
      <h1>The React Study Quizlet</h1>
      <p>Are you an React expert? Test your knowledge.</p>
      <p>Number of cards: 10</p>
      <Flashcard
        question="What are props in React?"
        answer="Props are inputs passed from a parent component to a child component. The child reads them without modifying them."
      />
    </>
  )
}
