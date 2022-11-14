import React from 'react'
import {t} from 'i18next'

import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import cartdata from '../data/cartdata';
const Cart = () => {
    const {items, removeItem, updateItemQuantity, isEmpty, cartTotal} = useCart(); 
    if (isEmpty) return <div  className='text-center'>
        <h1><img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" /></h1>
        <Link to='/products' className='btn btn-primary mt-3'>Return Shop</Link>
    </div>;
  return (
    <div className='cart-page'>
        {/* <div className="d-flex align-items-center justify-content-center">
            <div className="col-12">
            <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">photo</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">del</th>
          </tr>
        </thead>
        <tbody>
            
            {items.map((fd,i)=>(
                 <tr>
                 <th scope="row">{i+1}</th>
                 <td><img src={fd.img} width="100" alt="" /></td>
                 <td>{t(`${fd.title}`)}</td>
                 <td>{parseInt(fd.price)*fd.quantity}$</td>
                 <td><button className='btn btn-primary' onClick={()=>updateItemQuantity(fd.id, fd.quantity -1)}>-1</button><span className='mx-2'>{fd.quantity}</span><button className='btn btn-primary' onClick={()=>updateItemQuantity(fd.id, fd.quantity +1)}>+1</button></td>
                 <td><button className='btn btn-danger' onClick={()=>{removeItem(fd.id)}}>X</button></td>
               </tr>
            ))}
         
        </tbody>
      </table>
      <h1>Total Price: {parseInt(cartTotal)}$</h1>
            </div>
        </div> */}




<main className="page">
        <section className=" shopping-cart dark">
          <div className="container-fluid">
            {cartdata.hero.map((fd,i)=>(
              <div className="block-heading">
              <h2>{t(`${fd.title}`)}</h2>
              <p>{t(`${fd.description}`)}</p>
            </div>
            ))}
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">

                  <div className="product">
                     {items.map((fd,i)=>(
                         <div className="row">
                         <div className="col-md-3">
                           <img className="img-fluid mx-auto d-block image" src={fd.img} width="80" />
                         </div>
                         <div className="col-md-8">
                           <div className="info">
                             <div className="row">
                               <div className="col-md-5 product-name">
                                 <div className="product-name">
                                   <p href="#">{t(`${fd.title}`)}</p>
                                   {/* <div className="product-info">
                                     <div>Display: <span className="value">5 inch</span></div>
                                     <div>RAM: <span className="value">4GB</span></div>
                                     <div>Memory: <span className="value">32GB</span></div>
                                   </div> */}
                                 </div>
                               </div>
                               <div className="col-md-4 quantity">
                               <button className='btn btn-primary' onClick={()=>updateItemQuantity(fd.id, fd.quantity -1)}>-1</button><span className='mx-2'>{fd.quantity}</span><button className='btn btn-primary' onClick={()=>updateItemQuantity(fd.id, fd.quantity +1)}>+1</button>
                               <button className='btn btn-danger mx-2' onClick={()=>{removeItem(fd.id)}}>X</button>
                               </div>
                               <div className="col-md-3 price d-flex">
                                 <span>{parseInt(fd.price)*fd.quantity}$</span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     ))}
                    </div>  
                   
                   
                  </div>
                </div>
                {cartdata.right.map((fd,i)=>(
                  <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>{t(`${fd.title}`)}</h3>
                    <div className="summary-item"><span className="text">{t(`${fd.description}`)}</span><span className="price">{parseInt(cartTotal)}$</span></div>
                    <div className="summary-item"><span className="text">{t(`${fd.text}`)}</span><span className="price">{parseInt(cartTotal)}$</span></div>
                    <button type="button" className="btn btn-primary btn-lg btn-block">{t(`${fd.btn}`)}</button>
                  </div>
                </div>
                ))}
              </div> 
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cart