import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import Header from './../components/Header';
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { CreateMesage } from "../redux/userSlice";

const Contact = () => {
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [phone, setphone] = useState('');
  const [name, setname] = useState('');

  const send =async ()=>{
    if(email===''||phone===''||name===''||message===''){

      console.log('error')  
      return
    }

    await dispatch(CreateMesage({name,email,message,phone}))

   
     
    window.location.pathname='/'
    

  }

  const dispatch =useDispatch()
  const data=useSelector(state=>state.test.categoryData)


  return (
    <>
   
      <Meta title={"Nous Contactez "} />
      <BreadCrumb title="Nous Contactez" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.9283173849453!2d10.191028300000001!3d36.820237600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd355e159eb553%3A0xfbea7db4005c6d19!2sSADIM!5e0!3m2!1sen!2stn!4v1677244711017!5m2!1sen!2stn"
           width="600"
            height="450"
            className="border-2 w-100" 
            allowFullScreen=""
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom"
                      value={name}
                      onChange={(e)=>{setname(e.target.value)}}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>{setemail(e.target.value)}}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Nnuméro telephone"
                      value={phone}
                      onChange={(e)=>{setphone(e.target.value)}}
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Commentaire"
                      value={message}
                      onChange={(e)=>{setmessage(e.target.value)}}
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0"  onClick={send}>Envoyez</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4"> Contact</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                       Avenue de carthage , rue Ahmed el Telili , Zarrouk centre B6 , Tunis
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+216 31195670">+216 31195670</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:Sadim.industrielle@gmail.com">
                        Sadim.industrielle@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Lundi – Samedi 08:00 – 17:30 </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
