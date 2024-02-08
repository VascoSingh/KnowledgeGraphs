// App.js
import React, { useState } from 'react';
import KnowledgeGraph from './components/KnowledgeGraph';
import DynamicTreeGraph from './components/DynamicTreeGraph';

function App() {
  const [currentView, setCurrentView] = useState('knowledgeGraph');

  return (
    <div>
      <button onClick={() => setCurrentView('knowledgeGraph')}>Knowledge Graph</button>
      <button onClick={() => setCurrentView('dynamicTreeGraph')}>Dynamic Tree Graph</button>
      {currentView === 'knowledgeGraph' && <KnowledgeGraph />}
      {currentView === 'dynamicTreeGraph' && <DynamicTreeGraph />}
    </div>
  );
}

export default App;
