import React,{useState} from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../sibtitle.css'
import { useDispatch ,useSelector} from 'react-redux'
import { DeleteUser, UpdateUser } from '../../redux/userSlice'
import { DeleteCategory, UpdateCategory } from '../../redux/categorySlice'


const AdminAllCategoryCard  = ({item}) => {

  const [show, setShow] = useState(false);
  const [cat, setcat] = useState('');


    const dispatch =useDispatch()
    const data=useSelector(state=>state.category.update)
    console.log(data)

    const deletee=async()=>{
      await  dispatch(DeleteCategory(item._id))

      window.location.pathname='/admin/allCategory'

    }

    const handleClose = async() => {


      if(cat ==='')
      {
          console.log('error')
  
  return
  
  }
  await  dispatch(UpdateCategory(
    {'name':cat,
   'id':item._id}))

//window.location.pathname='/admin/allCategory'
      
  
      
      setShow(false)};


    const ediite=()=>{

      setShow(true)};


    

    
  return (
    <div >
    <Modal show={show} onHide={handleClose}>
    <Modal.Header >
        <Modal.Title> <div className='font'>  Modifier la catégorie </div></Modal.Title>
    </Modal.Header>

    <Modal.Body>
    <input
    type="text"
    className="input-form d-block mt-3 px-3"
    value={cat}
    onChange={(e)=>{setcat(e.target.value)}}
    
    placeholder="  Modifier la catégorie ...."
/>


    </Modal.Body>
    <Modal.Footer>
       
        <Button className='font' variant="dark" onClick={handleClose} >
            Enregistrer
        </Button>
    </Modal.Footer>
</Modal>
       <div className="user-address-card my-3 px-2">
       
<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"25px"}}></div> 
<button   className="btn-save d-inline mt-1 " onClick={ediite} > Modifier </button> 

</Col>

    

<div style={{paddingTop:"1px"}}>Title : {item.name}</div> 
<div style={{paddingTop:"1px", color:'white'}}>t</div> 


<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"25px"}}></div> 

<button style={{marginTop:"205px"}}  className="btn-save d-inline mt-1 "  onClick={deletee} >  Supprimer</button> 


</Col>      



</div>   
        </div>
       

  )
}

export default AdminAllCategoryCard 
