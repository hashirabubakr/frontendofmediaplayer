import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path={'/'} element={<Landingpage/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/watchhistory'} element={<Watchhistory/>}/>
     
      </Routes>
      <hr/>
     <Footer/>
    </div>
  );
}

export default App;
