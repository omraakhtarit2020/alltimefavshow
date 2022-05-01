import React from 'react'
import { Link } from 'react-router-dom';

const Content = (props) => {
    const{Title,Released,Genre,Director,Actors,Plot,Poster}=props.item
  return (
      <>
        <div className='col-md-4 mt-3 mb-3'>
                <div className="card card-style">
                <div className='img-style'>
                <img src={Poster} style={{height:"100%"}} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body body-style">
                    <h5 className="card-title text-center">{Title}</h5>
                    <p className="card-text"><b>Released On:</b> {Released}</p>
                    <p className="card-text"><b>Director:</b> {Director}</p>
                    <p className="card-text"><b>Actors:</b> {Actors}</p>
                    <p className="card-text"><b>Genre:</b> {Genre}</p>
                    <div className='d-flex justify-content-center'>
                    <Link className='btn btn-warning text-center link-style text-white' to={`/indetails/${Title}`}>Details</Link>
                    </div>
                </div>
                </div>
    </div>
      </>
  )
}

export default Content