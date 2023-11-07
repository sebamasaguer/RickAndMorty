import React, { useState } from 'react';
import styled from './favorites.module.css';
import { connect, useDispatch} from 'react-redux';
import Card from "../card/Card"
import { filterCards,orderCards } from '../../redux/actions';



const Favorites =(props)=> {

    const {myFavorites}= props;
  
    const dispatch = useDispatch();
  const [aux,SetAux] =useState(false);
   
  const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value));
        SetAux(!aux);   
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    
 
 return ( <div className={styled.containerfav}>
   <div className={styled.filtros}>

   <h3>Order by: </h3>
    <select className={styled.select} onChange={handleOrder}> 
    <option value="A">Up</option>
    <option value="D">Down</option>
    </select>  

    <h3>Filter by: </h3>
     <select className={styled.select} onChange={handleFilter}>
    <option>All</option>
    <option value="Male">Male</option>
    <option value="Female">Famale</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    </select> 
   
    </div>
    <div className={styled.cards}>

    {myFavorites.map((char)=>{
    return (
        <Card 
        key={char.id}
        id={char.id}
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        origin={char.origin}
        image={char.image}
        />
        
    )
 })}
  </div>

 </div>
 )
};

const mapStateToProps = (state) => {
       return {
         myFavorites: state.myFavorites
       };
     };
    
export default connect(mapStateToProps)(Favorites);
