import React,{useState} from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../sibtitle.css'
import { useDispatch ,useSelector} from 'react-redux'
import { DeleteUser, UpdateUser, deleteMesage } from '../../redux/userSlice'


const AdminAllClaims = ({item}) => {

 


    const dispatch =useDispatch()
    

    const deletee=async()=>{
      await  dispatch(deleteMesage(item._id))

      window.location.pathname='/admin/allClaim'

    }

   
    
  return (
    <div >
    
       <div className="user-address-card my-3 px-2">
       
<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"25px"}}>name : {item.name}</div> 
<button   className="btn-save d-inline mt-3 " onClick={deletee} >  Delete</button> 

</Col>

    
<div style={{paddingTop:"1px"}}>phone : {item.phone}</div> 
<div style={{paddingTop:"1px"}}>message : {item.message}</div> 

<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"1px"}}>email : {item.email}</div> 



</Col>      



</div>   
        </div>
       

  )
}

export default AdminAllClaims
