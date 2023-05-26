import React from 'react'
import { Link } from 'react-router-dom'


const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        All Orders                    </div>
                </Link>
                <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        La Liste Des Produits                  </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Ajouter Produit
                    </div>
                </Link>
                <Link to="/admin/AllCategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        La Liste Des Catégories 
            </div>
        </Link>

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Ajouter Catégorie 
                    </div>
                </Link>
                
                <Link to="/admin/AllUsers" style={{ textDecoration: 'none' }}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Gestion des clients  
                </div>
            </Link>
            
        <Link to="/admin/allClaim" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                  contacts et réclamations 
            </div>
        </Link>


            </div>
        </div>
    )
}

export default AdminSideBar
