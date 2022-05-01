import React from 'react'
import {IoSearchCircle } from "react-icons/io5";
import Moviedata from './Moviedata';
import Content from './Content';
import { useState } from 'react';
import SearchCard from './SearchCard';

const Dashboard = () => {
    const [searchMovie,setSearchMovie]=useState();
    const [view,setView]=useState(false)
    const [viewError,setViewError]=useState(false)
    const [movieFound,setMovieFound]=useState()
    const handleSearch=(e)=>{
      setSearchMovie(e.target.value)
    }
    const handleClick=async()=>{
        const url=`https://www.omdbapi.com/?t=${searchMovie}&apikey=a02ee676`
        const response=await fetch(url);
        const result=await response.json()
        
        if(result.Error){
                setView(false)
                setViewError(true)
        }else{
          if(searchMovie.length!==0){
            setMovieFound(result)
            setSearchMovie("")
            setView(true)
            setViewError(false)
          }
           
        } 
      
    }
  return (
      <>
    <div className='mt-4'>
      <div className='row g-0 d-flex justify-content-center'>
          <div className="col-md-6">
            <div className="input-group mb-3">
            <input type="text" className="form-control " placeholder="Search Your Movie" value={searchMovie} onChange={(e)=>handleSearch(e)}/>
          <button className="btn btn-dark" type="button" id="button-addon2" onClick={handleClick}><IoSearchCircle/></button>
        </div>
        </div>
      </div>
    </div>
    {viewError &&<div className='container'>
      <div className='row g-0 d-flex justify-content-center '>
        <div className='col-md-6'>
              <div className="alert alert-danger text-center" role="alert">
             Movie Not Found!!
              </div>
        </div> 
        </div>
</div>}
    {view && <SearchCard movieFound={movieFound} />}
    <div className='container'>
   <div className='row'>
      {Moviedata.map((item)=>{
             return <Content item={item}/>   
      })}
   </div>
   </div>
   </>
  )
}

export default Dashboard