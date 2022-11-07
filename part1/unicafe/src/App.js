import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <>
      <ul>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <br />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positive.toFixed(2)} %`} />
      </ul>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <li>
      {text}: {value}
    </li>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const isThereFeedback = good || neutral || bad;

  return (
    <div>
      <h2>Give feedback</h2>
      <button type="button" onClick={() => setGood((prev) => prev + 1)}>
        Good
      </button>
      <button type="button" onClick={() => setNeutral((prev) => prev + 1)}>
        Neutral
      </button>
      <button type="button" onClick={() => setBad((prev) => prev + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      {isThereFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        'No feedback given'
      )}
    </div>
  );
};

export default App;
