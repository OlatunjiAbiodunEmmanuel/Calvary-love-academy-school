import React from 'react'
import bkgrd from './mayowa/hero.jpeg'
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
        <div>
            <img src={bkgrd} style={{backgroundRepeat:'no-repeat',height:'80vh',width:'100%',backgroundSize:'contain'}}/>
        </div>
        <section style={{ backgroundColor:'#57548d'}}>
            <div style={h3Style}>WELCOME TO CALVARY LOVE ACADEMY</div>
        </section>

        <div>

            <div className='d-lg-flex align-items-center justify-content-around container-sm'>

                <div class="card border border-0" style={{width:'30rem'}}>
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