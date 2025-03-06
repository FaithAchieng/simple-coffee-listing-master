import Card from './Card';
import AuthorInfo from './AuthorInfo';
import CoffeeCards from'./CoffeeCards';

function App() {
  return(
    <>
        <div className="main-container">
            <Card />
            <CoffeeCards />
        </div>
      
      <AuthorInfo />
          
      
    </>
  );
}

export default App
