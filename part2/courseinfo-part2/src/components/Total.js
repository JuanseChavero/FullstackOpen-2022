import { useMemo } from 'react';

export const Total = ({ parts }) => {
  // If the parts of the course change, re-run the total
  const total = useMemo(
    () =>
      parts
        .map((part) => part.exercises)
        .reduce((prev, curr) => prev + curr, 0),
    [parts],
  );

  return <strong>Total of exercises in the course: {total}</strong>;
};
