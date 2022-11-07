const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <section key={part.name}>
            <Part key={part.name} part={part} />
          </section>
        );
      })}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <h2>{part.name}</h2>
      <p>Number of exercises: {part.exercises}</p>
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((prev, curr) => prev + curr, 0);

  return <p>Total of exercises in the course: {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
