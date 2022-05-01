import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = (props) => {
  const item=props.movieFound
    const{Title,Released,Director,Writer,Actors,Genre,Poster}=props.movieFound
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div className="card mb-3 searchcardstyle" style={{width: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4 searchimg-sty">
            <img src={Poster} className="img-fluid rounded-start"   style={{height:"100%"}} alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{Title}</h5>
              <p className="card-text"><b>Released on:</b> {Released}</p>
              <p className="card-text"><b>Director:</b> {Director}</p>
              <p className="card-text"><b>Writer:</b> {Writer}</p>
              <p className="card-text"><b>Actors:</b> {Actors}</p>
              <p className="card-text"><b>Genre:</b> {Genre}</p>
              <div className='d-flex justify-content-center'>
                    <Link className='btn btn-primary text-center link-style text-white' to={`/indetails/${Title}`}>Details</Link>
                </div>
            </div>
          </div>
        </div>
</div>
</div>
  )
}

export default SearchCard