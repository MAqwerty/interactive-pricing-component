import './App.css';
import Price from './components/index-Price';
import Circle from "./assets/images/pattern-circles.svg";

function App() {
  return (
    <>
      <div className='header'>
          <h1 className='h1-header' id='h1header'>Simple, traffic-based pricing</h1>  
          <p className='p-header' id='pheader'>Sign-up for our 30-day trial. No credit card required.</p>
          <img className='Circle' src={Circle} /> 
      </div>
      <Price />
    </>
  );
}

export default App;
