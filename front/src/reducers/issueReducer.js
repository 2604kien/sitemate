import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const serverURL="http://localhost:3500/"
const issueAdapter=createEntityAdapter();

const initialState=issueAdapter.getInitialState({
    currIssueData:"",
    status:"idle",
    message:""
});

export const addNewIssueData=createAsyncThunk('issue/addNewissueData', async({data})=>{

    const response=await axios.post(serverURL+"issue", data)
    return response.data;
})
export const getAllIssueData=createAsyncThunk('issue/getAllissueData', async()=>{
    
    const response=await axios.get(serverURL+"issue");
    return response.data;
})
export const fetchCurrIssueData=createAsyncThunk('issue/fetchCurrissueData', async({id})=>{
   
    const response=await axios.get(serverURL+`issue/${id}`);
    return response.data;
})
export const updateIssueData=createAsyncThunk('issue/updateissueData', async({data})=>{

    const response=await axios.put(serverURL+'issue/', data);
    return response.data;
})
export const deleteIssueById=createAsyncThunk('issue/deleteissueById', async({id})=>{

    const response=await axios.delete(serverURL+`issue/${id}`);
    return response.data;
})
const issueSlice=createSlice({
    name:'issue',
    initialState: initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getAllIssueData.fulfilled, (state, action)=>{
            state.entities=action.payload.data;
            state.status="succeeded"
        })
        .addCase(fetchCurrIssueData.fulfilled, (state, action)=>{
            state.currIssueData=action.payload.data;
            state.status="succeeded"
        })
    }
})
export default issueSlice.reducer;
