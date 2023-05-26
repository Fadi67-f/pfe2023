import React from 'react'


import { Container, Row, Col } from 'react-bootstrap'

import AdminAllProducts from './../../components/Admin/AdminAllProducts';
import AdminSideBar from './/AdminSideBar';
import "./admin.css"




const AdminAllProductsPage = () => {
 
    return (
        <Container  className='test'>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10" style={{width:"1100px"}}>
                    <AdminAllProducts  />
                    
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
