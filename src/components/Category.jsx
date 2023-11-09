import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { addToCategory, getAllCategory, getAllDetails, getDetails, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';
function Category() {
  const [categoryName,setCategoryName]=useState({})
  const [allCategory,setAllCategory]=useState([])
  const [category,setCategory]=useState({
    cname:"",
    video:[]
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category

  const handleAddCategory= async()=>{
    console.log(categoryName);
    if(categoryName){
   let body={
      categoryName,
      allVideos:[]
    }
    //make api call
    const response=await addToCategory(body)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success('category succesfully uploaded')
      //to make the state null after succesfull addition
      setCategoryName("")
      //to close the modal
      handleClose()
    }else{
      console.log(response);
      toast.error('something went wrong...please try again later.')
    }
    }else{
      toast.error('Please enter the category')
    }
  }

  //function to get all category

  const getCategory=async()=>{
    const {data}=await getAllCategory()
   /*  console.log(data); */
    setAllCategory(data)
  }
  console.log(allCategory);

  //dragover eventlistener 
  const dragOver=(e)=>{
    //this will prevent reload so that the data we sent from videocard.jsx will not be lost
    e.preventDefault()
console.log(`inside dragover`);
  }
  const videoDrop= async(e, categoryId)=>{
console.log(`dropped in the category id ${categoryId}`);
//to get the videoid thats send from videocard component
const videoid= e.dataTransfer.getData("videoId")
console.log(videoid);
const {data}= await getAllDetails(videoid)
console.log(data);
//to find the particular category with the specified id
let selectedCategory = allCategory?.find(item=>item.id==categoryId)
console.log(selectedCategory);
//data is added to the allvideos array in the particular category
selectedCategory.allVideos.push(data)
console.log(selectedCategory);
//to update the category
await updateCategory(categoryId,selectedCategory)
getAllCategory()
  }
 
  useEffect(()=>{
    getCategory()
  },[])
  

  return (
    <div>
        <div className='d-grid ms-3'>
            <button onClick={handleShow} className='btn btn-warning'>Add new category</button>
        </div>
      {allCategory.length>0? 
      allCategory?.map((item)=>(<div className='mt-5 border border-success rounded p-3'>
      <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e, item?.id)}>
        <h6>{item.categoryName}</h6>
        <button className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
        <Row>
          <Col>
          {
            item.allVideos?.length>0?
            item.allVideos.map(card=>(<Videocard displayVideo={card} />))
          :
          <p>nothing</p>}
          </Col>
        </Row>
      </div>
    </div>)) :
        <p>Nothing to display</p> }
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Category name</Form.Label>
        <Form.Control type="email" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default Category