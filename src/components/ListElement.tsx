import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

interface ListElementProps {
  singleElement: {
    id: string;
    title: string;
    author: string;
  };
  key: number;
}

const ListElement: React.FC<ListElementProps> = ({ singleElement }) => {
  const listContext = useContext(ListContext);

  return (
    <>
      <li>
        {singleElement.id}
        {singleElement.title}
        {singleElement.author}
        <button onClick={() => listContext?.removeElement(singleElement.id)}>
          remove
        </button>
      </li>
    </>
  );
};

export default ListElement;
