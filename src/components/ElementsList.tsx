import React, { useContext } from 'react';
import ListElement from './ListElement';
import { ListContext } from '../contexts/ListContext';
import { ExampleTwoContext } from '../contexts/ExampleTwo';

interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
  const listContext = useContext(ListContext);
  const secondContext = useContext(ExampleTwoContext);

  if (!listContext) {
    throw new Error('No data found!');
  }

  return (
    <div>
      <h1>Body</h1>
      <div>
        User: {secondContext?.name} is currently{' '}
        {secondContext?.isLoggedIn ? 'logged in' : 'logged out'}
      </div>
      <ul>
        {listContext.list &&
          listContext.list.map((singleElement, key) => {
            return <ListElement singleElement={singleElement} key={key} />;
          })}
      </ul>
    </div>
  );
};

export default Body;
