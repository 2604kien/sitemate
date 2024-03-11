import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllIssueData } from "../reducers/issueReducer"
import IssueCard from "./IssueCard";
export default function Home(){
    const dispatch=useDispatch();
    const issueData=useSelector(state=>state.issue.entities);
    React.useEffect(()=>{
        dispatch(getAllIssueData());
    },[dispatch, issueData])
    const element=Array.isArray(issueData)?issueData.map(el=><IssueCard key={el._id} data={el}/> ):<></>
    return(
        <div style={{height:"100px", marginTop:"100px", zIndex:"1000", border:"1px solid black", backgroundColor:"black"}}>
            <h1>{element}</h1>
        </div>
    )
}