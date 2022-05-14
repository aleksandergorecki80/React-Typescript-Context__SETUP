import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';
import { v4 as uuidv4 } from 'uuid';


interface AddElementFormProps {}

const AddElementForm: React.FC<AddElementFormProps> = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const listContext = useContext(ListContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, author);
    listContext?.listDispatch({
      type: 'ADD_ELEMENT',
      payload: {id: uuidv4(), title, author}
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Title')}
        />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Author')}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddElementForm;
