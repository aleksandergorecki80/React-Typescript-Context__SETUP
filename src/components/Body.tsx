import React, { useContext } from 'react';
import { ExampleOneContext } from '../contexts/ExampleOne';

interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
  const exampleContext = useContext(ExampleOneContext);

  if (!exampleContext) {
    throw new Error('No data found!');
  }

  return (
    <>
      <h1>Body</h1>
      <div>{exampleContext.name}</div>
      <div>{exampleContext.author}</div>
      <div>{exampleContext.url}</div>
    </>
  );
};

export default Body;
