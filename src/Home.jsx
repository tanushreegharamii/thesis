import React, { useEffect, useState } from 'react'
import Navbar from './Navigation/Navbar'
import './cssfiles/Home.css'
import Blog from './Navigation/Blog';
function Home(){
    const [userName, setUserName]= useState();
    useEffect(()=>{
        setUserName(localStorage.getItem('userName'))
    },[userName])
    
    return(
        <>
        <Navbar/><br></br><br></br><br></br><br></br><br></br>
        <Blog/><br></br>
        <div className="cont-the">
        <h4>Contents</h4>
        <h4>Thesis</h4>
        </div>
        
        <div className="line"></div>


        <div className="thesisCon" id='userPosts' >
        <div className="userContainer-top"> <div className="userImage"> </div> <div className="userId">{userName}</div></div>
            <div className="content-thesis">
                 <div className="photo-input"><div className="add"><img src={require("../src/img/plus.png")} height={"30px"} alt="cc" /></div><h6>Add picture</h6></div>
                 <div className="photo-input2"><h5>Thesis:</h5><p>Galaxies, vast conglomerations of stars, gas, dust, and dark matter, represent the building blocks of the universe. These celestial structures come in various shapes and sizes, ranging from majestic spirals to elliptical behemoths. Each galaxy harbors billions to trillions of stars, bound together by gravity, and orbiting around a common center of mass. Within galaxies, nebulae, star clusters, and supermassive black holes dot the cosmic landscape, shaping the evolution of stellar systems. Galaxies play a crucial role in cosmic ecology, serving as nurseries for new stars and hosting intricate interactions that drive cosmic evolution on grand scales.</p></div>
                 <div className="likeCon">
                    <div className="allLikes"><img src={require("../src/img/like.png")} height={"25px"} alt="cc" /></div>
                    <img src={require("../src/img/save.png")} height={"25px"} alt="cc" />
                    <img src={require("../src/img/share.png")} height={"25px"} alt="cc" />
                 </div>
             </div>
        </div>
        


        <div className="thesisCon" id='userPosts' >
           <div className="userContainer-top"> <div className="userImage"></div> <div className="userId">UserName</div></div>
            <div className="content-thesis">
                 <div className="photo-input"><div className="add"><img src={require("../src/img/plus.png")} height={"30px"} alt="cc" /></div><h6>Add picture</h6></div>
                 <div className="photo-input2"><div className="add"><img src={require("../src/img/plus.png")} height={"30px"} alt="cc" /></div><h6>Add picture</h6></div>
                 <div className="likeCon">
                    <div className="allLikes"><img src={require("../src/img/like.png")} height={"25px"} alt="cc" /></div>
                    <img src={require("../src/img/save.png")} height={"25px"} alt="cc" />
                    <img src={require("../src/img/share.png")} height={"25px"} alt="cc" />
                 </div>
             </div>
        </div>

        </>
    )
}

export default Home