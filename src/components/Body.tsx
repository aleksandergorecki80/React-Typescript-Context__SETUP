import React, { useContext } from 'react';
import { ExampleOneContext } from '../contexts/ExampleOne';
import { ExampleTwoContext } from '../contexts/ExampleTwo';

interface BodyProps {
  
}

const Body: React.FC<BodyProps> = () => {
  const exampleContext = useContext(ExampleOneContext);
  const secondContext = useContext(ExampleTwoContext);

  if (!exampleContext) {
    throw new Error('No data found!');
  }

  return (
    <>
      <h1>Body</h1>
      <div>User: {secondContext?.name} is currently {secondContext?.isLoggedIn ? 'logged in' : 'logged out' }</div>
      {/* <div>{exampleContext[0].title}</div>
      <div>{exampleContext[0].author}</div> */}
    </>
  );
};

export default Body;
