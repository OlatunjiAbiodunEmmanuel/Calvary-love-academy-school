import React from 'react'
import logo from './mayowa/logo.jpeg'
import bkgrd from './mayowa/hero.jpeg'

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${bkgrd})`,backgroundRepeat:'no-repeat',height:'80vh',width:'100%'}}>
        <div className='d-flex align-items-center justify-content-between bg-body-tertiary p-2 fixed-top'style={{opacity:'0.5'}}>
        <a class="navbar-brand ms-5 d-none d-lg-inline" href="#" style={{fontWeight:'bold',fontSize:'40px'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />CALVARY LOVE ACADEMY</a>

    <section className='d-none d-md-flex align-items-center justify-content-around pe-5'>

    <button type="button" class="btn btn-outline-danger me-3">Home</button>
    <button type="button" class="btn btn-outline-danger me-3">About</button>
    <button type="button" class="btn btn-outline-danger me-3">Student</button>
    <button type="button" class="btn btn-outline-danger me-3">Contact</button>

    </section>

    <nav class="navbar d-lg-none bg-body-tertiary fixed-top">
            
            <div class="container">
            <a class="navbar-brand" href="#" style={{fontWeight:'bolder'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />CALVARY LOVE ACADEMY</a>
          
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Student</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
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

export default Hero