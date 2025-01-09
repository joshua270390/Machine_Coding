import React, {useEffect, useState} from 'react'

const Job = () => {

  const[jobs, setJobs] = useState([]);
  const[jobsId, setJobsId] = useState(null);
  const[currentPage, setCurrentPage] = useState(0)
  const[fetchingDetails, setFetchingDetails] = useState(false)

  
  const API_ENDPOINT ="https://hacker-news.firebaseio.com/v0"
  const JOBS_PER_PAGE = 4;
  
  const fetchJobs = async() => {
    setFetchingDetails(true)
    let jobidlist = jobsId
    if(jobsId === null){
      jobidlist = await fetch(`${API_ENDPOINT}/jobstories.json`).then(res => res.json()).catch((err)=> console.log(err));
      console.log(jobidlist)
      setJobsId(jobidlist);
    }

    const jobslist = jobidlist.slice(currentPage*JOBS_PER_PAGE, currentPage*JOBS_PER_PAGE+JOBS_PER_PAGE)

    const datares = await Promise.all(
      jobslist?.map((jid) =>
          fetch(`${API_ENDPOINT}/item/${jid}.json`).then(res=> res.json()).catch((err) => console.error(`Error fetching job ${jid}:`, err))
      )
    )
    setJobs([...jobs, ...datares])
    setFetchingDetails(false)
  }

   useEffect(()=>{
    fetchJobs();
   },[currentPage]);

  function JobPosting({url,title,by,time}){
    const newDate = new Date(time * 1000).toLocaleString()
    return <div className='post' role="listitem">
     <h2><a href={url} target="_blank" rel="noopener" style={{ color: url ? "#0041d3" : "#000" }}>{title}</a></h2>
     <span>By {by} - {newDate}</span>
    </div>
  }

  // const pageHandler = (selectedpage) => {
  //   setPage(selectedpage);
  // }

  return (
    <div className='pdts-outer-wrapper-outer'>
      
    <div className='pdts-outer-wrapper'>
    <h1>Job Board</h1>
        {
          jobsId === null || jobs?.length < 1 ? <span>Loading...</span> : 
          (
          <div> 
          <div className='items' role="list">
            {jobs?.map((job, index)=>{
            return <JobPosting key={`${job.id}-${index}`} {...job}/>
            })}
          </div>

          <button disabled={fetchingDetails} onClick={()=>setCurrentPage(currentPage + 1)}>{fetchingDetails? "Loading...":"Load More Jobs"}</button> 

          {/* <button onClick={()=>setCurrentPage(currentPage - 1)}>Load Less Jobs</button>  */}
          
          </div>
          )
        }
    </div>
    </div>
  )
}

export default Job