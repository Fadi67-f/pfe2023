import React , {useState , useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
//import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';

import { useSelector, useDispatch } from 'react-redux'
import { UpdateProduct, getAllCategories, getOneProduct } from '../../redux/testSlice';
import { useParams } from 'react-router-dom';
import { UpdateProducts } from '../../redux/userSlice';
const AdminEditProducts = () => {
    const { id } = useParams();


    const [images, setImages] = useState([]);
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [CatID, setCatID] = useState('');


    const dispatch =useDispatch()
    const data=useSelector(state=>state.test.categoryData)
    const item=useSelector(state=>state.test.OneProducts)
    const up=useSelector(state=>state.test.updateProduct)
    console.log(up)



    
  useEffect(()=>{

    const run = async(id)=>{
     await   dispatch(getAllCategories())
      await  dispatch(getOneProduct(id))

    }

    
   run(id)


     
   },[])

  

   useEffect(() => {
    if (item) {
        
        
        
        
        setProdName(item.title)
        setProdDescription(item.description)
        

       
        
        

    }
}, [item])

   const onSelectCategory = (e)=>{
    

    setCatID(e.target.value)




 }
 function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

 const handelSubmit = async (e) => {
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 ) {
           console.log('error')
            return;
        }

        //convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

    

        const formData = new FormData();
        formData.append("title", prodName);
        console.log(prodName)

        formData.append("description", prodDescription);
        console.log(prodDescription)

        
        

        formData.append("category", CatID);
        console.log(CatID)

        formData.append("id", item._id);


        

        setTimeout(() => {
            formData.append("imageCover", imgCover);
           console.log(imgCover)

            itemImages.map((item) => formData.append("images", item))
        }, 1000);

       
      
      
        setTimeout(async() => {
        await dispatch(UpdateProduct(formData))

        console.log(formData)
    }, 2000);
        
    setTimeout(() => {
        window.location.pathname='/admin/allproducts'
    }, 3000)
        

       

    }
 











    
    return (
        <div >
        <div className="admin-content-text pb-4"> Add New Product</div>
            <Row className="justify-content-start " style={{width:'1600px'}}>
                <div className="admin-content-text pb-4"> Add New Product</div>
                <Col sm="8">
                    <div className="text-form pb-2"> Product Images</div>

                    <MultiImageInput
                    images={images}
                    setImages={setImages}
                    theme={"light"}
                    allowCrop={false}
                    max={4}
                />
                   
                <input
                value={prodName}
                onChange={(e)=>{setProdName(e.target.value)}}
                
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="title Product"            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder=" Description Product"
                value={prodDescription}
                onChange={(e)=>{setProdDescription(e.target.value)}}
                
            />
           
           
                    <select
                    onChange={onSelectCategory}
                    
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {data? data.map((item)=>{
                            return  (<option  key={item._id} value={item._id}>{item.name}</option>)
  
                          }) : null }
                        
                        
                    </select> 
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>Send</button>
                </Col>
            </Row>
           
        </div>
    )
}

export default AdminEditProducts
