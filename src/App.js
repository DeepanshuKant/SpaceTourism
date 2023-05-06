import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages Imported
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destination" element={<Destination />}></Route>
          <Route exact path="/crew" element={<Crew />}></Route>
          <Route exact path="/technology" element={<Technology />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
