import React ,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './AdminSideBar';
import AdminAllCategoryCard from './../../components/Admin/AdminAllCategoryCard ';
import { useDispatch , useSelector} from 'react-redux';

import { getAllCategories } from '../../redux/testSlice';



const AdminAllCategotPage = () => {
    const dispatch =useDispatch()
    const data=useSelector(state=>state.test.categoryData)
  
    console.log(data.data)
  
    useEffect(()=>{
    
      dispatch(getAllCategories())
     
  
  
     },[])


  return (
    <Container  className='test'>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10" style={{width:"1100px"}}>
        <div className='p'> La Liste Des Catégories</div>
            
            {data?data.map((item)=>{
                return(
            <AdminAllCategoryCard item={item}/>

                )
            }):<h1>no data </h1>}
            
        </Col>
    </Row>
</Container>
  )
}

export default AdminAllCategotPage

