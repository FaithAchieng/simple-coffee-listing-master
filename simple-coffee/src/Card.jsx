import { useState, useEffect } from "react";

function Card() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debug API response
        setCoffeeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <div className="title">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <button>All Products</button>
        <button>Available Now</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="coffee-list">
          {coffeeData.length === 0 ? (
            <p>No data available</p>
          ) : (
            coffeeData.map((coffee) => (
              <div className="coffee-card" key={coffee.id}>
                <img src={coffee.image} alt={coffee.name} />
                <div className="coffee-details">
                  <p>{coffee.name}</p>&nbsp;
                  <span>${coffee.price ? Number(coffee.price).toFixed(2) : "N/A"}</span>
                </div>
                <div className="coffee-ratings">
                  <img src="./src/assets/Star_fill.svg" alt="Star icon" />
                  <p className="rating">{coffee.rating}</p> ({coffee.votes} votes)
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
