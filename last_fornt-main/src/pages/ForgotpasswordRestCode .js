import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch,useSelector } from "react-redux";
import { SendRestCode } from "../redux/authSlice";
import { ToastContainer } from "react-toastify";
import notify from "./notify";
import { useEffect } from "react";
const ForgotpasswordRestCode = () => {
  const navigate = useNavigate()


  const dispatch =useDispatch()
  const data=useSelector(state=>state.auth.Scode)
  console.log(data)
  const [Code, setCode] = useState('');
  const [loading, setloading] = useState(false);




  const send =async ()=>{
    if(Code===''){

    notify("please enter your rest-code","error")

    setTimeout(() => {
        
      window.location.pathname="/Rest-Code"
    }
               
           , 2000);
      

    }else{

    await dispatch(SendRestCode({'resetCode':Code}))

    setloading(true)

   

    


    
    
    
    }

  }


  useEffect(()=>{
    if(data){
      if(data.status=="Success") {
        notify("success","success")
    
    setTimeout(() => {
    window.location.pathname="/reset-password"
      

       }, 2000);
         return

      }
      if(data.message =='Request failed with status code 500'
        ){

        notify("Incorrect rest-code ","error")
 
 
        setTimeout(() => {
        
      window.location.pathname="/Rest-Code"
    }
               
           , 2000);

           return
      
      }

      
  
  
    }else{
  
    }
  
  
   },[loading])

  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Code</h3>
              <p className="text-center mt-2 mb-3">
                this code valible for 30 m
              </p>
              
                <input type="email" name="email" placeholder="Rest Code"
                className="user-input my-4 text-center mx-auto"
                value={Code}
                onChange={(e)=>{setCode(e.target.value)}}
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit" onClick={send}>
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default ForgotpasswordRestCode;
