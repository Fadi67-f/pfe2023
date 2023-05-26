import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    value:0,
    data:[],
    categoryData:[],
    OneProducts:{},
    deletProduct:[],
    updateProduct:[],
    dataCreate: []
}
export const getAllData =createAsyncThunk('x/getalldata',
    
    async ()=>{
       
       const res =await axios.get("http://localhost:8000/sadim/product?limit=4")
       
       return res.data
       
    })

    export const getPageProducts =createAsyncThunk('x/getPageProducts',
    
    async (num)=>{

       const res =await axios.get( `http://localhost:8000/sadim/product?limit=4&page=${num}`)
       return res.data
    })

    export const createProduct =createAsyncThunk('x/createProduct',
    
    async (data)=>{
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }

       const res =await axios.post( `http://localhost:8000/sadim/product`,data , config)
       return res.data
    })


    export const getAllCategories =createAsyncThunk('x/getAllCategories',
    
    async ()=>{

       const res =await axios.get( `http://localhost:8000/sadim/Category`)
       return res.data.data
    })


    export const getAllProductxCategory  =createAsyncThunk('x/getAllProductxCategory',

    async (id)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product/category/${id}`)
        return res.data
     })
     export const getOneProduct  =createAsyncThunk('x/getOneProduct',

    async (id)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product/${id}`)
        return res.data.data
     })
     export const getAllProductSearchwithcategory  =createAsyncThunk('x/getAllProductSearchwithcategory',

    async (stringQuery)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product/category${stringQuery}`)
        return res.data
     })
     export const getAllProductSearch  =createAsyncThunk('x/getAllProductSearch',

    async (stringQuery)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product${stringQuery}`)
        return res.data
     })
     export const DeletProduct  =createAsyncThunk('x/deletProduct',

    async (ID)=>{
        const config = {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }

        const res =await axios.delete( `http://localhost:8000/sadim/product/${ID}`,config)
        return res.data
     })

     export const UpdateProduct  =createAsyncThunk('x/UpdateProduct',

     async (data)=>{
 
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }

         const res =await axios.patch(`http://localhost:8000/sadim/product`, data, config)
         return res.data
      })
     

 const testSlice = createSlice(

{
    name:'test',
    initialState,
    reducers:{
},
extraReducers:{
    [getAllData.pending]:(state,action)=>{},
    [getAllData.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllData.rejected]:(state,action)=>{}
,

    [getPageProducts.pending]:(state,action)=>{},
    [getPageProducts.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getPageProducts.rejected]:(state,action)=>{},


    [getAllCategories.pending]:(state,action)=>{},
    [getAllCategories.fulfilled]:(state,action)=>{
        state.categoryData=action.payload
    },
    [getAllCategories.rejected]:(state,action)=>{},



    [getAllProductxCategory.pending]:(state,action)=>{},

    [getAllProductxCategory.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllProductxCategory.rejected]:(state,action)=>{},

    [getOneProduct.pending]:(state,action)=>{},

    [getOneProduct.fulfilled]:(state,action)=>{
        state.OneProducts=action.payload
    },
    [getOneProduct.rejected]:(state,action)=>{},


    [getAllProductSearch.pending]:(state,action)=>{},

    [getAllProductSearch.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllProductSearch.rejected]:(state,action)=>{},

    [getAllProductSearchwithcategory.pending]:(state,action)=>{},

    [getAllProductSearchwithcategory.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllProductSearchwithcategory.rejected]:(state,action)=>{},


    [DeletProduct.pending]:(state,action)=>{},

    [DeletProduct.fulfilled]:(state,action)=>{
        state.deletProduct=action.payload
    },
    [DeletProduct.rejected]:(state,action)=>{},

    [UpdateProduct.pending]:(state,action)=>{},

    [UpdateProduct.fulfilled]:(state,action)=>{
        state.updateProduct=action.payload
    },
    [UpdateProduct.rejected]:(state,action)=>{
        state.updateProduct=action.error

    },

    [createProduct.pending]:(state,action)=>{},

    [createProduct.fulfilled]:(state,action)=>{
        state.dataCreate=action.payload
    },
    [createProduct.rejected]:(state,action)=>{},

    







}

}
)

export default testSlice.reducer;