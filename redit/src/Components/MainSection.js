import React from 'react'
import "./MainSection.css"
import LeftNav from './LeftNav'
import axios from 'axios';
import { useState,useEffect } from 'react';
import HeroSection from './HeroSection';
const MainSection = () => {

  const [posts,setposts]=useState([]);

  useEffect(() => {

    axios.get('https://www.reddit.com/r/reactjs.json')
  
          .then( res =>{

              let Responcedata=res.data;

              let newPosts=Responcedata.data.children;
              
              newPosts=newPosts.map((eachPost)=>{
                  return eachPost.data
              })

              console.log(newPosts)
              setposts(newPosts)
          }

          )
          .catch(error =>{
              console.log("Error Fetching Data From API:",error)
          })



  }, [])


  return (
    <div className='Main-Section'>
      <div className='Left-S'>
      <LeftNav/>
      </div>
      <div className='Center-S'>
      {
        posts.map((eachPost)=>{
          return <HeroSection
          name={eachPost?.title}
          postText={eachPost?.selftext}
    
          />
        })

      }
      </div>
    </div>
  )
}

export default MainSection
