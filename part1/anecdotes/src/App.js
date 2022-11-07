import { useState } from 'react';

const Display = ({ title }) => <h2>{title}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>
        has <span>{votes}</span> votes
      </p>
    </div>
  );
};

const AnecdoteOfTheDay = ({
  selectedAnecdote,
  votes,
  handleVote,
  handleNext,
}) => {
  return (
    <div>
      <Display title="Anecdote of the day" />
      <Anecdote anecdote={selectedAnecdote} votes={votes} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleNext} text="Next anecdote" />
    </div>
  );
};

const AnecdotesVotes = ({ anecdotes, votes }) => {
  return (
    <>
      <Display title="Anecdotes and votes" />
      <div>
        {anecdotes.map((anecdote, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <span>{anecdote}</span>
            <br />
            <sub style={{ fontSize: '0.9rem' }}>has {votes[index]} votes</sub>
          </div>
        ))}
      </div>
    </>
  );
};

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  const max = Math.max(...votes);
  const index = votes.indexOf(max);
  return (
    <>
      <Display title="Most voted anecdote" />
      <h3>- {anecdotes[index]}</h3>
      <h3>it has {votes[index]} votes</h3>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div>
      {/* Anecdote */}
      <AnecdoteOfTheDay
        selectedAnecdote={anecdotes[selected]}
        votes={votes[selected]}
        handleVote={handleVote}
        handleNext={handleClick}
      />
      <hr />
      {/* All Anecdotes and votes */}
      <AnecdotesVotes anecdotes={anecdotes} votes={votes} />
      <hr />
      {/* Most voted anecdote */}
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
