import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  //create state to do statelifting
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>
   <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center '>

   <div className='addvideos d-flex justify-content-center align-items-center'>
    <Add setUploadVideoStatus={setUploadVideoStatus}/>
   </div>
<Link to={'/watchhistory'} style={{textDecoration:'none'}}>Watch history</Link>
   
   </div>
   
   <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between '>
<div className='allvideos col-lg-9'>
  <h4>All videos</h4>
  <View uploadVideoStatus={uploadVideoStatus}/>
</div>
<div className='category col lg-3'>
  <Category/>
</div>
   </div>
    </>
  )
}

export default Home