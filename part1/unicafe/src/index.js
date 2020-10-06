import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button from './components/button'
import Statistics from './components/statistics'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)

  const addNeutral = () => setNeutral(neutral + 1)

  const addBad = () => setBad(bad + 1)



  return (
    <div>
      <div>
        <h1>GIVE FEEDBACK</h1>

        <Button onClick = {addGood} text='good' />

        <Button onClick = {addNeutral} text='neutral' />

        <Button onClick = {addBad} text='bad' />

        <h2>Statistics</h2>
      
        <Statistics stats={{ good, neutral, bad}} />      

      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)