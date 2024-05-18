import React from 'react'
import './Navbar.css'
function Navbar (){
    function logOut(){
        localStorage.removeItem('userName')
        document.location.reload(true)
    }
    return(
        <>
        <div className="nav">

        <div className="navContainer" >
        <img src={require("../img/more.png")} height={"40px"} alt="cc"   />
        <img src={require("../img/letter-b.png")} height={"40px"} alt="cc" />
        </div>
       <div className="logHolder"> <div className="logout" onClick={()=>logOut} ><h5>Log Out</h5><img src={require("../img/left.png")} height={"12px"} alt="cc" /></div></div>

        </div>
       
        </>
    )
}
export default Navbar