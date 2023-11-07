import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/about/about';
import Detail from './components/detail/Detaild';
import Favorites from './components/favorites/Favorites';
import Form from './components/Formulario/form';
import { useEffect } from 'react';


function App() {
  const [Characters, setCharacters] = useState([]);
const location = useLocation(); 
const [access, setAccess] = useState(false);
const navigate= useNavigate();

useEffect(() => {
  !access && navigate('/');
}, [access]);

async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   try  {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
   }
    catch (error) { 
      window.alert(error.message);  
      
}
}

 async function onSearch(id) {
   const repeated = Characters.find((item) => item.id === Number (id))
   if (repeated) return alert('¡Este personaje ya fue agregado!')

try {
    const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`); 
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      window.alert('¡No hay personajes con este ID!');
    }
  } catch (error) {
    window.alert('¡No hay personajes con este ID!');
  }
}

function logout() {
    setAccess(false);
    navigate('/');
  }
const onClose = (id) => {
   setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
 };
   return (
      <div className='App'>
{location.pathname!== '/'&& <Nav onSearch={onSearch} logout={logout}/>}

       
       <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route
          path='/home'
          element={<Cards characters={Characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      </div>
   );
}

export default App;
