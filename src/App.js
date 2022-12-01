import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/home/home';
import Write from './pages/write/write.jsx';
import About from './pages/about/about.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Contact from './pages/contact/contact';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;