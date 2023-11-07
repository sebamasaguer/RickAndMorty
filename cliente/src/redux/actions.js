import axios from "axios";
import { ADD_FAV, REMOVE_FAV,FILTER ,ORDER } from "./types";


const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data
         });
      }  catch (error) {      
         window.alert(error.message);
      }
   };
};
const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
try {    
      const { data } = await axios.delete(endpoint);
      return dispatch({
         type: REMOVE_FAV,
         payload: data
      });
   } catch (error) {
      window.alert(error.message);
   }
};
};

const filterCards = (gender) =>{ 
  return ({
  type: FILTER,
  payload: gender
})};

const orderCards = (order) =>{ 
  return ({
  type: ORDER,
  payload: order
})};

export { addFav, removeFav, filterCards, orderCards};