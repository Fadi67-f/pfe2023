import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    
    data:{},
    Semail:{},
    Scode:{},
    Rpassword:{},
    
}
export const login =createAsyncThunk('x/login',
    
    async (data)=>{
       
       const res =await axios.post("http://localhost:8000/sadim/auth/login",data)
       
       return res.data
       
    })
    export const sign =createAsyncThunk('x/sign',
    
    async (data)=>{
       
       const res =await axios.post("http://localhost:8000/sadim/user",data)
       
       return res.data
       
    })
    export const SendEmail =createAsyncThunk('x/SendEmail',
    
    async (data)=>{
       
       const res =await axios.post("http://localhost:8000/sadim/auth/forgotPassword",data)
       
       return res.data
       
    })
    export const SendRestCode =createAsyncThunk('x/SendRestCode',
    
    async (data)=>{
       
       const res =await axios.post("http://localhost:8000/sadim/auth/verifyPassResetCode",data)
       
       return res.data
       
    })
    export const resetPassword =createAsyncThunk('x/resetPassword',
    
    async (data)=>{
       
       const res =await axios.post("http://localhost:8000/sadim/auth/resetPassword",data)
       
       return res.data
       
    })




    const authtSlice = createSlice(

        {
            name:'auth',
            initialState,
            reducers:{
        },
        extraReducers:{
        
        
            [login.pending]:(state,action)=>{},
        
            [login.fulfilled]:(state,action)=>{
                state.data=action.payload
            },
            [login.rejected]:(state,action)=>{
            state.data=action.error

            },

            [sign.pending]:(state,action)=>{},
        
            [sign.fulfilled]:(state,action)=>{
                state.data=action.payload
            },
            [sign.rejected]:(state,action)=>{
            state.data=action.error

            },
            [SendEmail.pending]:(state,action)=>{},
        
            [SendEmail.fulfilled]:(state,action)=>{
                state.Semail=action.payload
            },
            [SendEmail.rejected]:(state,action)=>{
            state.Semail=action.error

            },
            [SendRestCode.pending]:(state,action)=>{},
        
            [SendRestCode.fulfilled]:(state,action)=>{
                state.Scode=action.payload
            },
            [SendRestCode.rejected]:(state,action)=>{
            state.Scode=action.error

            },
            [resetPassword.pending]:(state,action)=>{},
        
            [resetPassword.fulfilled]:(state,action)=>{
                state.Rpassword=action.payload
            },
            [resetPassword.rejected]:(state,action)=>{
            state.Rpassword=action.error

            }
        
        
        
        
        
        
        
        
        }
        
        }
        )
        
        export default authtSlice.reducer;