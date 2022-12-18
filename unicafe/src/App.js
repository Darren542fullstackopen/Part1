import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatististicLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Average = (good, bad, neutral) => {
  if (good + bad + neutral === 0) {
    return 'No Value'
  } else {
    return ((good - bad) / (good + bad + neutral))
  }
}

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatististicLine text='good' value={good} />
          <StatististicLine text='neutral' value={neutral} />
          <StatististicLine text='bad' value={bad} />
          <StatististicLine text='average' value={Average(good, bad, neutral)} />
          <StatististicLine text='positive' value={PositivePercent(good, bad, neutral)} />
        </tbody>
      </table>      
    )
  }
} 


function PositivePercent(good, bad, neutral) {
  if (good + bad + neutral === 0) {
    return 'No Value'
  } else {
    return ((good) / (good + bad + neutral)) * 100 + ' %'
  }
} 
const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
