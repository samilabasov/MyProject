import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import blogdata from '../data/blogdata'

const Blog = props => {
  return (
   <div className='blog-page'>
    <div className="hero">
    <div className="p-md-5 rounded-0 text-bg-white">
        <div className="col-md-12 text-center">
          <h1 className="display-4 fw-bold">Welcome to the Ridez blog page</h1>
          <p className="lead my-3">Stay up to date on the Ridez blog page</p>
        </div>
      </div>    
      </div>



      <div className="blog">
      <div className="mb-5 container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.pvalue.map((fd,i)=>(
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="hover hover-4 text-white rounded"><img src={fd.img} alt="" />
              <div className="hover-overlay" />
              <div className="hover-4-content">
                <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">{fd.title}</h3>
                <p className="hover-4-description text-uppercase mb-0 small">{fd.desc}</p>
              </div>
            </div>
            <div className="text-center">
      <Link to={`blogs/${fd.id}`} className="btn btn-primary">READ MORE</Link>
      </div>
          </div>
      ))}
        </div>
      </div>
      </div>







      





     {/* <div className='container-fluid'>
      <div className="left">
      <div className='row g-4'>
      {props.pvalue.map((fd,i)=>(
       <div className='col-12 col-sm-6 col-md-4'>
      <div className="card rounded-0 text-bg-dark" style={{height:"600px"}}>
      <img src={fd.img} className="rounded-0 card-img" alt="..." />
      <div className="card-img-overlay">
      <Link to={`blogs/${fd.id}`} className="btn btn-primary">READ MORE</Link>
      </div>
      <p>{fd.title}</p>
      <h1>{fd.desc}</h1>
      </div>
      </div>
      ))}
      </div>
      </div>
    </div> */}





   </div>
  )
}



const mapStateToProps = (state) => {
  return {
    pvalue: state.actionreducer,
  };
};
export default connect(mapStateToProps)(Blog);