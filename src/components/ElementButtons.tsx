import React from 'react';
import { useDispatch } from 'react-redux';
import { addElement, removeElement } from '../store/slices/elementSlice';

const ElementButtons: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="space-x-2">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => dispatch(addElement())}
      >
        Add
      </button>
      <button
        className="rounded bg-red-500 px-4 py-2 text-white"
        onClick={() => dispatch(removeElement())}
      >
        Delete
      </button>
    </div>
  );
};

export default ElementButtons;
