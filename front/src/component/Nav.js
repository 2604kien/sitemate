import React from "react";
import {useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Navbar(){
    const navigate=useNavigate();
    return(
        <>
        <div style={{
            height:"80px",
            border:"1px solid black",
            display:"flex",
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <h1 style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Home</h1>
        </div>
        <Outlet/>
        </>
    )
}