import React ,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './AdminSideBar';
import AdminAllUserCard from './../../components/Admin/AdminAllUserCard';
import { useDispatch , useSelector} from 'react-redux';
import { GETallUser } from '../../redux/userSlice';



const AdminAllUsersPage = () => {
    const dispatch =useDispatch()
    const data=useSelector(state=>state.user.alluser)
  
    console.log(data.data)
  
    useEffect(()=>{
    
      dispatch(GETallUser())
     
  
  
     },[])


  return (
    <Container  className='test'>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10" style={{width:"1100px" }}>
        <div className='p' style={{ fontStyle: "italic" }} > All Users</div>
    
            {data.data?data.data.map((item)=>{
                return(
            <AdminAllUserCard item={item}/>

                )
            }):<h1>no data </h1>}
            
        </Col>
    </Row>
</Container>
  )
}

export default AdminAllUsersPage

