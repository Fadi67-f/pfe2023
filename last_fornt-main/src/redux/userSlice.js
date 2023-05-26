import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    
    data:{},
    up:[],
    alluser:[],
    deleteuserr:{},
    AllMessage:[]
    
}
export const updateme =createAsyncThunk('x/updateme',


    
    async (data)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.put("http://localhost:8000/sadim/user/updateme",data,config)
       
       return res.data
       
    })
    export const GETallUser =createAsyncThunk('x/GETallUser',


    
    async ()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.get("http://localhost:8000/sadim/user",config)
       
       return res.data
       
    })
    export const DeleteUser =createAsyncThunk('x/DeleteUser',


    
    async (id)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.delete(`http://localhost:8000/sadim/user/delete/${id}`,config)
       
       return res.data
       
    })

    export const UpdateProducts  =createAsyncThunk('x/UpdateProducts',

     async (id,data)=>{
 
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }
          
         const res =await axios.patchForm(`http://localhost:8000/sadim/product/${id}`, data, config)
         return res.data
      })

      export const UpdateUser  =createAsyncThunk('x/UpdateUser',

     async (data)=>{
 
        const config = {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }
          
         const res =await axios.put(`http://localhost:8000/sadim/user/changeRole`, data, config)
         return res.data
      })

      export const CreateMesage  =createAsyncThunk('x/CreateMesage',

     async (data)=>{
 
        
          
         const res =await axios.post(`http://localhost:8000/sadim/claim`, data)
         return res.data
      })
      export const GetAllMesage  =createAsyncThunk('x/GetAllMesage',

     async ()=>{
        const config = {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }
 
        
          
         const res =await axios.get(`http://localhost:8000/sadim/claim`,config )
         return res.data
      })
      export const deleteMesage  =createAsyncThunk('x/deleteMesage',

     async (id)=>{
        const config = {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem("token")}`
               }
        }
 
        
          
         const res =await axios.delete(`http://localhost:8000/sadim/claim//deleteOne/${id}`,config )
         return res.data
      })
   



    const usertSlice = createSlice(

        {
            name:'user',
            initialState,
            reducers:{
        },
        extraReducers:{
        
        
            [updateme.pending]:(state,action)=>{},
        
            [updateme.fulfilled]:(state,action)=>{
                state.data=action.payload
            },
            [updateme.rejected]:(state,action)=>{
            state.data=action.error

            },

            
            [UpdateProducts.pending]:(state,action)=>{},
        
            [UpdateProducts.fulfilled]:(state,action)=>{
                state.up=action.payload
            },
            [UpdateProducts.rejected]:(state,action)=>{
            state.up=action.error

            },
            [GETallUser.pending]:(state,action)=>{},
        
            [GETallUser.fulfilled]:(state,action)=>{
                state.alluser=action.payload
            },
            [GETallUser.rejected]:(state,action)=>{
            state.alluser=action.error

            },
            [DeleteUser.pending]:(state,action)=>{},
        
            [DeleteUser.fulfilled]:(state,action)=>{
                state.deleteuserr=action.payload
            },
            [DeleteUser.rejected]:(state,action)=>{
            state.alluser=action.error
            },
            [GetAllMesage.pending]:(state,action)=>{},
        
            [GetAllMesage.fulfilled]:(state,action)=>{
                state.AllMessage=action.payload
            },
            [GetAllMesage.rejected]:(state,action)=>{
            state.AllMessage=action.error
            }


          
        
        
        
        
        
        
        
        
        }
        
        }
        )
        
        export default usertSlice.reducer;