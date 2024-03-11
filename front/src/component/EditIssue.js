import React from "react"
import "../css/AddPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchCurrIssueData, updateIssueData } from "../reducers/issueReducer";
export default function EditIssue(){
    const {id}=useParams();
    const dispatch=useDispatch();
    const [data, setData]=React.useState({
        id:id,
        title:"",
        description:""
    },[])
    const currIssueData=useSelector(state=>state.currIssueData);

    React.useEffect(()=>{
        dispatch(fetchCurrIssueData(id));
    },[])
    React.useEffect(()=>{
        setData(currIssueData);
    },[currIssueData])
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setData(()=>{
            return ({
                ...data,
                [name]:value
            })
        })
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        await dispatch(updateIssueData(data));
        alert("Item is successfully update");
        window.location.reload();
        
    }
    return(
        <form className="add--form" onSubmit={handleSubmit}>
            <div className="form--el">
                <label htmlFor="Title">Title</label>
                <input type="text" value={data.title} name="title" onChange={handleChange} required/>
            </div>
            <div className="form--el">
                <label htmlFor="Description">Description</label>
                <textarea value={data.description} name="description" onChange={handleChange} required/>
            </div>
            <button>Submit</button>
        </form>
    )
}