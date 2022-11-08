import { Course } from './Course';

export const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}
    </>
  );
};
