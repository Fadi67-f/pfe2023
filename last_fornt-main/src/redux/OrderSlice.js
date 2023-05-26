import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    
    data:[],
    recu:[],
    UserData:[],
    OrderUser:[],
    GetAllOrder:[]
    
}
export const DeleteOrder =createAsyncThunk('x/DeleteOrder',


    
    async (id)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.delete(`http://localhost:8000/sadim/order/${id}`,config)
       
       return res.data
       
    })

export const GetAllOrder =createAsyncThunk('x/GetAllOrder',


    
    async ()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.get("http://localhost:8000/sadim/order?sort=-createdAt",config)
       
       return res.data
       
    })
    export const SendRecu =createAsyncThunk('x/SendRecu',


    
    async (data)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.post("http://localhost:8000/sadim/recu",data,config)
       
       return res.data
       
    })

    export const GetRecuUser =createAsyncThunk('x/GetRecuUser',


    
    async ()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.get("http://localhost:8000/sadim/recu/get",config)
       
       return res.data
       
    })

    export const sendUserOrder =createAsyncThunk('x/sendUserOrder',


    
    async (data)=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.post("http://localhost:8000/sadim/order",data,config)
       
       return res.data
       
    })

    export const GetAllOrderUser =createAsyncThunk('x/GetAllOrderUser',


    
    async ()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
               }
        }
       
       const res =await axios.get("http://localhost:8000/sadim/order/get",config)
       
       return res.data
       
    })
   



    const OrdertSlice = createSlice(

        {
            name:'order',
            initialState,
            reducers:{
        },
        extraReducers:{
        
        
            [GetAllOrder.pending]:(state,action)=>{},
        
            [GetAllOrder.fulfilled]:(state,action)=>{
                state.data=action.payload
            },
            [GetAllOrder.rejected]:(state,action)=>{
            state.data=action.error

            },

            [SendRecu.pending]:(state,action)=>{},
        
            [SendRecu.fulfilled]:(state,action)=>{
                state.recu=action.payload
            },
            [SendRecu.rejected]:(state,action)=>{
            state.recu=action.error

            },

            [GetRecuUser.pending]:(state,action)=>{},
        
            [GetRecuUser.fulfilled]:(state,action)=>{
                state.UserData=action.payload
            },
            [GetRecuUser.rejected]:(state,action)=>{
            state.UserData=action.error

            },

            [sendUserOrder.pending]:(state,action)=>{},
        
            [sendUserOrder.fulfilled]:(state,action)=>{
                state.OrderUser=action.payload
            },
            [sendUserOrder.rejected]:(state,action)=>{
            state.OrderUser=action.error

            },

            [GetAllOrderUser.pending]:(state,action)=>{},
        
            [GetAllOrderUser.fulfilled]:(state,action)=>{
                state.GetAllOrder=action.payload
            },
            [GetAllOrderUser.rejected]:(state,action)=>{
            state.GetAllOrder=action.error

            },


          
          
        
        
        
        
        
        
        
        
        }
        
        }
        )
        
        export default OrdertSlice.reducer;