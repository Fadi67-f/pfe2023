import React , { useState,useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { sign } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import notify from "./notify";
import { ToastContainer } from "react-toastify";

const Signup = () => {

  const navigate = useNavigate()

  const [email, setemail] = useState('');
  const [password, setpaswword] = useState('');
  const [phone, setphone] = useState('');
  const [name, setname] = useState('');


  const [loading, setloading] = useState(false);



  const dispatch =useDispatch()
  const data=useSelector(state=>state.auth.data)

  console.log(data)

  const onchangeEmail = (e)=>{
    setemail(e.target.value)
    console.log(e.target.value)
  

    

  }
  const onchangename = (e)=>{
    setname(e.target.value)
    console.log(e.target.value)
  

    

  }
  const onchangephone = (e)=>{
    setphone(e.target.value)
    console.log(e.target.value)
  

    

  }
  
  const onchangepassword = (e)=>{
    setpaswword(e.target.value)
    console.log(e.target.value)



  }
  const send =async ()=>{
    if(email===''||phone===''||name===''||password===''){

      notify("inccorect input ","error")


      setTimeout(() => {
      
    window.location.pathname="/signup"
  
             
         }, 2000);
  
      return
    }

    await dispatch(sign({name,email,password,phone}))

    setloading(true)
     
    
    

  }
 
 
 
  useEffect(()=>{

   if(data.data) {
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);

    notify("your account is done ","success")


    setTimeout(() => {
     
  window.location.pathname="/"

           
       }, 2000);
   

    setloading(false)

   

   }else{
    if (data.message){

      notify("your email is existe ","error")


    setTimeout(() => {
    
  window.location.pathname="/signup"

           
       }, 2000);


    }
   }
   
    
    
    
  },[loading])









  return (
    <>
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">  Créer un compte </label>
        <input
          type="text"
          className="user-input mt-3 text-center mx-auto"
          value={name}
          onChange={onchangename}
          placeholder="Nom"
        />
        <input
        placeholder=" Adresse e-mail"
        type="text"
        className="user-input mt-3 text-center mx-auto"
        value={email}
        onChange={onchangeEmail}
      />
        <input
          placeholder="Numéro de téléphone"
          type="text"
          className="user-input my-3 text-center mx-auto"
          value={phone}
          onChange={onchangephone}
        />
        <input
          placeholder="Mot de Passe "
          type="password"
          className="user-input text-center mx-auto"
          value={password}
          onChange={onchangepassword}
        />
        <button className="btn-login mx-auto mt-4" onClick={send}> S'enregistrer </button>
        
      </Col>
    </Row>
    <ToastContainer/>

  </Container>
    </>
  );
};

export default Signup;
