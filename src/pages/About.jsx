import React from 'react'
import {t} from 'i18next'
import aboutdata from '../data/aboutdata';
import homedata from '../data/homedata';
const About = () => {
  return (
    <div className='about-page bg-white'>
      <section className="sectioon-one">
      {aboutdata.sec1.map((fd,i)=>(
        <div class="p-4 p-md-5 mb-4 text-bg-dark">
        <div class="col-md-12 px-0">
          <h1 class="display-4 text-center">{t(`${fd.title}`)}</h1>
        </div>
      </div>
      ))}
      </section>


  <section className="section-two">
  <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-8 sec-two-bg">
            <img src={aboutdata.sec2[0].img} className="ppp img-fluid rounded-start" alt="..." />
          </div>
          {aboutdata.sec2.map((fd,i)=>(
            <div className="col-md-4 mt-5 py-5">
            <div className="card-body">
              <p className="card-title p-title mb-3">{t(`${fd.title}`)}</p>
              <h1 className="card-text p-description">{t(`${fd.description}`)}</h1>
              <p className="card-text mt-3"><small className="text-muted">{t(`${fd.text}`)}</small></p>
              <button className="mt-3">{t(`${fd.btn}`)}</button>
            </div>
          </div>
          ))}
        </div>
      </div>
  </section>



    <div className="hero-one text-center">
    {aboutdata.heroone.map((fd,i)=>(
      <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <p class="p-title">{t(`${fd.title}`)}</p>
        <h1 class="fw-bold p-description">{t(`${fd.description}`)}</h1>
      </div>
    </div>
    ))}
    </div>



    <section className="container section-three">
        <div className="row">
          {homedata.sec3.map((fd, i) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="sec-3-box-all card rounded-0 border-5 border-bottom-0 border-start-0 border-top-0">
                <div className="sec-3-box card-body text-center">
                  <div className="icon">
                    <i class={fd.icon}></i>
                  </div>
                  <h5 className="mt-4 card-title sec-3-title">
                    {t(`${fd.title}`)}
                  </h5>
                  <p className="mt-4 card-text sec-3-description">
                    {t(`${fd.description}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


<section className="section-four mt-5">
        <div className="container-fluid mb-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-0">
            <div className="col-md-7">
              <img src={aboutdata.sec4[0].img} style={{objectFit: 'cover'}} className="img-fluid" alt="..." />
            </div>
            {aboutdata.sec4.map((fd,i)=>(
              <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title title">{t(`${fd.title}`)}</h5>
                <h1 className="card-text mt-3 description">{t(`${fd.description}`)}</h1>
                <div className="buttons mt-3">
                  <button className='mx-1 button-one'>{fd.btnone}</button>
                  <button className='mx-1'>{fd.btntwo}</button>
                  <button className='mx-1'>{fd.btnthree}</button>
                  <button className='mx-1'>{fd.btnfour}</button>
                </div>
                <p className="card-text mt-3"><small className="text-muted">{t(`${fd.textone}`)}</small></p>
                <p className="card-text"><small className="text-muted">{t(`${fd.texttwo}`)}</small></p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-two text-center mt-5 mb-5">
      {aboutdata.herotwo.map((fd,i)=>(
         <div class="row py-lg-5">
         <div class="col-lg-6 col-md-8 mx-auto">
           <p class="p-title">{t(`${fd.title}`)}</p>
           <h1 class="fw-bold p-description">{t(`${fd.description}`)}</h1>
         </div>
       </div>
      ))}
      </section>


      <section className="container-fluid section-five mb-5">
        <div className="row">
            {aboutdata.sec5.map((fd,i)=>(
              <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card rounded-0 box">
                <div className="card-body text-center">
                  <div className="icon mt-4">
                  <i class="fa-solid fa-user"></i>
                  </div>
                  <h5 className="mt-4 card-title title">
                  {t(`${fd.title}`)}
                  </h5>
                  <p className="mt-4 card-text text-muted description">
                  {t(`${fd.description}`)}
                  </p>
                  <div className="button mt-4">
                  <button>{t(`${fd.btn}`)}</button>
                  </div>
                </div>
              </div>
            </div>
            ))}
           
            {aboutdata.sec5endbox.map((fd,i)=>(
              <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card rounded-0 box-3">
                <div className="card-body mx-5">
                  <h5 className="mt-4 card-title title">
                  {t(`${fd.title}`)}
                  </h5>
                  <p className="mt-4 card-text description">
                  {t(`${fd.description}`)}
                  </p>
                  <p className='fw-bold'>{t(`${fd.text}`)}</p>
                </div>
                  <div className="button mb-5 py-5 mx-5">
                  <button>{t(`${fd.btn}`)}</button>
                  </div>
              </div>
            </div>
            ))}
            
        </div>
      </section>




    </div>
  )
}

export default About