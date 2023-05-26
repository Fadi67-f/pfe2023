import React,{ useState } from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom'
import mobile from '../../images/blog-1.jpg'
import "../sibtitle.css"
import { useDispatch,useSelector } from 'react-redux'
import { DeleteOrder, SendRecu } from '../../redux/OrderSlice'
import notify from '../../pages/notify'

const AdminAllOrdersItem = ({item , i}) => {

    const dispatch =useDispatch()
    const data=useSelector(state=>state.order.recu)

    const [show, setShow] = useState(false);
    const [message, setmessage] = useState('');



  const  deletee = async() => {


      


   await dispatch(DeleteOrder(item._id))

   notify(" Supprimé ", "success")

   setTimeout(() => {
    window.location.pathname= "/admin/allorders"
         
     }, 2000);
   

  }


    const handleClose = async() => {


        if(message ==='')
        {
            console.log('error')
    
    return
    
    }
        await dispatch(SendRecu({
            message,
            User:`${item.User._id}`,
            product:`${item.product._id}`

        }))
        
    
        
        setShow(false)};



    const handleShow = () => setShow(true);

    return (

        
        <Col sm="12">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header >
            <Modal.Title> <div className='font'> Envoi de devis  </div></Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <textarea
        type="text"
        className="input-form d-block mt-3 px-3"
        value={message}
        onChange={(e)=>{setmessage(e.target.value)}}
        
        placeholder="voulez vous dire quoi "
    />


        </Modal.Body>
        <Modal.Footer>
           
            <Button className='font' variant="dark" onClick={handleClose} >
                Valider Acceptation
            </Button>
        </Modal.Footer>
    </Modal>
            <div
               
                className="cart-item-body my-2 px-1 d-flex"

                style={{  borderBottom:'solid' }}>
                <img width="160px" height="197px" className='x'  src={item.product.imageCover}  alt="" />
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline p-2 cat-text" style={{marginLeft:"300px"}}> Commande numéro :  {i+1}</div>
                            <button className="btn-save d-inline mt-2 " onClick={handleShow} >Accepter </button>
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title" style={{marginLeft:"30px"}}>
                        title: {item.product.title} 
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className=" d-flex">
                            <div className="mt-2  cat-text d-inline" style={{marginLeft:"30px"}}>name :</div>
                            <div className="mt-2 cat-text d-inline ">{item.User.name} </div>
                            <div
                                className="color  me-1 border"
                                style={{ backgroundColor: "#E52C2C" }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="mt-2 cat-text d-inline " style={{marginLeft:"30px"}}>phone :</div>
                            <div className="mt-2 cat-text d-inline ">{item.User.phone} </div>

                          
                            </div>
                            <button className="btn-save d-inline mt-2 " onClick={deletee}>Supprimer</button>
                            
                        </Col>
                        
                    </Row>
                </div>
            </div>
      <ToastContainer/>

        </Col>
    )
}

export default AdminAllOrdersItem
