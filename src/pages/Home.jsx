import React, {useEffect} from 'react'
import { t } from "i18next";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import productdata from "../data/productdata";
import homedata from "../data/homedata";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Home = () => {
  const notify = () => toast("Wow so easy!");
  const { addItem } = useCart();  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="home-page">
      
     <div className="section-one">
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/h1-slider3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/h1-slider4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.sanity.io/images/cwkbno5g/production/6ac2139005eeeca716e2c19d4d53045528d6d5d0-5968x3979.jpg?w=1600&h=800&dpr=1.5&quality=80&auto=format&fit=crop" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     </div>







      <section className="section-two">
        <div className="sec-two row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
          {homedata.sec2.map((fd, i) => (
            <div className="card rounded-0  text-bg-dark">
              <img
                src={fd.img}
                className={`rounded-0 card-img ${fd.imgclass}`}
                alt="..."
              />
              <div className="card-img-overlay p-5">
                <h5 className={`card-title ${fd.titledesign} ${fd.titleclass}`}>
                  {t(`${fd.title}`)}
                </h5>
                <p className="card-text">{t(`${fd.description}`)}</p>
                <button className="sec-two-btn sec-2-btn">
                  {t(`${fd.btn}`)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {homedata.heroone.map((fd, i) => (
        <div className="hero-one">
          <div className="px-4 py-5 my-5 text-center">
            <p className="lead mb-4 fs-6 fw-bold hero-one-title">
              {t(`${fd.title}`)}
            </p>
            <div className="col-lg-6 mx-auto">
              <h1 className="display-5 fw-bold hero-one-description">
                {t(`${fd.description}`)}
              </h1>
            </div>
          </div>
        </div>
      ))}

      <section className="container section-three">
        <div className="row">
          {homedata.sec3.map((fd, i) => (
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-down">
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

      <section className="section-four mt-5" data-aos="flip-down">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-0">
          {homedata.sec4.map((fd, i) => (
            <div className="rounded-0 border-0 card text-bg-dark sec-four">
              <img src={fd.img} className="rounded-0 card-img" alt="..." />
              <div className="card-img-overlay sec-four-box">
                <h5 className="card-title text-dark fs-2">
                  {t(`${fd.title}`)}
                </h5>
                <p className="card-text text-dark mt-3 fw-light">
                  {t(`${fd.description}`)}
                </p>
                <button className="mt-4 fw-semibold">{t(`${fd.btn}`)}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-five">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}   
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}

          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween: 10,
            },
            
            768:{
              slidesPerView:2,
              spaceBetween: 15,
            },
            1080:{
              slidesPerView:3,
              spaceBetween: 15,
            },
            1460:{
              slidesPerView:4,
              spaceBetween: 15,
            }
          }}
          
        >
          {homedata.sec5.map((fd, i) => (
            <SwiperSlide>
              <img src={fd.img} alt="" />
              <p className="sec-5-title">{fd.title}</p>
              <p className="sec-5-price">{fd.price}$</p>
              <button>{t(`${fd.btn}`)}</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {homedata.herotwo.map((fd, i) => (
        <div className="hero-two">
          <div className="px-4 py-5 my-5 text-center" data-aos="flip-down">
            <p className="lead mb-4">{t(`${fd.title}`)}</p>
            <div className="col-lg-6 mx-auto">
              <h1 className="display-5 fw-bold">{t(`${fd.description}`)}</h1>
            </div>
          </div>
        </div>
      ))}

      <section className="section-six" data-aos="flip-right">
        {homedata.sec6.map((fd, i) => (
          <div className="card rounded-0 text-bg-dark">
            <img src={fd.img} className="rounded-0 card-img" alt="..." />
            <h2 className="card-text card-title position-absolute">
              bike bike bike
            </h2>
            <div className="card-img-overlay sec-six-box">
              <h5 className="card-title">{t(`${fd.title}`)}</h5>
              <p className="card-text p-decs">{t(`${fd.description}`)}</p>
              <p className="card-text p-text">
                <small>{t(`${fd.text1}`)}</small>
              </p>
              <p className="card-text p-text">
                <small>{t(`${fd.text2}`)}</small>
              </p>
              <p className="card-text p-text">
                <small>{t(`${fd.text3}`)}</small>
              </p>
              <p className="card-text p-text">
                <small>{t(`${fd.text4}`)}</small>
              </p>
              <p className="card-text price">
                <small>{t(`${fd.price}`)}</small>
              </p>
              <button>{t(`${fd.btn}`)}</button>
            </div>
          </div>
        ))}
      </section>

      {homedata.herothree.map((fd, i) => (
        <div className="hero-three">
          <div className="px-4 py-5 my-5 text-center">
            <p className="lead mb-4 title">{t(`${fd.title}`)}</p>
            <div className="col-lg-6 mx-auto">
              <h1 className="display-5 fw-bold description">{t(`${fd.description}`)}</h1>
            </div>
          </div>
        </div>
      ))}

      <section className="section-seven container-fluid bg-white">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {homedata.sec7.map((fd, i) => (
            <div key={i}>
              <div className="mt-1" data-aos="flip-down">
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={fd.img} />
                    </a>
                    <ul className="product-links">
                      <li>
                        <a href="#">
                          <i className={fd.iconeye} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className={fd.iconheart} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className={fd.iconrandom} />
                        </a>
                      </li>
                    </ul>
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        notify(addItem(fd));
                      }}
                    >
                      {t(`${fd.button}`)}
                    </button>
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
                  <div className="mt-3">
                    <h3 className="title text-decoration-none">
                      <a href="#">{t(`${fd.title}`)}</a>
                    </h3>
                    <div className="price mb-5">{fd.price}$</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
