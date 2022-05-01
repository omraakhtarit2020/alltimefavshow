import React, { useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom';


const Indetails = () => {
    const [moviesFound,setMoviesFound]=useState(null)
    let params=useParams();
    console.log(params)
    const handleClick=async()=>{
        const url=`https://www.omdbapi.com/?t=${params.title}&apikey=a02ee676`
        const response=await fetch(url);
        const result=await response.json()
        setMoviesFound(result)
        
    }
    useEffect(()=>{
        handleClick();
    },[])
    
    
  return (
      <>
    {moviesFound!==null &&<div className='d-flex justify-content-center align-items-center'>
        <div className="card" style={{width: "39rem"}}>
             <div className='img-styling'>
             <img src={moviesFound.Poster} className="card-img-top" style={{height:"100%"}} alt="..."/>
             </div>
            
            <div className="card-body">
                <h5 className="card-title text-center title-style"><b>{moviesFound.Title}</b></h5>
                <p className="card-text"><b>Released on:</b> {moviesFound.Released}</p>
                <p className="card-text"><b>Director:</b> {moviesFound.Director}</p>
                <p className="card-text"><b>Writer:</b>  {moviesFound.Writer}</p>
                <p className="card-text"><b>Actors:</b> {moviesFound.Actors}</p>
                <p className="card-text"><b>Genre:</b> {moviesFound.Genre}</p>
                <p className="card-text"><b>Language:</b> {moviesFound.Language}</p>
                <p className="card-text"><b>Country:</b> {moviesFound.Country}</p>
                <p className="card-text"><b>BoxOffice:</b> {moviesFound.BoxOffice}</p>
                <p className="card-text"><b>Plot:</b> {moviesFound.Plot}</p>
                <Link className='link-style text-white btn btn-danger' to="/">Go back</Link>
            </div>
            </div>
    </div> }
    </>
  )
}

export default Indetails