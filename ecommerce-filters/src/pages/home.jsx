import {useMemo, useState, useRef} from "react";
import {ShoppingCartState} from "../context/context";
import Pagination from "../components/pagination";
import StarRating from "../components/star-rating";
import Filters from "../components/filters";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const Home = () => {
  const [page, setPage] = useState(1);

  const hiddenTabsContainerRef = useRef(null);

  const {
    state: {products, cart},
    dispatch,
    filterState: {sort, byStock, byRating, searchQuery, byTab},  
    filterDispatch
  } = ShoppingCartState();

  const filtering = ["All" , ...new Set(products.map(product => product.category))]

  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (byTab === "All") {
      filteredProducts
    } else {
      filteredProducts = filteredProducts.filter(prod => byTab === prod.category)
    }

    setPage(1);

    return filteredProducts;
  }, [sort, byStock, byRating, byTab, searchQuery, products]);


  const scrollTab = (direction) => {
    if (hiddenTabsContainerRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150; // Set scroll amount based on direction
      hiddenTabsContainerRef.current.scrollTo({
        left: hiddenTabsContainerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
       <div className="flex justify-between items-center">
         <h1>Products Listing</h1>
         <div className="flex gap-5">
            <FaArrowCircleLeft className="text-2xl cursor-pointer" onClick={() => scrollTab("left")} />
            <FaArrowCircleRight className="text-2xl cursor-pointer" onClick={() => scrollTab("right")} />
        </div>
      </div>
       <div ref={hiddenTabsContainerRef} className='tab-pills'>{filtering?.map((pill,index)=><div key={index} className={`${byTab === pill ? "active pills" : "pills"}`} onClick={()=>filterDispatch({type:"FILTER_BY_TAB",payload: pill})}>{pill}</div>)}</div>
      <div className="py-9 flex">
        {/* Filters */}
        <Filters />
        {/* Products */}
        {filteredProducts.length > 0 && (
          <div className="products w-full">
            {filteredProducts?.slice(page * 9 - 9, page * 9).map((prod) => {
              const inCart = cart.some((item) => item.id === prod.id )
              return (
                <span className={`products__single`} key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <h5>{prod.title}</h5>
                  <div className='flex-box-flex'>
                    <div className='pdts-price'>Price: {prod.price}</div>
                    {/* <div className={`pdts-status ${prod.inStock ? "green" : "red"}`}>
                      {prod.inStock ? "In Stock": "Out Of Stock"}
                    </div> */}
                     <StarRating rating={prod.rating} />
                  </div>
                 
                  <button onClick={()=>dispatch({type: inCart? "REMOVE_FROM_CART" :"ADD_TO_CART",payload:prod})} disabled={!prod.inStock} className={`px-3 py-2 ${!prod.inStock ? '' : 'hover:bg-orange-400'} text-white rounded-md mt-2 ${prod.inStock ? !inCart ? 'bg-gray-700' : 'bg-blue-500' : 'bg-red-700'}`}>
                  {prod.inStock ? !inCart ? "Add To Cart" : "Remove From Cart" : "Out Of Stock"}
                    </button>
                </span>
              );
            })}
          </div>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <Pagination products={filteredProducts} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Home;




