import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom"
import HighlightText from './HighlightText';

const ProductListNew = () => {

  const STATE = {
    Loading: "Loading",
    Success: "Success",
    Error: "Error"
  }

  const[products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("")
  const[autoCompleteSearch, setAutoCompleteSearch] = useState([]);
  const[visibility, setVisibility] = useState(false)
  const[status, setStatus] = useState(STATE.Loading)
  const[page, setPage] = useState(1)
  const[totalPages, setTotalPages] = useState(0)

  const BASE_URL = "https://dummyjson.com/products"
  const PDTS_PER_PAGE = 9;
  const CACHE = useRef({})

  const fetchPoducts = async() => {
    const res = await fetch(`${BASE_URL}?limit=9&skip=${page * PDTS_PER_PAGE - PDTS_PER_PAGE}`)
    const data = await res.json();
    console.log("dta",data)
    if(data && data.products){
      setProducts(data.products);
      setFilteredProducts(data.products);
      setTotalPages(Math.ceil(data.total / 9))
    }
  }

  useEffect(()=>{
    fetchPoducts();
  },[page]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
  
    const fetchProductsSearch = async () => {
      if (!search.trim()) {
        setVisibility(false);
        setAutoCompleteSearch([]);
        return;
      }
  
      // Check the cache first
      if (CACHE.current[search]) {
        setStatus(STATE.Success);
        setAutoCompleteSearch(CACHE.current[search]);
        setVisibility(true);
        return;
      }
  
      try {
        setStatus(STATE.Loading);
        const res = await fetch(`${BASE_URL}/search?q=${search}`, { signal });
        const data = await res.json();
  
        if (data && data.products) {
          // Cache the response
          CACHE.current[search] = data.products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          );
          setStatus(STATE.Success);
          setAutoCompleteSearch(CACHE.current[search]);
          setVisibility(true);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setStatus(STATE.Error);
        }
      }
    };
  
    const timer = setTimeout(fetchProductsSearch, 500); // debounce
  
    return () => {
      clearTimeout(timer);
      abortController.abort();
    };
  }, [search]);
  

  const pageHandler = (selectedpage) => {
    setPage(selectedpage);
  }

  // console.log(products)

  const filtering = ["All" , ...new Set(products.map(product => product.category))]
  // console.log("filtering", filtering)

  const handleTab = (newpill) => {
    setActiveTab(newpill)
    if(newpill === "All") {
      setFilteredProducts(products)
    } else {
      const filteredPdts = products.filter(product => newpill === product.category)
      setFilteredProducts(filteredPdts)
    }
    setPage(1);
  }

  const handleAutoComplete = (id) => {
     const specificProduct = products.filter((pdt) => pdt.id === id)
     setFilteredProducts(specificProduct)
     setSearch("")
     setVisibility(false)
  }

  return (
    <div className='pdts-outer-wrapper-outer'>
    <div className='search-outer'>
      <div className='search'><input onChange={(e)=>setSearch(e.target.value)} type='text' value={search} placeholder='Search...' /><button>🔍</button></div>

{visibility && (
  <div className="auto-complete-list">
    <ul>
    {status === STATE.Error
      ? "Error Status"
      : autoCompleteSearch?.length > 0
      ? autoCompleteSearch.map((list) => (
          <li
            key={list.id}
            onClick={() => handleAutoComplete(list.id)}
          >
            {list.title}
            {/* <HighlightText title={list.title} search={search}/> */}
          </li>
        ))
      : "No results found"
      }
      </ul>
  </div>
)}

    </div>
    <h1>Products Listing</h1>
    <div className='tab-pills'>{filtering?.map((pill,index)=><div key={index} className={`${activeTab === pill ? "active pills" : "pills"}`} onClick={()=>handleTab(pill)}>{pill}</div>)}</div>
    <div className='pdts-outer-wrapper tab-contents'>
        {filteredProducts?.map((pdt)=>
           <div className='pdts-outer tab-content' key={pdt.id}>
              <Link to={`/product-list/${pdt.id}`}>
              <div className='pdts-image'><img src={pdt.thumbnail} alt={pdt.title}/></div>
              <div className='pdts-name'>{pdt.title}</div>
              </Link>
           </div>
        )}
        
    </div>
    {filteredProducts.length > 0 && 
        <div className='pagination'>
            { page === 1 ? <></>:
            <span onClick={() => pageHandler(page - 1)}>◀</span>
            }
            {
           [...Array.from({ length: Math.ceil(filteredProducts.length / PDTS_PER_PAGE) })].map((_,i) =>{
            return  <span className={page === i+1 ? "activeclass" : ""} key={i} onClick={()=>pageHandler(i+1)}>{i+1}</span>
            }) 
            }
            { page === Math.ceil(filteredProducts.length / PDTS_PER_PAGE) ? <></>:
            <span onClick={() => pageHandler(page + 1)}>▶</span>
            }
        </div>
    }
    </div>
  )
}

export default ProductListNew