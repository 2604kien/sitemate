import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const issueAdapter=createEntityAdapter();

const initialState=issueAdapter.getInitialState({
    currIssueData:"",
    status:"idle",
    message:""
});

export const addNewIssueData=createAsyncThunk('issue/addNewissueData', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
        
    }
    const response=await axios.post(serverURL+"issue", data, config)
    return response.data;
})
export const getAllIssueData=createAsyncThunk('issue/getAllissueData', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+"issue", config);
    return response.data;
})
export const fetchCurrIssueData=createAsyncThunk('issue/fetchCurrissueData', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+`issue/${id}`, config);
    return response.data;
})
export const updateIssueData=createAsyncThunk('issue/updateissueData', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.put(serverURL+'issue/', data, config);
    return response.data;
})
export const deleteIssueById=createAsyncThunk('issue/deleteissueById', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.delete(serverURL+`issue/${id}`,config);
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