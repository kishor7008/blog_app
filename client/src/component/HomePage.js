import AllBlog from "./AllBlog";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
    const navigate=useNavigate()
    const logout=()=>{
    localStorage.removeItem("token");
navigate('/login')

    }
    return(
        <>
      
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  
  <div class="container">
  
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style={{marginTop: "-1px"}}
      />
    </a>

 
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>


    <div class="collapse navbar-collapse" id="navbarButtonsExample">
  
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
      </ul>
     

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-primary  me-2" onClick={logout}>
          Logout
        </button>
        <button type="button" class="btn btn-primary me-3">
         Profile
        </button>
       
      </div>
    </div>
 
  </div>
  
</nav>





        <AllBlog/>
        
        <div class="fixed-top-left" style={{float:"right"}}><Blogs/></div>
        </>
    )
}

export default HomePage;