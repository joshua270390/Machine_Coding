import {useSearchParams} from "react-router-dom";
import {ShoppingCartState} from "../context/context";
import StarRating from "./star-rating";
import {useEffect} from "react";

const filterMap = {
  sort: "SORT_BY_PRICE",
  byRating: "FILTER_BY_RATING",
  byStock: "FILTER_BY_STOCK",
  searchQuery: "FILTER_BY_SEARCH",
  byTab: "FILTER_BY_TAB",
};

const Filters = () => {
  const {filterState, filterDispatch} = ShoppingCartState();

  const {byStock, sort, byRating} = filterState;

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        filterDispatch({
          type: filterMap[key],
          payload: value,
        });
      });
    }
  }, []);

  useEffect(() => {
    setSearchParams(filterState);
  }, [filterState]);

  return (
    <div className='pdt-filter-left'>
          <h4>Filters</h4>

      <h6>Sort by price:</h6>
      <div className='sorting'>
      <label>
        <input
          type="radio"
          className="mr-2"
          id="Ascending"
          name="sort"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        Ascending
      </label>
      <label>
        <input
          type="radio"
          className="mr-2"
          id="descending"
          name="sort"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        Descending
      </label>
      </div>

      <h6>In Stock:</h6>
      <div className='sorting'>
      <label>
        <input
          type="checkbox"
          className="mr-2"
          id="outofstock"
          name="outofstock"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
              payload: !byStock,
            })
          }
          checked={byStock}
        />
       Include Out of Stock
      </label>
      </div>

      <h6>Filter by rating:</h6>
        <div className='sorting'>
        <StarRating
          rating={byRating}
          onChange={(i) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i,
            })
          }
        />
        </div>

        <button 
          className='clear-filter' 
          onClick={()=>filterDispatch({
          type: "CLEAR_FILTER"
             })}>Clear Filter</button>
    </div>
  );
};

export default Filters;
