// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MangaPage from './components/MangaPage'
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [mangas, setMangas] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  // send to auth to process for signing in
 useEffect(() => {
   fetch('/mangas')
    .then(res => res.json())
    .then(data => setMangas(data))  
 }, [])

 function deleteUser(){
  // console.log('deleted user')
  setCurrentUser({})
}
 
  return (
    <div className="App">
      <NavBar deleteUser={deleteUser}/>
      <button>Sign in</button>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <MangaPage mangas={mangas}/>
 
    </div>
  );
}

export default App;

