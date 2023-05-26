import React , {useEffect} from 'react'
import UserRecuItem from './UserRecuItem';
import { Container, Row } from 'react-bootstrap'

import './Admin/admin.css'
import { useDispatch , useSelector } from 'react-redux';
import { GetRecuUser } from '../redux/OrderSlice';

const UserRecu = () => {

  const dispatch =useDispatch()
  const data=useSelector(state=>state.order.UserData)

  console.log(data.data)

  useEffect(()=>{
  
    dispatch(GetRecuUser())
   


   },[])

  return (
    <Container >
    <Row className='py-3'>
    <div>
    <div className="admin-content-text pb-4">  Hello name</div>
    <Row className='justify-content-between'>
       
       {data.data ? data.data.map((item , i)=>{
        return(
          <UserRecuItem  item={item} i={i} />

        )}):<h1>no data</h1>}
    </Row>
    </div>
    </Row>
</Container>
  )
}

export default UserRecu
