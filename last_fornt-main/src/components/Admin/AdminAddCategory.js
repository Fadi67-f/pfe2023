import React,{useState} from 'react'
import { Col, Row,Spinner } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { AddCategory } from '../../redux/categorySlice'




//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


const AdminAddCategory = () => {
    
    const [cat,setCat]=useState('')


 
    const dispatch =useDispatch()
    const data=useSelector(state=>state.category.data)
   
    const send = async()=>{

        if(cat ===''){

            console.log('error')

            return
        
        }
        await dispatch(AddCategory({name:cat}))

        window.location.pathname='/admin/addcategory'
    }



    return (
        <div>
            <Row className="justify-content-center ">
                <div className="admin-content-text pb-4 text-center">AJOUTER UNE CATEGORIE</div>
                <Col sm="8">
                   
                 
                    <input
                        
                        value={cat}
                        onChange={(e)=>{setCat(e.target.value)}}
                        type="text"
                        className="input-form d-block mt-4 px-3"
                        placeholder=" Ajouter la Catégorie "
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="7" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-4 " onClick={send}>Enregistrer </button>
                </Col>
            </Row>

           
            
        </div>
    )
}
//   isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null

export default AdminAddCategory
