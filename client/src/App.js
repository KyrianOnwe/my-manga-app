// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MangaPage from './components/MangaPage'
import NavBar from './components/NavBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth'
// import ReviewsPage from './components/ReviewsPage';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@material-ui/core"
import useStyles from "./styles";



function App() {
  const classes = useStyles()
  const [mangas, setMangas] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [errors, setErrors] = useState([])
  const [newUser, setNewUser] = useState(false)
  // const [signingIn, setSigningIn] = useState(false)
  const hist = useNavigate()
  
  // send to auth to process for signing in
 useEffect(() => {
   fetch('/mangas')
    .then(res => res.json())
    .then(data => setMangas(data))  
 }, [])

 function useSetCurrentUser(info){
  setCurrentUser(info)
 }

//  function useSetSigningIn(){
//   setSigningIn(true)
//  }

 function deleteUser(){
  // console.log('deleted user')
  setCurrentUser({})
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
    <AppBar position='relative'>
      <NavBar deleteUser={deleteUser}/>
    </AppBar>
    <div className="App">
      
      <div className={classes.button} onClick={() => hist('/auth')} >
      <Grid container spacing={2} justifyContent='center' >
        <Grid item>
          <Button variant='contained' color='orange'>
            Log In
          </Button>
        </Grid>
      </Grid>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth setu={useSetCurrentUser} useSE={useSetErrors} newUsr={newUser} useSnu={useSetNewUser} />} />
        <Route path='/mangas' element={<MangaPage mangas={mangas} currUse={currentUser} />} />                
      </Routes>
      {/* <ReviewsPage /> */} 
    </div>
    </>
  );
}

export default App;

