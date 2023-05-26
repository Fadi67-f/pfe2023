import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductSearch, getAllProductSearchwithcategory } from "../redux/testSlice";
const Header = () => {
  let userl = {};

  if( localStorage.getItem("user" )!== 'undefined' ){
    userl= JSON.parse(localStorage.getItem("user"));}
  
    console.log(userl)



  const remove = ()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    const path= window.location.pathname;

    if (path!='/login'){
      window.location.pathname="/login"
    }
  }



  const dispatch =useDispatch()
 


  const searchprodut =async (e)=>{
    
    let word=localStorage.getItem("searchWord");
    console.log(word)

    if(word=="0"||word==""){
     await dispatch(getAllProductSearch(`?keyword=${e.target.value}`))
    

    } else{

      await dispatch(getAllProductSearchwithcategory(`/${word}?keyword=${e.target.value}`))
    }
 
  
  }
    



  return (
    <>
      <header className="header-top-strip py-3">
      <div className="container-xxl">
  <div className="row">
    <div className="col-6">
      <p className="text-white mb-0">
        Livraison gratuite
      </p>
    </div>
    <div className="col-6 text-end">
      <p className="text-white mb-0">
        Besoin d'aide pour commander appelez :
        <a className="text-white" href="tel:+216 31195670">
          +216 31195670
        </a>
      </p>
    </div>
  </div>
</div>

      </header>
     
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-2 d-inline-block">
                         Compte
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                    {userl?( <li>
                      <Link className="dropdown-item text-white" to="/profile">
                        profile
                      </Link>
                      {userl.role==='admin'?( <li>
                        <Link className="dropdown-item text-white" to="/admin/allproducts">
                          Admin
                        </Link>
                        </li> ): (null)
                        }
                    </li>):(
                      <li>
                        <Link className="dropdown-item text-white" to="/login">
                          login
                        </Link>
                      </li>)}
                      
                      
                      
                     
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/About">A propos </NavLink>
                    <NavLink to="/contact">Contactez-nous</NavLink>
                    <NavLink to="/product">Produits</NavLink>
                    <div className="col-1" style={{marginLeft:'600px'}}>
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                      <div>
                      {userl ? 
                      (<Link
                      to="/"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img src={user} alt="user" />
                      <p className="mb-0" onClick={remove}>
                            <br /> deconnecter
                      </p>
                    </Link>):  
                    (<Link
                    to="/login"
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                         Se <br /> Connecter
                    </p>
                  </Link>)}
                      

                      </div>
                      <div>
                        <Link
                          to="/cart"
                          className="d-flex align-items-center gap-10 text-white"
                        >
                          <img src={cart} alt="cart" />
                          <div className="d-flex flex-column gap-10">
                           
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className="text-white" style={{marginLeft:"20px"}}>SADIM </Link>
            </h2>
          </div>
          <div className="col-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Recherchez..."
                aria-label="Recherchez..."
                aria-describedby="basic-addon2"
                onChange={searchprodut}
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
        
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
