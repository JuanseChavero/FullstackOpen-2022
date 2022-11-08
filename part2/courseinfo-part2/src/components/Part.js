export const Part = ({ part }) => {
  return (
    <div>
      <h2>{part.name}</h2>
      <p>Number of exercises: {part.exercises}</p>
    </div>
  );
};
