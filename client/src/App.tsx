import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CatPage from './pages/CatPage/CatPage';
import DogPage from './pages/DogPage/DogPage';
import FoxPage from './pages/FoxPage/FoxPage';
// import RabbitPage from './pages/RabbitPage/RabbitPage';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav style={{ padding: '10px' }}>
      <button 
        onClick={() => navigate('/cat')} 
        style={{ margin: '0 10px', padding: '5px 10px' }}
      >
        Котики
      </button>
      <button 
        onClick={() => navigate('/dog')} 
        style={{ margin: '0 10px', padding: '5px 10px' }}
      >
        Собачки
      </button>
      <button 
        onClick={() => navigate('/fox')} 
        style={{ margin: '0 10px', padding: '5px 10px' }}
      >
        Лисички
      </button>
      {/* <button 
        onClick={() => navigate('/rabbit')} 
        style={{ margin: '0 10px', padding: '5px 10px' }}
      >
        Кролики
      </button> */}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <NavigationButtons />
      
      <Routes>
        <Route path="/cat" element={<CatPage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/fox" element={<FoxPage />} />
        {/* <Route path="/rabbit" element={<RabbitPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
