import React, {useEffect} from 'react'
import {t} from 'i18next'
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import productdata from '../data/productdata'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
  const notify = () => toast("CART ADDED!");
  const { addItem } = useCart();
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='product-page bg-white'>
      <div className="hero">
      {productdata.heroone.map((fd,i)=>(
        <div className="p-4 p-md-5 mb-4 text-bg-dark" key={i}>
        <div className="col-md-12 px-0">
          <h1 className="display-4 text-center">{t(`${fd.title}`)}</h1>
        </div>
      </div>
      ))}
      </div>

      





      <div className='category'>
       <div className="hide-btn d-flex align-items-center justify-content-center mb-5">
       <button className="btn bg-dark text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          FILTER
        </button>
       </div>
        
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">

            
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">FILTER</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            {productdata.sidebar.map((fd,i)=>(
        <div className="flex-shrink-0 p-3 bg-white" key={i} style={{width: '280px'}}>
        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">{t(`${fd.titletitlecategory}`)}</span>
        </a>
        <ul className="list-unstyled">



        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {t(`${fd.descriptionone}`)}
            </button>
          </li>


          


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptiontwo}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionthree}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionfour}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionfive}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionsix}`)}
            </button>
          </li>

          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {t(`${fd.descriptionseven}`)}
            </button>
          </li>




        </ul>

        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">{t(`${fd.titlecolors}`)}</span>
        </a>
       
      </div>
      ))}
          </div>
        </div>
      </div>





      <div className="row">
      <div className="col-3">
      {productdata.sidebar.map((fd,i)=>(
        <div className="flex-shrink-0 p-3 bg-white" key={i} style={{width: '280px'}}>
        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">{t(`${fd.titletitlecategory}`)}</span>
        </a>
        <ul className="list-unstyled">



        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {t(`${fd.descriptionone}`)}
            </button>
          </li>


          


          <div className="btn-group">
  <button className="btn dropdown-toggle d-inline-flex align-items-center rounded border-0 collapsed" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {t(`${fd.descriptiontwo}`)}
  </button>
  <ul className="dropdown-menu">
  <li className="mb-1">{t(`${fd.aksesuardropdownone}`)}</li>
  <li className="mb-1">{t(`${fd.aksesuardropdowntwo}`)}</li>
  <li className="mb-1">{t(`${fd.aksesuardropdownthree}`)}</li>
         
          
  </ul>
</div>


          <div className="btn-group">
  <button className="btn dropdown-toggle d-inline-flex align-items-center rounded border-0 collapsed" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {t(`${fd.descriptionthree}`)}
  </button>
  <ul className="dropdown-menu">
  <li className="mb-1">{t(`${fd.bikedropdownone}`)}</li>
  <li className="mb-1">{t(`${fd.bikedropdowntwo}`)}</li>
  <li className="mb-1">{t(`${fd.bikedropdownthree}`)}</li>
         
          
  </ul>
</div>

         


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionfour}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionfive}`)}
            </button>
          </li>


          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            {t(`${fd.descriptionsix}`)}
            </button>
          </li>

          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {t(`${fd.descriptionseven}`)}
            </button>
          </li>




        </ul>

        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">{t(`${fd.titlecolors}`)}</span>
        </a>
       
      </div>
      ))}
      </div>




      <div className="col-9">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {productdata.shop.map((fd,i)=>(
<div key={i} >
          <div className="mt-1" data-aos="flip-down">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img src={fd.img} />
              </a>
              <ul className="product-links">
                <li><a href="#"><i className={fd.iconeye} /></a></li>
                <li><a href="#"><i className={fd.iconheart} /></a></li>
                <li><a href="#"><i className={fd.iconrandom} /></a></li>
              </ul>
              <button className="add-to-cart" onClick={(()=>{notify(addItem(fd))})}>{fd.button}</button>
              <ToastContainer
                                  position="bottom-right"
                                  autoClose={2500}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="dark"
            />
            </div>
            <div className="mt-5">
              <h3 className="title text-decoration-none"><a href="#">{t(`${fd.title}`)}</a></h3>
              <div className="price">{fd.price}</div>
            </div>
          </div>
        </div>
      </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Products