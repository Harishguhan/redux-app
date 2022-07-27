import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState ={
    loading:false,
    users:[],
    error:'',
}
export const fetchUsers = createAsyncThunk('user/fetchUsers',() => {
    return axios
    .get('http://localhost:7000/posts')
    .then((responce) =>responce.data)
})
export const deleteUsers = createAsyncThunk('user/deleteUsers',(userss) => {
    console.log(userss)
    return axios
    .delete(`http://localhost:7000/posts/${userss}`)
    .then((responce) =>responce.data)
})
export const addUsers =createAsyncThunk('user.addUsers',(details) =>{
    return axios
    .post('http://localhost:7000/posts',details)
    .then((responce) =>responce.data)
})
export const editUsers =createAsyncThunk('user.editUsers',(updatevalue) =>{
    
    return axios
    
    .put(`http://localhost:7000/posts/${updatevalue.id}`,updatevalue)

    .then((responce) =>responce.data)
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchUsers.pending,(state) =>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) =>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action) =>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })

    }
})

export default userSlice.reducer