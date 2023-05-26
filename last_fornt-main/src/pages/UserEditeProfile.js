import React,{useState , useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { updateme } from './../redux/userSlice';
import { useDispatch ,useSelector} from 'react-redux';

const UserEditeProfile = () => {
    

    const [user , setuser]= useState({})

    const [name , setName]= useState('')
    const [email , setEmail]= useState('')
    const [phone , setphone]= useState('')

  const dispatch =useDispatch()
  const data=useSelector(state=>state.user.data)



    useEffect(()=>{


    

    if(localStorage.getItem("user"))
    {
        setuser(JSON.parse( localStorage.getItem("user")))
        setName(user.name)
        setEmail(user.email)
        setphone(user.phone)
    }},[])
    useEffect(()=>{


    

        if(localStorage.getItem("user"))
        {
           
            setName(user.name)
            setEmail(user.email)
            setphone(user.phone)
        }},[user])
const send = async()=>{


  await dispatch  (updateme({
    name,
    email,
    phone
  }))
  localStorage.removeItem("user")
  localStorage.removeItem("token")

  

  
    window.location.pathname="/login"
  


}


    return (
        <div>
            <Row className="justify-content-center ">
                <div className="p mb-2">Modifier Votre Profil </div>
                <Col sm="8">
                { user.name ?    <input
                    type="text"
                    className="input-form d-block mt-2 px-3"
                    value={name}
            onChange={(e)=>setName(e.target.value)}

                    placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                />
                :    <input
                type="text"
                className="input-form d-block mt-3 px-3"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            

                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
             }
                  
             { user.phone ?   
                 <input
                type="text"
                className="input-form d-block mt-3 px-3"
                value={phone}
            onChange={(e)=>setphone(e.target.value)}

                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
            :    <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}

            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
        />
         }
         { user.email ?    <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder=""
        />
        :    <input
        type="text"
        className="input-form d-block mt-3 px-3"
        onChange={(e)=>setName(e.target.value)}
        value={email}

        
        placeholder=""
    />
     }
                </Col>
            </Row>
            <Row>
                <Col sm="12" className="d-flex justify-content-center " >
                    <button className="btn-save d-inline mt-2 " onClick={send}>Modifier </button>
                </Col>
            </Row>
        </div>
    )
}

export default UserEditeProfile
