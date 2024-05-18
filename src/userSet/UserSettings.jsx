import React from 'react'
import Navbar from './Navigation/Navbar'
import './cssfiles/UserSettings.css'
function UserSettings(){
    return(
        <>
        <Navbar/><br></br><br></br><br></br><br></br><br></br>
        <h2>B blog.com</h2>
        <div className="block1">
            <p>Hi there! <br></br> This is s blog site, You can create your blog such as thesis or experience and share content here.</p>
        </div>
        <div className="cont-the">
        <h4>Contents</h4>
        <h4>Thesis</h4>
        </div>


        <div className="thesisCon">
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
        


        <div className="thesisCon">
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

export default UserSettings