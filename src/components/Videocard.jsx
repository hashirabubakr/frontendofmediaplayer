import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideo } from '../services/allAPI';


function Videocard({displayVideo , setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
const handleShow =async()=>{
  setShow(true)

  const {caption,embedLink}= displayVideo
  const today = new Date
 /*  console.log(today); */

  let timeStamp= new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
  }).format(today)
  console.log(timeStamp);

  let videoDetails={
    caption,
    embedLink,
    timeStamp
  }
  await addToHistory(videoDetails)
}

const removeVideo= async(id)=>{
const response = await deleteVideo(id)
console.log(response);
setDeleteVideoStatus(true)
}
const dragstarted=(e,id)=>{
  console.log(`card  ${id} started dragging`);
  //for data transfer
  e.dataTransfer.setData("videoID",id)
}
  return (
    <div>
      <Card style={{ width: '100%',height:'400px' }} draggable onDragStart={(e)=>dragstarted(e,displayVideo?.id)}>
      <Card.Img height={'270px'} onClick={handleShow} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title>
          <h6>{displayVideo.id}</h6>
          <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
        </Card.Title>
      
      </Card.Body>
    </Card>
    <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>


    
    </div>
  )
}

export default Videocard