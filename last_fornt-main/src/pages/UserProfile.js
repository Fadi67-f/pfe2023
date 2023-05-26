import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AdminSideBar from './Admin/AdminSideBar'
import './Admin/admin.css'
import { Link } from 'react-router-dom'
const UserProfile = () => {

    let user ={};

    if(localStorage.getItem("user"))
    {
        user = JSON.parse( localStorage.getItem("user"))
        console.log(user)
        console.log(localStorage.getItem("token"))

    }   
  

  return (


 <div >
            <div className='p my-3'> Profil</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">Nom:</div>
                        { user.name ?  <div className="p-1 item-delete-edit"> {user.name }</div>
                       :  <div className="p-1 item-delete-edit"> Pas de Nom</div>
                    }
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                       
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2"> Num Télephone :</div>
                        { user.phone ?  <div className="p-1 item-delete-edit"> {user.phone}</div>
                        :  <div className="p-1 item-delete-edit"> Pas de nombre</div>
                     }
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Adresse e-mail:</div>
                        { user.email ?  <div className="p-1 item-delete-edit"> {user.email }</div>
                        :  <div className="p-1 item-delete-edit"> Pas d'adresse mail</div>
                     }
                    </Col>
                </Row>
                <Row className="mt-5">





                <div className="sidebar">
                <div className="d-flex flex-column">
                    <Link to="/UserEditeProfile" style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                            Modifier  Profil              </div>
                    </Link>
                    <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                            Les commandes                  </div>
                    </Link>
                   
    
                    <Link to="/user/AllRecus" style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                            Les recus  
                        </div>
                    </Link>
                 
    
                </div>
            </div>
                </Row>

              
            </div>
        </div>
  )
}

export default UserProfile
