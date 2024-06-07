import React from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from '../Utils/mockData';
const Body = () => {
  console.log('data on the body page',restaurantList)
  return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='res-conatainer'>
            {
              restaurantList.map((restaurant)=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            }  
        </div>  
    </div>
  )
}

export default Body