import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  let footerStyle={
    // height:'40vh',
    backgroundColor:' rgb(90, 72, 72)',
    textAlign:"center"
  }

  return (

    <div className='container-fluid'style={footerStyle}>

        <div className='container-fluid d-md-flex align-items-center justify-content-around m-md-0'style={footerStyle}>
        <div>
        <section class="text-light">QUICK LINK</section>
          <div className=''><Link style={{color:'white',textDecoration:'none'}} to ='/'>Home</Link></div>
          <div><Link style={{color:'white',textDecoration:'none'}} to ='/About Us'>About Us</Link></div>
          <div><Link style={{color:'white',textDecoration:'none'}} to ='/Student'>Student</Link></div>
          <div><Link style={{color:'white',textDecoration:'none'}} to ='/Contact'>Contact</Link></div>
          <div><Link style={{color:'white',textDecoration:'none'}} to ='/Adminssion Information'>Adminssion Information</Link></div>
        </div>



        <div>
            <div className='text-light'>School Hours</div> <br/>
            <div className='text-light'>
                  Our support Hotline are: <br/>
                  12345678900, <br/>
                  12345678900. <br/>
                  Monday-Saturday: 8am to 6pm <br/>
                  Sunday: Closed
            </div>

        </div>

        <div>
          <span className='me-3'>Follow us on social media:</span>
        <a href='twitter.com' className='me-2'>twiter</a>
        <a href='/' className='me-3'>twiter</a>
        <a href='' className='me-2'>twiter</a>
        <a href='' className='me-2'>twiter</a>

    </div>
        </div>

    <div style={{color: 'white', textAlign:'right'}}>That9jaboy3 &copy; 2023</div>
    </div>
  )
}

export default Footer