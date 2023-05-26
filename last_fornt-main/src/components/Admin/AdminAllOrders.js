import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import { useDispatch,useSelector } from 'react-redux'

const AdminAllOrders = () => {
 




    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
            
            </Row>
        </div>
    )
}

export default AdminAllOrders
