import { Routes, Route, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SearchEvent from './pages/SearchEvent';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}  />
        <Route path="/search" element={<SearchEvent />}  />
      </Routes>
    </div>
  );
}

export default App;
