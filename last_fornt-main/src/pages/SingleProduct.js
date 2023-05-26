import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch,useSelector } from "react-redux";
import { getOneProduct } from "../redux/testSlice";
import { useEffect } from "react";
import Header from './../components/Header';
import { sendUserOrder } from "../redux/OrderSlice";
import notify from "./notify";
const SingleProduct = () => {
  const {id }= useParams();
  const dispatch =useDispatch()
  const data=useSelector(state=>state.test.OneProducts)
  const order=useSelector(state=>state.order.OrderUser)

  console.log(order.data)
  const [loading, setloading] = useState(false);


  

  useEffect(()=>{
   
    dispatch(getOneProduct(id))
    
    
  },[])

  const sendOreder = async ()=>{

    if( !localStorage.getItem("token") ){
      notify(" please login", "error")
      
    }

   await dispatch(sendUserOrder({product:`${data._id}`}))
   setloading(true)

   //window.location.pathname= "/product"
  }
  useEffect(()=>{
     if (order.data){

      notify(" your order is sended", "success")

      setTimeout(() => {
   window.location.pathname= "/product"
        
    }, 2000);



     }

   
    
    
    
  },[loading])


  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
   img: `${data.imageCover}`,
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>

    
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src={data.imageCover}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                src={data.imageCover}
                  className="img-fluid"
                  alt=""
                />
              </div>
                          </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title" style={{ fontSize: '24px' }}>
                  {data.title}

                </h3>
              </div>
              <div className="border-bottom py-3">
                
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 4 évaluations )</p>
                </div>
                
              </div>
              <br/>
              <div className="border-bottom">
              <h3 className="title" >
               Description
              </h3>
            </div>
              
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
              
                  <h2 className="product-data" style={{ fontSize: '18px' }}>{data.description}</h2>
                </div>
               
                
                

               
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantité :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center  gap-30 ms-5">
                    <button
                      className="button border-0"
                     
                      type="button"
                      onClick={sendOreder}
                      style={{ marginTop: '100px' }}
                    >
                      Demandez un devis 
                    </button>
                   
                  </div>
                </div>
               
                
                 
              
              </div>
            </div>
          </div>
        </div>
      </Container>
      
     
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Apple Watch</h6>
                  <p className="mb-1">Quantity: asgfd</p>
                  <p className="mb-1">Color: asgfd</p>
                  <p className="mb-1">Size: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                View My Cart
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Continue To Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>

    </>
  );
};

export default SingleProduct;
