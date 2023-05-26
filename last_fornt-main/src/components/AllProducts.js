
import { Col, Container, Row } from 'react-bootstrap'

import Header from './Header';
import { useDispatch,useSelector } from 'react-redux';

import BlogCard from './BlogCard';
import { getAllData, getPageProducts } from './../redux/testSlice';
import React,{ useEffect } from 'react';
import Pagination from './pagination';



const Allproducts = () => {
    const dispatch =useDispatch()
    const data=useSelector(state=>state.test.data)
    let page=0;



    if (data.paginationResult){
      page=data.paginationResult
    }
    console.log(page)

    const onPress =(num)=>{
      dispatch( getPageProducts(num))
    }


    
   
   
  
  useEffect(()=>{
     
    dispatch(getAllData())
    
  },[])
   

    return (

        <>
        


        
        <div style={{ marginTop: '1000px' }}>
        <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
           
          </div>
        </div>
        <div className="row">
        
          {data.data ? data.data.map((item) => {
            return (
              <div className="col-3" >
              <BlogCard item={item} />
            </div>)
              
          }) : <h1>no data</h1>}
          
        </div>
      </Container>
      <Pagination page={page} Onpress={onPress} />
      </div>
     
      </>
    )
    
}


export default Allproducts



