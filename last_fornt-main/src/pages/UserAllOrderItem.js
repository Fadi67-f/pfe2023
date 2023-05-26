import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import mobile from '../images/blog-1.jpg'
import { useDispatch } from 'react-redux'
import { DeleteOrder } from '../redux/OrderSlice'


const UserAllOrderItem = ({item,i}) => {
const Dispatch =useDispatch ()

    const deletee = async()=>{

       await Dispatch(DeleteOrder(item._id))
  window.location.pathname="/user/allorders"

         
    }
  return (
    <div className="user-order mt-2">
    <Row>
        <div className="py-2 order-title" style={{marginLeft: '550px'}}>  Order number :{i+1}</div>
    </Row>
    <div>
    <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
            <img width="93px" height="120px" className='' src={item.product.imageCover} alt="" />
        </Col>
        <Col xs="8" md="6">
            <div style={{marginTop:'40px'}}>
                title : {item.product.title}
            </div>
           
           
        </Col>
    </Row>
</div>
    <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex justify-content-end">
            <div>
            
                
            </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
            <div>
            <button className="btn-save d-inline mt-2 " onClick={deletee}>delete</button> 
            </div>
        </Col>
    </Row>
</div>
)
}

export default UserAllOrderItem
