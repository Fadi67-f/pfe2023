import React,{useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'

import Pagination from './../pagination';
import AdminALLProductCard from './../../pages/Admin/AdminALLProductCard';
import { useDispatch , useSelector } from 'react-redux';
import { getAllData, getPageProducts } from '../../redux/testSlice';







const AdminAllProducts = () => {




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
        <div>
            <div className='admin-content-text'>Tout les produits </div>
            <Row className='justify-content-start'>
                
                {data.data ? data.data.map((product , i)=>{
                 return(
                    <div className="col-3">
                    <AdminALLProductCard item={product} />
                  </div>)
                    
                    

                }): null}
                <Pagination page={page} Onpress={onPress} />
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
