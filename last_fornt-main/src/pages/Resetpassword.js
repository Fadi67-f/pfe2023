import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/authSlice";
import notify from "./notify";
import { ToastContainer } from "react-toastify";
const Resetpassword = () => {
  const navigate = useNavigate()

  const [email, setemail] = useState('');
  const [password, setpaswword] = useState('');
  const [Cpassword, setCpaswword] = useState('');
  const [loading, setloading] = useState(false);


  const dispatch =useDispatch()
  const data=useSelector(state=>state.auth.Rpassword)
  

  console.log(data)


  const send =async ()=>{
    if(email===''||password===''||Cpassword===''||password!==Cpassword){

      notify("Incorrect Inputs","error")

    setTimeout(() => {
        
      window.location.pathname="/reset-password"
    }
               
           , 2000);

      

    }else{

    await dispatch(resetPassword({email,"newPassword":password}))


    setloading(true)

    
    
    
    }

  }

  useEffect(()=>{
    if(data){
      if(data.token) {
        notify("success","success")
    
    setTimeout(() => {
    window.location.pathname="/login"
      

       }, 2000);
         return

      }
      if(data.message =="Request failed with status code 404"
      
        ){

        notify("Incorrect email ","error")
 
 
        setTimeout(() => {
        
      window.location.pathname="/reset-password"    }
               
           , 2000);

           return
      
      }

      
  
  
    }else{
  
    }
  
  
   },[loading])

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                className="user-input my-4 text-center mx-auto"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}

                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                className="user-input my-4 text-center mx-auto"
                value={password}
                onChange={(e)=>{setpaswword(e.target.value)}}

                />
                <input
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                className="user-input my-4 text-center mx-auto"
                value={Cpassword}
                onChange={(e)=>{setCpaswword(e.target.value)}}

                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" onClick={send}>Ok</button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
    <ToastContainer/>

      </Container>
    </>
  );
};

export default Resetpassword;
