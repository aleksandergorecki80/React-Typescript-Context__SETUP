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

  const removeElement = () => {
    listContext?.listDispatch({
      type: 'REMOVE_ELEMENT',
      payload: {
        id: singleElement.id
      }
  })
}

  return (
    <>
      <li>
        {singleElement.id}
        {singleElement.title}
        {singleElement.author}
        <button onClick={removeElement}>
          remove
        </button>
      </li>
    </>
  );
};

export default ListElement;
