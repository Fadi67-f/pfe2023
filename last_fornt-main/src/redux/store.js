import {configureStore} from'@reduxjs/toolkit'
 import testSlice from './testSlice'
 import authtSlice from './authSlice'
 import usertSlice from'./userSlice'
 import categorySlice from'./categorySlice'
 import OrderSlice from'./OrderSlice'







export const store= configureStore(
{
    reducer:{
        test:testSlice,
        auth:authtSlice,
        user:usertSlice,
        category:categorySlice,
        order:OrderSlice
    }
}

)