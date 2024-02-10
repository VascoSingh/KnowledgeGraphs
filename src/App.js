// App.js
import React, { useState } from 'react';
import KnowledgeGraph from './components/KnowledgeGraph';
import DynamicTreeGraph from './components/DynamicTreeGraph';
import ReactVisGraph from './components/ReactVisGraph';

function App() {
  const [currentView, setCurrentView] = useState('knowledgeGraph');

  return (
    <div>
      <button onClick={() => setCurrentView('knowledgeGraph')}>Knowledge Graph</button>
      <button onClick={() => setCurrentView('dynamicTreeGraph')}>Dynamic Tree Graph</button>
      <button onClick={() => setCurrentView('reactVisGraph')}>react-vis Graph</button>
      {currentView === 'knowledgeGraph' && <KnowledgeGraph />}
      {currentView === 'dynamicTreeGraph' && <DynamicTreeGraph />}
      {currentView === 'reactVisGraph' && <ReactVisGraph />}
    </div>
  );
}

export default App;
