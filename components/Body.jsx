import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from '../Utils/mockData';


const Body = () => {
  console.log('data on the body page',restaurantList);

  //state variable -- Super powerful variable
  const[listOfResturant,setlistOfResturant]=useState(restaurantList);

  //Normal JS Variable
  // let listofResturantjs=[
    
  // ]
  return (
    <div className='body'>
        
        <div className='Search'>Search</div>
        
        <div className='filter'>
          <button className='filter-btn' onClick={()=>{
            filterResturant=listOfResturant.filter((res)=> {
              return res.data.avgRating>4 
          })
            setlistOfResturant(filterResturant);
            console.log('4 rating resturant are ',filterResturant);
          }}>Top  rated returant </button>
        </div>

        <div className='res-conatainer'>
            {
              listOfResturant.map((restaurant)=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            }  
        </div>  
    </div>
  )
}

export default Body