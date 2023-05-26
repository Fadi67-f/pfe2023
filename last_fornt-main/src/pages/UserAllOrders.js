import React,{useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem';
import './Admin/admin.css'
import { useDispatch ,useSelector} from 'react-redux';
import { GetAllOrderUser } from '../redux/OrderSlice';


const UserAllOrders = () => {

  const dispatch =useDispatch()
  const data=useSelector(state=>state.order.GetAllOrder)

  console.log(data.data)

  useEffect(()=>{
  
    dispatch(GetAllOrderUser())
   


   },[])
  return (
    <Container >
    <Row className='py-3'>
    <div>
    <div className="admin-content-text pb-4">  Hello name</div>
    <Row className='justify-content-between'>
       
       {data.data ? data.data.map((item , i)=>{
        return(
          <UserAllOrderItem  item={item} i={i} />

        )}):<h1>no data</h1>}
       
    </Row>
    </div>
    </Row>
</Container>
  )
}

export default UserAllOrders
