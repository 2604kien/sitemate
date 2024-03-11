import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllIssueData } from "../reducers/issueReducer";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import IssueCard from "./IssueCard";
export default function Home(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const issueData=useSelector(state=>state.entities);
    React.useEffect(()=>{
        dispatch(getAllIssueData());
    },[dispatch])
    const element=Array.isArray(issueData)?issueData.map(el=><IssueCard key={el._id} data={el}/> ):<></>
    return(
        <div className="home--page">
            <button onClick={()=>navigate('/add')}>Add</button>
            <div className="form--el">
                {element}
            </div>
           
        </div>
    )
}