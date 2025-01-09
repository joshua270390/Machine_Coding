import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 justify-center items-center flex flex-col">
      <div className='container'>
       <CurrencyConverter/>
      </div>
    </div>
  );
}

export default App;
