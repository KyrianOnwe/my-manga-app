// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MangaPage from './components/MangaPage'

function App() {
  const [mangas, setMangas] = useState([])
 useEffect(() => {
   fetch('/mangas')
    .then(res => res.json())
    .then(data => setMangas(data))  
 }, [])
 
  return (
    <div className="App">
      <MangaPage mangas={mangas}/>
 
    </div>
  );
}

export default App;

