import React, { useEffect, useState } from 'react'
import { deleteHistory, getAllHistory } from '../services/allAPI'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
function Watchhistory() {
   const [history,setHistory]=useState([])
  const getHistory = async()=>{
    const {data} = await getAllHistory()
    /* console.log(data); */
    setHistory(data)
  }
  console.log(history);

  const handleDelete= async(id)=>{
    await deleteHistory(id)
    getHistory()
  }
  useEffect(()=>{
    getHistory()
  },[])
  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3>Watch history</h3>
      
      <Link className='btn btn-success' to={'/home'} style={{textDecoration:'none'}}><i  class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
<tr>
  <th>#</th>
  <th>Caption</th>
  <th>Url</th>
  <th>Timestamp</th>
  <th>Action</th>
</tr>
        </thead>
        <tbody>
{history.length>0?
history.map((item)=>(<tr>
  <td>{item.id}</td>
  <td>{item.caption}</td>
  <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
  <td>{item.timeStamp}</td>
  <td> <button onClick={()=>handleDelete(item?.id)}   className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button> </td>
</tr>))
:
<p>nothing to display</p> }
        </tbody>
      </table>
    </>
  )
}

export default Watchhistory