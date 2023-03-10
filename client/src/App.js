import './App.css';
import { useState, useEffect } from 'react';
import MangaPage from './components/MangaPage'
import NavBar from './components/NavBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth'
import { AppBar, CssBaseline, Grid } from "@material-ui/core"
import MangaBuild from './components/MangaBuild';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  const [mangas, setMangas] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [errors, setErrors] = useState([])
  const [newUser, setNewUser] = useState(false)
  const [logged, setLogged] = useState(false)
  const hist = useNavigate()
  
 useEffect(() => {
   fetch('/mangas')
    .then(res => {
      if(res.ok){
        res.json().then(useSetMangas)
      } else {
        res.json().then(useSetErrors)
      }
    })  
 }, [])
console.log(logged)


 function useSetCurrentUser(info){
  setCurrentUser(info)
  hist('/mangas')
  setLogged(true)
 }

 function useSetMangas(ata){
  setMangas(ata)
 }

 function addMangas(data){
  let holder = mangas
  holder = [...holder, data]
  setMangas(holder)
  hist('/mangas')
 }

 function addMangas2(data){
  setMangas(data)
  hist('/mangas')
 }

 function deleteUser(){
  setCurrentUser({})
  hist('/mangas')
  setMangas(mangas)
  setLogged(false)
  }

  function useSetNewUser(){
    setNewUser(!newUser)
  }

  function clearErrorMessage(){
    setErrors([])
  }

  function useSetErrors(data){
  console.log(data)
  if(data.errors){
    let errorCont = Object.entries(data.errors)
    console.log(errorCont)
    if(errorCont.length < 2){
      let error2 = Object.entries(data.errors)
      console.log(error2)
      setErrors(error2)
      setTimeout(() => {
      clearErrorMessage()
      }, 10000);
    } else {
      let error2 = errorCont.map(erC => Object.entries(erC))
      console.log(error2)
      setErrors(error2)
      setTimeout(() => {
      clearErrorMessage()
      }, 10000);
    }
    let error2 = errorCont.map(error => Object.entries(error))
    setErrors(error2)
    setTimeout(() => {
      clearErrorMessage()
      }, 10000);
    } else {
      let error1 = Object.entries(data.error)
      setErrors(error1)
    setTimeout(() => {
      clearErrorMessage()
      }, 10000);
    }
  
  }
 
  return (
    <>
    <CssBaseline />
    <Header id='header'/>
    <AppBar position='relative'>
      <NavBar deleteUser={deleteUser} currUser={currentUser} logged={logged}/>
    </AppBar>
    <div className="App">
      
      {logged ? null : <div className='button' id='auth' onClick={() => hist('/auth')} >
      <Grid container spacing={2} justifyContent='center' >
        <Grid item>
          <AccountBoxIcon >
          <svg data-testid="AccountBoxIcon" color='primary' fontSize='small'>
            Log In
          </svg>
          </AccountBoxIcon>
        </Grid>
      </Grid>
      </div>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth setu={useSetCurrentUser} useSE={useSetErrors} newUsr={newUser} useSnu={useSetNewUser} />} />
        <Route path='/mangas' element={<MangaPage mangas={mangas} currUse={currentUser} logged={logged} add={addMangas2} />} />  
        <Route path='/mangas/new' element={<MangaBuild addMng={addMangas} usErr={useSetErrors} />} />
                     
      </Routes>
      {/* <ReviewsPage /> */}       
    </div>
    {errors?errors.map(e => <div key={e[0]}>{e[0] +': ' + e[1]}</div>):null}
    <Footer />
    </>
  );
}

export default App;

