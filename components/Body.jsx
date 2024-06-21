import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  //state variable -- Super powerful variable
  const [listOfResturant, setlistOfResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Data inside the ", json);
    console.log(
      "check the correct data",
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistOfResturant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search">Search</div>

      <div className="filter">
        {/* Filter the resturant on the basics of rating whose rating is more than 4 */}
        <button
          className="filter-btn"
          onClick={() => {
            filterResturant = listOfResturant.filter((res) => {
              return res.data.avgRating > 4;
            });
            setlistOfResturant(filterResturant);
            console.log("4 rating resturant are ", filterResturant);
          }}
        >
          Top rated returant{" "}
        </button>

        {/*RESET BUTTON  */}

        <button
          onClick={() => {
            setlistOfResturant(restaurantList);
          }}
        >
          Reset
        </button>
      </div>

      <div className="res-conatainer">
        {listOfResturant.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
