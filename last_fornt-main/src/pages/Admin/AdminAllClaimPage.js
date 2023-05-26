import React ,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './AdminSideBar';

import { useDispatch , useSelector} from 'react-redux';

import { getAllCategories } from '../../redux/testSlice';
import AdminAllClaims from '../../components/Admin/AdminAllClaims';
import { GetAllMesage } from '../../redux/userSlice';


const AdminAllClaimPage = () => {
    const dispatch =useDispatch()
    const data=useSelector(state=>state.user.AllMessage)
  
    console.log(data.data)
  
    useEffect(()=>{
    
      dispatch(GetAllMesage())
     
  
  
     },[])


  return (
    <Container  className='test'>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10" style={{width:"1100px"}}>
        <div className='p'> All Contacts</div>
            
            {data.data?data.data.map((item)=>{
                return(
            <AdminAllClaims item={item}/>

                )
            }):<h1>no data </h1>}
            
        </Col>
    </Row>
</Container>
  )
}


export default AdminAllClaimPage
