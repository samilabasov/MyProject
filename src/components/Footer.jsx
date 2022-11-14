import { t } from 'i18next'
import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer">
<div>
        <footer className="footer-10">
          <div className="">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5 pb-3 no-gutters">


              <div className="col-md-4 mb-md-0 mb-4 d-flex border border-end-0 border-start-0">
                <div className="con con-1 w-100 py-5">
                  <div className="con-info w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="ion-ios-call" />
                    </div>
                    <div className="text">
                    <i class="fa-regular fa-message"></i>
                      <span className='title mt-4'>{t('footer-top-box-one-title')}</span>
                      <p className='description mt-2 text-muted'>{t('footer-top-box-one-description')}</p>
                      <button className='mt-4'>{t('footer-top-box-one-btn')}</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-md-0 mb-4 d-flex border border-1">
                <div className="con con-2 w-100 py-5">
                  <div className="con-info w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="ion-ios-mail" />
                    </div>
                    <div className="text">
                    <i class="fa-solid fa-phone"></i>
                      <span className='mt-4 title'>{t('footer-top-box-two-title')}</span>
                      <p className='mt-2 description text-muted'>{t('footer-top-box-two-description')}</p>
                      <p className='mt-4 number'>666 - 880 - 33388</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-md-0 mb-4 d-flex border border-start-0">
                <div className="con con-3 w-100 py-5">
                  <div className="con-info w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="ion-ios-pin" />
                    </div>
                    <div className="text">
                    <i class="fa-solid fa-envelope"></i>
                      <span className='mt-4'>{t('footer-top-box-three-title')}</span>
                      <p className='mt-2 text-muted'>{t('footer-top-box-three-description')}</p>
                      <form action="#" className="subscribe-form mt-4">
                  <div className="form-group d-flex form-box">
                    <input type="text" className="rounded-0 form-control rounded-left" placeholder="Enter email address" />
                    <button style={{height:"60px"}} type="submit" className="form-control mx-3 rounded-0 submit rounded-right">{t('footer-top-box-three-btn')}</button>
                  </div>
                </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="container foot-sec-2">
              <div className="row">
              <div className="col-md-10">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                  <div className="col-md-3 mb-md-0 mb-4">
                    <h2 className="footer-heading">{t('footer-bottom-box-one-title')}</h2>
                    <ul className="list-unstyled mt-5">
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-one')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-two')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-three')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-four')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-five')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-one-text-six')}</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <h2 className="footer-heading">{t('footer-bottom-box-two-title')}</h2>
                    <ul className="list-unstyled mt-5">
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-two-text-one')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-two-text-two')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-two-text-three')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-two-text-four')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-two-text-five')}</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <h2 className="footer-heading">{t('footer-bottom-box-three-title')}</h2>
                    <ul className="list-unstyled mt-5">
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-three-text-one')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-three-text-two')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-three-text-three')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-three-text-four')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-three-text-five')}</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <h2 className="footer-heading">{t('footer-bottom-box-four-title')}</h2>
                    <ul className="list-unstyled mt-5">
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-one')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-two')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-three')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-four')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-five')}</a></li>
                      <li><a href="#" className="d-block mt-2">{t('footer-bottom-box-four-text-six')}</a></li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-2 mb-md-0 mb-4 sosial">
                <h2 className="footer-heading mx-3">{t('footer-right')}</h2>
                <i class="fa-brands fa-facebook mx-3"></i>
                <i class="fa-brands fa-twitter mx-3"></i>
                <i class="fa-brands fa-instagram mx-3"></i>
                <i class="fa-brands fa-pinterest mx-3"></i>
              </div>
            </div>
            </div>
            <div className="container">
            <div className="row mt-3 pt-4">
              <div className="col-md-6 col-lg-6">
                <p className="copyright mb-0">
                {t('footer-end-left-one')} <span style={{color:"#fe5915"}}>Ridez</span> {t('footer-end-left-two')}
                  </p>
              </div>
              <div className="col-md-6 col-lg-6 text-end">
               <p>{t('footer-end-right-one')} <span style={{color:"#fe5915"}}>{t('footer-end-right-two')}</span> {t('footer-end-right-three')}</p>
              </div>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer