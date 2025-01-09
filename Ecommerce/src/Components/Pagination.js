import React, {useEffect, useState} from 'react'

const Pagination = ({page, setPage, filteredProducts, PDTS_PER_PAGE, MaxVisiblePages = 10}) => {

    const totalPages = Math.ceil(filteredProducts.length / PDTS_PER_PAGE);

    const pageHandler = (selectedpage) => {
        setPage(selectedpage);
    }

    const renderPageKey = (currentPage, key) => {
        return <span className={page === currentPage ? "activeclass" : ""} key={key} onClick={()=>pageHandler(currentPage)}>{currentPage}</span>
    }

    const renderPageNumber = () => {
        
        //  return  [...Array.from({ length: Math.ceil(filteredProducts.length / PDTS_PER_PAGE) })].map((_,i) =>{
        //     return  <span className={page === i+1 ? "activeclass" : ""} key={i} onClick={()=>pageHandler(i+1)}>{i+1}</span>}) 

        const pageNums = [];

        if(totalPages <= MaxVisiblePages){
            for(let i = 1; i<=totalPages; i++){
                pageNums.push(renderPageKey(i))
            }
        } else {
            //truncate logic here
            const startingPage = Math.max(1, page - Math.floor(MaxVisiblePages/2))
            const endingPage = Math.min(totalPages, startingPage + MaxVisiblePages - 1)

            if(startingPage > 1){
                if(startingPage > 2){
                    pageNums.push(renderPageKey(1))
                }
                pageNums.push(renderPageKey("...","ellipse-start"))
            }

            for(let i = startingPage; i<=endingPage; i++){
                pageNums.push(renderPageKey(i))
            }

            if(endingPage < totalPages){
                pageNums.push(renderPageKey("...","ellipse-end"))
                if(endingPage < totalPages-1){
                    pageNums.push(renderPageKey(totalPages))
                }
            }
        }

        return pageNums;
        
    }

  return (
    <div className='pagination'>
        { page === 1 ? <></>:
        <span onClick={() => pageHandler(page - 1)}>◀</span>
        }
        {renderPageNumber()}
        { page === Math.ceil(filteredProducts.length / PDTS_PER_PAGE) ? <></>:
        <span onClick={() => pageHandler(page + 1)}>▶</span>
        }
    </div>
  )
}

export default Pagination