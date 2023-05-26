import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    
    data:{},
    update:{}
}
export const AddCategory =createAsyncThunk('x/AddCategory',


    
    async (data)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.post("http://localhost:8000/sadim/category",data,config)
       
       return res.data
       
    })
    export const DeleteCategory =createAsyncThunk('x/GetAllCategory',


    
    async (id)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.delete(`http://localhost:8000/sadim/category/${id}`,config)
       
       return res.data
       
    })
    export const UpdateCategory =createAsyncThunk('x/UpdateCategory',


    
    async (data)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.patch(`http://localhost:8000/sadim/Category`,data,config)
       
       return res.data
       
    })
   
   



    const categorytSlice = createSlice(

        {
            name:'category',
            initialState,
            reducers:{
        },
        extraReducers:{
        
        
            [AddCategory.pending]:(state,action)=>{},
        
            [AddCategory.fulfilled]:(state,action)=>{
                state.data=action.payload
            },
            [AddCategory.rejected]:(state,action)=>{
            state.data=action.error

            },
            [UpdateCategory.pending]:(state,action)=>{},
        
            [UpdateCategory.fulfilled]:(state,action)=>{
                state.update=action.payload
            },
            [UpdateCategory.rejected]:(state,action)=>{
            state.data=action.error

            },

          
        
        
        
        
        
        
        
        
        }
        
        }
        )
        
        export default categorytSlice.reducer;