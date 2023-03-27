import { useState, useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/about.jsx'
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites'
import Error404 from './components/Error404/error404.jsx'
import Form from './components/Form/Form.jsx'


function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess]= useState(false);

  const username = "lunisj15@gmail.com";
  const password = "romeo2013";

  const login =(userData) =>{
    //console.log(userData)
    if(userData.username === username && userData.password === password) { 
      console.log('si son')
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const logout =()=>{
    if(access === true) {
    setAccess(false)
    navigate('/')
    }
  }

  function onSearch(character) {
    //console.log(character)
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
        //console.log(data)
          if (data.name) {
            characters.find((chart) => chart.id === data.id) === undefined ?
              setCharacters((oldChars) => [...oldChars, data]) : alert("No se puede mostrar personajes repetidos");
          } else {
              window.alert('No hay personajes con ese ID');
          } 
        }, []);
  }
  
  const onClose = (id) => {
    //console.log(character)
    const filtrado = characters.filter((char) => char.id !== id)
    setCharacters(filtrado)
  };
  
  return (
    <div className='App' style={{ padding: '25px'}}>
      { location.pathname !== "/" &&
        <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path="/" element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default App
