
import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeletProduct } from "../../redux/testSlice";

const AdminALLProductCard = ({item}) => {
  const dispatch =useDispatch()
  const data=useSelector(state=>state.test.deleteProduct)


const deleteProduct= async()=>{

  await dispatch(DeletProduct(item._id))

 window.location.pathname= "/admin/allproducts"

}
const updateProdunt= async()=>{}



  return (
    <div className="blog-card" style={{marginBottom:"20px"}}>
    <Col className=" d-flex justify-content-between">
    <div className="d-inline item-delete-edit"style={{ marginLeft: '10px' }} onClick={deleteProduct}>Supprimer</div>
    <Link to={`/admin/EditeProduct/${item._id}`} style={{ textDecoration: "none" }}>
    <div className="d-inline item-delete-edit" style={{ marginRight: '10px' }}>Modifier </div>
</Link>
</Col>
      <div className="card-image">
        <img src={item.imageCover} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        
        <h5 className="title">{item.title}</h5>
        <p className="desc">
        Description
        </p>
        <Link to={`/product/${item._id}`} className="button">
          Savoir plus 
        </Link>
      </div>
    </div>
  );
};

export default AdminALLProductCard;
