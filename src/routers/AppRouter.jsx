import { BrowserRouter, Route, Switch,Link, NavLink } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import NoteFoundPage from "../pages/NotFoundPage"
import Products from "../pages/Products"
// import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Blog from "../pages/Blog"
import { useEffect, useState } from "react"
import ModeBtn from "../components/ModeBtn"
import { CartProvider, useCart } from "react-use-cart";
import '../config/i18n'
import { useTranslation } from "react-i18next";
import Cart from "../pages/Cart"
import CartCount from "../components/CartCount"
import navdata from "../data/navdata"
import Login from "../pages/Login"
import Dashboard from "../pages/admin/Dashboard"
import EditBlogPage from "../pages/admin/form/EditBlogPage"
import AddBlogPage from "../pages/admin/form/AddBlogPage"
import BlogDetails from "../pages/BlogDetails"
const AppRouter = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [mode,setMode] = useState(localStorage.getItem('mode'));
  useEffect(()=>{
    localStorage.setItem('mode',mode);
    document.querySelector('#modeID').className = localStorage.getItem('mode');
  })
  const { totalItems } = useCart();
  return (
    <BrowserRouter>
      <CartProvider>
      <div>
      {navdata.navbar.map((fd,i)=>(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact  aria-current="page" to="/">{t(`${fd.home}`)}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/products">{t(`${fd.shop}`)}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">{t(`${fd.about}`)}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/blogs">{t(`${fd.blog}`)}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">{t(`${fd.contact}`)}</NavLink>
            </li>
          </ul>
                <Link className="navbar-brand me-auto" to="/"><img to='/' src={fd.img} alt=""/></Link>
            <span className="navbar-text">
                <i className="fa-solid fa-magnifying-glass mx-3"></i>
                <i className="fa-regular fa-heart mx-3"></i>
    
                <Link to='/cart'><i className="fa-solid fa-bag-shopping mx-3"><CartCount/></i></Link>
                
            </span>
            <div className="d-flex">
            <div className="btn-group mx-4">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-globe"></i>
            </button>
            <ul className="dropdown-menu">
            <div className="d-flex flex-column">
            <li><button className="btn btn-primary" onClick={() => {handleClick("az");}}>az</button></li>
            <li><button className="btn btn-primary mt-3" onClick={() => {handleClick("en");}}>en</button></li>
            </div>
            </ul>
          </div>
            
          <ModeBtn color={mode} setColor={setMode} />
            </div>
        </div>
        </div>
      </nav>
      ))}
    </div>
     <div id="modeID" className="bg-dark">
    <Switch>
     <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route exact path="/blogs" component={Blog}></Route>
      <Route path="/blogs/:id"  component={BlogDetails}></Route>
      <Route path="/admin" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path='/edit/:id' component={EditBlogPage}></Route>
      <Route path='/add' component={AddBlogPage}></Route>
      <Route component={NoteFoundPage}></Route>
    </Switch>
     </div>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter