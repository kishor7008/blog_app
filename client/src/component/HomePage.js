import AllBlog from "./AllBlog";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import HomeTemp from "./HomeTemp";

const HomePage = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/login')

  }
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-info">

        <div class="container">

          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8="
              height="30"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
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
              <button type="button" class="btn btn-info  me-2" onClick={logout}>
                Logout
              </button>
              <button type="button" class="btn btn-info me-3">
                <Home />
              </button>

            </div>
          </div>

        </div>

      </nav>


<HomeTemp/>
<h1 className="m-3">All Blogs List</h1>

      <AllBlog />

      <div style={{position:"fixed",right:"0",top:"80vh" }}><Blogs /></div>
    </>
  )
}

export default HomePage;