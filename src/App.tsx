import React from 'react';
import ElementButtons from './components/ElementButtons';
import ElementList from './components/ElementList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <ElementButtons />
      <ElementList />
    </div>
  );
};

export default App;
