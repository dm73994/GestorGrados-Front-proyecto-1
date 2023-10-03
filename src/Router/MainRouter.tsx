// src/App.js
import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home/Home';

const MainRouter = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default MainRouter;