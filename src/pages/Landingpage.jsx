import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigateByUrl= useNavigate()
  return (
    <div>
       <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Mediaplayer</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto repellendus ea perferendis vitae recusandae consequatur quaerat perspiciatis culpa? Cumque enim aspernatur incidunt omnis tempore aperiam aut ratione iusto ducimus.</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning'>Get started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no img" />
        </Col>
      </Row>
      <div className='container d-flex justify-content-center align-items-center w-100 flex-column'>
        <h1>Features</h1>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Categorized videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        </div>


        <div className='container border border-2 border-warning rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
<Row>
  <Col lg={5}>
    <h1 className='text-warning'>Simple,fast and smooth</h1>
    <h6><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit esse, ab, dolore eius quas repellendus quia amet in culpa iure tenetur porro nesciunt laboriosam repudiandae enim ipsum praesentium commodi voluptatibus!</h6>
    <h6><span className='fw-bolder fs-5'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit esse, ab, dolore eius quas repellendus quia amet in culpa iure tenetur porro nesciunt laboriosam repudiandae enim ipsum praesentium commodi voluptatibus!</h6>
    <h6><span className='fw-bolder fs-5'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit esse, ab, dolore eius quas repellendus quia amet in culpa iure tenetur porro nesciunt laboriosam repudiandae enim ipsum praesentium commodi voluptatibus!</h6>
  </Col>
  <Col></Col>
  <Col lg={6}>
  <iframe width="500" height="315" src="https://www.youtube.com/embed/46l2HlRQHk8?si=7b9uqLyvoW-THF8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Col>
</Row>
        </div>
        </div>
  )
}

export default Landingpage