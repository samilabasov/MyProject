import { t } from 'i18next'
import React from 'react'
import contactdata from '../data/contactdata'

const Contact = () => {
  return (
    <div className='contact-page'>
      
      <section className="section-one">
      {contactdata.sec1.map((fd,i)=>(
        <div class="p-4 p-md-5 mb-4 text-bg-dark">
        <div class="col-md-12 px-0">
          <h1 class="display-4 text-center">{t(`${fd.title}`)}</h1>
        </div>
      </div>
      ))}
      </section>


      {/* <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=2048&height=726&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://formatjson.org/">Format JSON</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:2048px;height:726px;}.gmap_canvas {overflow:hidden;background:none!important;width:2048px;height:726px;}.gmap_iframe {width:2048px!important;height:726px!important;}" }} /></div> */}




      {/* <section className="section-two">
      <div className="container-fluid px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {contactdata.sec2.map((fd,i)=>(
            <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <p className="fs-2"><small>{fd.title}</small></p>
            <p>{fd.description}</p>
            <p>{fd.text}</p>
            <p>{fd.texttwo}</p>
            <i className= {fd.iconone}></i>
            <i className= {fd.icontwo}></i>
            <i className= {fd.iconthree}></i>
          </div>
          ))}
         
        </div>
      </div>
      </section> */}



<section className="section-two px-4 py-5">
<h2 class="pb-2 border-bottom hero">{t('contact-title')}</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="d-flex flex-column align-items-start gap- box-1">
            <h3 className="fw-bold title">{t('contact-text-one-1')} <br /> {t('contact-text-one-2')}</h3>
            <p className="mt-4 description">{t('contact-text-two-1')} <br /> {t('contact-text-two-2')}</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-4">
            <div className="d-flex flex-column gap-2 box-2">
             <p className='title'>{t('contact-text-three')}</p>
              <p className="fw-semibold mb-0 description">{t('contact-text-four')}customerservice@100percent.com</p>
              <p className="fw-semibold mb-0 description">{t('contact-text-five')}info@100percent.com</p>
            </div>
            <div className="d-flex flex-column gap-2 box-3">
             <p className='title'>{t('contact-text-eight')}</p>
              <p className="fw-semibold mb-0 description">{t('contact-text-nine')}: 8:00 AM – {t('contact-text-ten')}: 18:00 PM</p>
              <p className="description">{t('contact-text-eleven')} – {t('contact-text-twelve')}: {t('contact-text-thirteen')}</p>
            </div>
            <div className="d-flex flex-column gap-2 box-4">
              <p className='title'>{t('contact-text-six')}</p>
              <p className="fw-semibold mb-0 description">9630 Aero Drive San Diego, CA 92123</p>
              <p className="description">{t('contact-text-seven')}</p>
            </div>
            <div className="d-flex flex-column gap-2 box-5">
             <p className='title'>{t('contact-text-fourteen')}</p>
              <div className="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* <section className="section-three container">
        <div className="row">
          <div className="col-9">
          <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
      </div>
          </div>

          <div className="col-3">
            <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/contact_img-1.jpg" alt="" />
          </div>
        </div>
      </section> */}


<div className="container-fluid section-three">
<div className="row">
<form className=' col-9'>
          <h1 className='title'>{t('contact-bottom-one')}</h1>
          <p className='description'>{t('contact-bottom-two')}</p>


          <div className="mb-3 name">
          <input type="text" placeholder='Your Name' className="form-control rounded-0" />
        </div>

        <div className="mb-3 email">
          <input type="email" className="form-control rounded-0" placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <div className="mb-3 message">
          <input type="email" className="form-control rounded-0" placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label chek" htmlFor="exampleCheck1">{t('contact-bottom-three')}</label>
        </div>
        <button type="submit">{t('contact-bottom-btn')}</button>
      </form>
      <div className="photo col-3 mt-3">
        <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/contact_img-1.jpg" className='col-12' style={{objectFit:"cover"}} alt="" />
      </div>
</div>
</div>



    </div>
  )
}

export default Contact