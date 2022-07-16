import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Edit from './components/Edit';


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
