import React from 'react'
import { useState, useEffect } from 'react';

function Blog(){
    const [userName, setUserName]= useState();
    useEffect(()=>{
        setUserName(localStorage.getItem('userName'))
    },[userName])
    
    return(
        <>
        
        <h2>B blog.com</h2>
        <div className="block1">
            <p>Hi {userName} <br></br> This is s blog site, You can create your blog such as thesis or experience and share content here.</p>
        </div></>
    )
}
export default Blog