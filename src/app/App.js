import './App.css';
import Sidebar from '../components/sidebar';
import Homepage from '../components/homepage';
import { Route, Routes } from 'react-router-dom';
import Movie from '../components/movie';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="box">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movie' element={<Movie />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
