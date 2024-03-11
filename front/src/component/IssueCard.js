import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssueById } from "../reducers/issueReducer";
export default function IssueCard(props){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    return(
        <div>
            <h2>Id: {props.data._id}</h2>
            <h2>Title: {props.data.title}</h2>
            <h2>Description: {props.data.description}</h2>
            <div>
                <button onClick={()=>navigate(`/edit/${props.data._id}`)}>Edit</button>
                <button onClick={()=>{
                    dispatch(deleteIssueById(props.data._id));
                    window.location.reload();
                }}>Delete</button>
            </div>
            <hr/>
        </div>
    )
}