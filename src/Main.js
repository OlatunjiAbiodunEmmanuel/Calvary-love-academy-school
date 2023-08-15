import React from 'react'
import bkgrd from './mayowa/hero.jpeg'
import ban2 from './mayowa/ban2.jpg'
import ban3 from './mayowa/depositphotos_73708907-stock-photo-interior-of-a-school-class.jpg'
import owner from './mayowa/owner.jpeg'

const Main = () => {
    let h3Style={
        backgroundColor:'#57548d',
        margin:'auto',
        textAlign:"center",
        color:"white",
        fontSize:"50px",
    }
  return (
    <div>
        {/* <div>
            <img src={bkgrd} style={{backgroundRepeat:'no-repeat',height:'80vh',width:'100%',backgroundSize:'contain'}}/>
        </div> */}
        <div id="carouselExampleCaptions" class="carousel slide"data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active"data-bs-interval="3000">
      <img src={bkgrd} style={{backgroundRepeat:'no-repeat',height:'80vh',width:'100%',backgroundSize:'contain'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 style={{fontWeight:'bold'}}>Don't give up</h5>
        <p style={{fontWeight:'bold',fontSize:'30px'}}>There are no shortcuts to any place worth going.</p>
      </div>
    </div>
    <div class="carousel-item "data-bs-interval="3000">
      <img src={ban2} style={{backgroundRepeat:'no-repeat',height:'80vh',width:'100%',backgroundSize:'contain'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 style={{fontWeight:'bold'}}>Don't give up</h5>
        <p style={{fontWeight:'bold',fontSize:'30px'}}>Be so good they can't ignore you</p>
      </div>
    </div>
    <div class="carousel-item"data-bs-interval="3000">
      <img src={ban3} style={{backgroundRepeat:'no-repeat',height:'80vh',width:'100%',backgroundSize:'contain'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 style={{fontWeight:'bold'}}>Don't give up</h5>
        <p style={{fontWeight:'bold',fontSize:'30px'}}>Genius is 10% inspiration, 90% perspiration.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <section style={{ backgroundColor:'#57548d'}}>
            <div style={h3Style}>WELCOME TO CALVARY LOVE ACADEMY</div>
        </section>

        <div>

            <div className='d-lg-flex align-items-center justify-content-around container-sm'>

                <div class="card border border-0 m-auto m-lg-0" style={{width:'27rem'}}>
                <div class="card-body">
                <h5 class="card-title">Built With Greatness Inside</h5>
                <p class="card-text">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.  Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>

                <p class="card-text">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.  Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        
                <div class="card text-bg-dark border border-0" style={{height:'70vh'}}>
                <img src={owner} class="card-img" alt="..."style={{height:'70vh'}}/>
                </div>

            </div>

            <div className='container-sm mt-5'>
            <h2 style={{textAlign:"center"}}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </h2>
            <h4 style={{textAlign:"center"}}>Owner's name</h4>
            </div>


        </div>




    </div>
  )
}

export default Main