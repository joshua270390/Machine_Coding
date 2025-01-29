import { Link } from "react-router-dom";
import {ShoppingCartState} from "../context/context";

const Header = () => {
  const {
    state:{cart},
    filterState: {searchQuery},
    filterDispatch,
  } = ShoppingCartState();

  return (
    <div className="sticky top-0 bg-white px-6 pt-5 pb-5">
    <div className="top-header">
      <Link to='/' className="logo">Joe Cart</Link>
      <Link to="/cart" className="shopping-cart px-4 py-2 bg-gray-600 text-white rounded-md">Cart (<span>{cart.reduce((acc,curr)=>acc + curr.qty, 0)}</span>)</Link>
    </div>
    <div className='search-outer'>
      <div className='search'><input onChange={(e)=>filterDispatch({type:"FILTER_BY_SEARCH",payload: e.target.value})} type='text' value={searchQuery} placeholder='Search...' /><button>🔍</button></div>
    </div>
    </div>
)
}

export default Header