import React from 'react'
import logo from './mayowa/logo.jpeg'
import { Link } from 'react-router-dom'
const Navigation = () => {
    let linkStyle={
        textDecoration:'none',
        color:'black'
      }
      
  return (
    <div>

<div className='d-flex align-items-center justify-content-between bg-body-tertiary p-2 fixed-top'style={{opacity:'0.8'}}>
        <a class="navbar-brand ms-5 d-none d-lg-inline" href="#" style={{fontWeight:'bold',fontSize:'20px'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />
        <span class="waviy">            
            <span>C</span>
            <span>A</span>
            <span>L</span>
            <span>V</span>
            <span>A</span>
            <span>R</span>
            <span className='me-2'>Y</span>
            <span>L</span>
            <span>O</span>
            <span>V</span>
            <span className='me-2'>E</span>
            <span>A</span>
            <span>C</span>
            <span>A</span>    
            <span>D</span>
            <span>E</span>
            <span>M</span>
            <span>Y</span></span></a>

    <section className='d-none d-md-flex align-items-center justify-content-around pe-5'>

    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/'style={linkStyle} >Home</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/About us'style={linkStyle} >About us</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Student'style={linkStyle} >Student</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Contact'style={linkStyle} >Contact</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Adminssion Information'style={linkStyle} >Adminssion Information</Link></button>

    </section>

    <nav class="navbar d-lg-none bg-body-tertiary fixed-top">
            
            <div class="container">
            <a class="navbar-brand" href="#" style={{fontWeight:'bolder'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />CALVARY LOVE ACADEMY</a>
          
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CALVARY LOVE ACADEMY</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/'style={linkStyle} >Home</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/About us'style={linkStyle} >About us</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Student'style={linkStyle} >Student</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Contact'style={linkStyle} >Contact</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Adminssion Information'style={linkStyle} >Adminssion Information</Link></button>
                    </li>
                    <li class="nav-item dropdown">
                      {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a> */}
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </div>
          </nav>



        </div>


    </div>
  )
}

export default Navigation