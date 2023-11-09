import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
     <div className="website" style={{width:'400px'}}>
      <h4><i class="fa-solid fa-video fa-fade text-warning me-2"></i> Video player</h4>
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe corrupti modi debitis animi quo, amet illum, aliquid sed id, praesentium cupiditate ducimus ipsa officiis neque laboriosam dolorem veniam deleniti.</h6>

     </div>


     <div className="list d-flex flex-column">
      <h5>Links</h5>
      <Link to={'/'} style={{textDecoration:'none'}}>Landing page</Link>
      <Link to={'/home'} style={{textDecoration:'none'}}>Home</Link>
      <Link to={'/watchhistory'} style={{textDecoration:'none'}}>Watch history</Link>
     </div>
     <div className="guides d-flex flex-column">
      <h5>Guides</h5>
      <Link to={'/'} style={{textDecoration:'none'}}>React</Link>
      <Link to={'/'} style={{textDecoration:'none'}}>React bootstrap</Link>
      <Link to={'/'} style={{textDecoration:'none'}}>Bootswatch</Link>
     </div>
      <div className="contact">
        <h4>Contact us</h4>
        <div className='d-flex'>
          <input type="text" placeholder='Enter your mail'/>
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly'>
<Link  style={{textDecoration:'none'}}>
<i class="fa-brands fa-instagram fa-2x mt-2 "></i></Link>
<Link  style={{textDecoration:'none'}}>
<i class="fa-brands fa-facebook fa-2x mt-2"></i>
</Link>
<Link  style={{textDecoration:'none'}}>
<i class="fa-brands fa-linkedin fa-2x mt-2"></i>
</Link>
<Link  style={{textDecoration:'none'}}>
<i class="fa-brands fa-whatsapp fa-2x mt-2"></i>
</Link>
        </div>
      </div>
      </div>
      <p>Copyright-2023 Media player.Build with react</p>
    </div>
  )
}

export default Footer