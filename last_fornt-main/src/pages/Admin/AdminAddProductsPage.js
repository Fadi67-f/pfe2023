import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from './AdminSideBar';
import AdminAddProducts from './../../components/Admin/AdminAddProducts';
import "./admin.css"

const AdminAddProductsPage = () => {
    return (
      <Container className='test'>
        <Row className='py-3'>
          <Col sm={9} xs={12} md={2}>
            <AdminSideBar />
          </Col>
          <Col sm={9} xs={12} md={10}>
            <AdminAddProducts />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AdminAddProductsPage;
  
