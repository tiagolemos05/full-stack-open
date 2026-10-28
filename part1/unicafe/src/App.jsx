import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
  setGood (good + 1)
  console.log(good)
  }

  const handleNeutral = () => {
    setNeutral (neutral + 1)
    console.log(neutral)
  }

  const handleBad = () => {
    setBad (bad + 1)
    console.log(bad)
  } 



  return (
    <div>
    <h1>give feedback</h1>
    <Button text="good" onClick={handleGood} />
    <Button text="neutral" onClick={handleNeutral} />
    <Button text="bad" onClick={handleBad} />
    <h1>statistics</h1>
    <div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  } 

  return(
        <div>
    <p>
    good {props.good}
    </p>
    <p>
      neutral {props.neutral}
    </p>
    <p>
      bad {props.bad}
    </p>
    <p>
      all {props.good + props.neutral + props.bad}
    </p>
    <p>
      average {(props.good + props.neutral*0 + props.bad*-1)/(props.good + props.neutral + props.bad)}
    </p>
    <p>
      positive {props.good/(props.good + props.neutral + props.bad)*100} %
    </p>
  </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}



export default App