import React,{useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

import { getAllData } from "../redux/testSlice";
import NewProductCard from './NewProduct';
import Silder from './../components/slider';
import SubTiltle from './../components/SibeTitle';



const Home = () => {
  
  const dispatch =useDispatch()
  const data=useSelector(state=>state.test.data)
  console.log(data)
 
 

useEffect(()=>{
   
  dispatch(getAllData())
  
},[])

  return (
    <>
    <div class="social-share">
  <a href="#" class="social-link facebook"><i class="fab fa-facebook-f"></i></a>
  <a href="#" class="social-link twitter"><i class="fab fa-twitter"></i></a>
  <a href="#" class="social-link linkedin"><i class="fab fa-linkedin-in"></i></a>
  <a href="#" class="social-link pinterest"><i class="fab fa-pinterest"></i></a>
</div>
      <Container class1="home-wrapper-1 py-5" >
      
       <Silder/>
             
      </Container>

      

    

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <SubTiltle title="special products"/>
          </div>
          </div>
        
        <div className="row">
          
          {data.data ? data.data.map((productt) => {
            return (
  
              <SpecialProduct product={productt} />
            )
          }) : <h1>no data</h1>}
          
        </div>
        <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      </Container>
      
      
     
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <SubTiltle btntitle="more" title="our products" pathText="/product"/>
        </div>
      </div>
      <div className="row">
      
        {data.data ? data.data.map((item) => {
          return (
            <div className="col-3">
            <BlogCard item={item} />
          </div>)
            
        }) : <h1>no data</h1>}
        
      </div>
    </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      
    </>
  );
};

export default Home;
