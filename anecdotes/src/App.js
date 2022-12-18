import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const changeAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length));
  }

  const voteAnecdote = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
  }
  
  const MostVotes = (props) => {
    return (
      <div>
        <div>{props.anecdote}</div>
        <div>has {props.value}</div>
      </div>
    )
  }

  function findMax() {
    let max = 0;
    let maxAmount = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > maxAmount) {
        max = i;
        maxAmount = points[i];
      }
    }
    return max;
  }
  const Max = findMax();

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Votes: {points[selected]}</div>
      <Button text={`Get Anecdote`} onClick={changeAnecdote} />
      <Button text={`Vote`} onClick={voteAnecdote} />
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdote={anecdotes[Max]} value={points[Max]} />
    </div>
  )
}

export default App;