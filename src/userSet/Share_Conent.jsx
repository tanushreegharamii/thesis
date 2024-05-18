import React from 'react'
import Blog from '../Navigation/Blog';
import Navbar from '../Navigation/Navbar';
import { useState, useEffect } from 'react';
import '../userSet/shareContent.css'
import axios from 'axios';


function Share_Content(){
    const [userName, setUserName]= useState();
    const [image, setImage] = useState();
    const [thesis, setThesis] = useState();
    const[file, setFile]= useState();

    const [text, setText]=useState();
    useEffect(()=>{
        setUserName(localStorage.getItem('userName'))
    },[userName])



///////////////////// TAKING UPLOADING PHOTO FROM USERS //////////////////////

    function uploadPhoto(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file",file)
        axios.post('http://localhost:3001/share_content',formData)
        console.log(file)
    }




///////////////////////// TAKING  POST-IMAGE  FROM USER////////////////////

    function takeImage(e){
        setImage(e.target.value[0])
        console.log(e.target.file)
    }


/////////////////////////////CREATING POST FUNCTION/////////////////////////////////

    function postCreation(){
        console.log(thesis)
        axios.post('http://localhost:3001/share_content', {thesis} )
        .then(result => {console.log(result)
            console.log('Post created now')
          })
          .catch(err=> console.log(err))
        
        
    }


///////////////////////////////// GETTING THESIS FROM BACKEND //////////////////////////////

  function postText(){
    axios.post('http://localhost:3001/share_content',{text})
    .then(result => {console.log(result)
        console.log('TExt created')
      })
      .catch(err=> console.log(err))
  }

  function getText(){
    axios.get('http://localhost:3001/share_content')
  }



    return(
        <>
         <Navbar/><br></br><br></br><br></br><br></br><br></br>
         <p>Upload your image here</p>
         <div className="photo"><input  type='file' onChange={(e)=>setFile(e.target.value)} ></input><button onClick={uploadPhoto}>Save</button></div>
        <Blog/><br></br>
        
        <div className="cont-the">
        <h4>Contents</h4>
        <h4>Thesis</h4>
        </div>
        
        <div className="line"></div>

<div className="create"><p>Create your Post here {userName}</p></div>

        <div className="thesisCon" id='userPosts' >
        <div className="userContainer-top"> <div className="userImage"> </div> </div>
            <div className="content-thesis">
                 <div className="photo-input" ><input type='file' name='file' onChange={takeImage} ></input>
                    <div className="userImage"></div></div>
                 <div className="photo-input2"><h5>Thesis:</h5> 
                
                <input type='text' placeholder='Type your thesis here'  onChange={(e)=> setThesis(e.target.value)}  ></input>
                 </div>
                 <div className="submit"> <button onClick={postCreation} >Post</button></div>
             </div>
        </div>
        <input type='text' placeholder='Create text' onChange={(e)=>setText(e.target.value)} ></input>
        <button onClick={postText}>TEXT POST</button>
        <p>Here is your thesis uploaded : {getText} </p>
        <br></br>
        </>
    )
}
export default Share_Content