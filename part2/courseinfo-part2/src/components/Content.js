import { Part } from './Part';

export const Content = ({ parts }) => {
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
