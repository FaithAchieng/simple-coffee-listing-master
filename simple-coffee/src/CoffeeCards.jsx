
function CoffeeCards(props){
    fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      )
        .then((response) => response.json())
        .then((data) => {
          
        })
        .catch((error) => {
          // Handle any errors here
        });
    return(
        <div className="coffee-card">
            
            <img src="" alt="Coffee cup"></img>
        </div>
    );
}
export default CoffeeCards