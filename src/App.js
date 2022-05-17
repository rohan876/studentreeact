import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Addstudent from './components/Addstudent';
import Searchstud from './components/Searchstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Addstudent/>}/>
      <Route path="/search" exact element={<Searchstud/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
