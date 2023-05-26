import React , { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from './AdminSideBar';
import AdminAllOrdersItem from './../../components/Admin/AdminAllOrdersItem';
import { useDispatch ,useSelector } from 'react-redux';
import { GetAllOrder } from './../../redux/OrderSlice';



const AdminAllOrdersPage = () => {


    const dispatch =useDispatch()
    const data=useSelector(state=>state.order.data)

    console.log(data.data)
  
  
  
      useEffect(()=>{
  
       dispatch(GetAllOrder())
      
  
   
      },[])


    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                <div>
                <div className='admin-content-text'>  All Orders</div>
                <Row className='justify-content-start'>
                    
                    {data.data ? data.data.map((item , i)=>{
                        return(
                            <AdminAllOrdersItem item={item} i={i} />

                        )}):<h1>no data</h1>}
                   
                </Row>
            </div>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage
