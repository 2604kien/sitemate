import React from "react"
import "../css/AddPage.css";
import { useDispatch } from "react-redux";
import { addNewIssueData } from "../reducers/issueReducer";
export default function AddIssue(){
    const dispatch=useDispatch();
    const [data, setData]=React.useState({
        title:"",
        description:""
    },[])
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
        await dispatch(addNewIssueData(data));
        alert("Item is successfully added");
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