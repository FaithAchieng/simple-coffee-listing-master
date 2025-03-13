 import { useState,useEffect } from "react";
 
 function Card(props){
    const [coffeeData,setCoffeeData]=useState([]);
    useEffect(()=>{
    fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      )
        .then((response) => response.json())
        .then((data) => {
          setCoffeeData(data);

        })
        .catch((error) => {
  console.log(error);
        });
    });
        
    return(
        <div className="card">
            <div className="title">
                        <h1>Our Collection</h1>

            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
                expertly roasted in small batches and shipped fresh weekly.</p>

                <button>All Products</button>
                <button>Available Now</button>
            </div>
            
                <div className="coffee-card">
            
                    <img src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg" alt="Coffee cup"></img>
                    <div className="coffee-details">
                    <p>Cappucinno </p>&nbsp;
                    <span>$5.20</span>
                    </div>
                    <div className="coffee-ratings">
                        <img src="./src/assets/Star_fill.svg" alt="" />
                        <p className="rating">4.7</p> (65 votes)
                    </div>
                    
                    
                </div>
                
        </div>
    );
 }
 export default Card