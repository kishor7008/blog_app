import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const navigate=useNavigate()
    const [name,setName]=useState();
    const [number,setNumber]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const[show,setShow]=useState(false)
    const handelSubmit=(e)=>{
e.preventDefault();
console.log(name,number,email,password)
fetch("http://localhost:4000/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    },
    body:JSON.stringify({
        name,number:+number,email,password
    })
}).then(res=>{
    if(res.status==200){
  navigate("/login")
    }else{
setShow(true)
    }
})
    }
    return(
        <>
       <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" onChange={(e)=>setNumber(e.target.value)}/>
                      <label className="form-label" for="form3Example3c">Your Phone No.</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example4c" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                      <label className="form-label" for="form3Example4c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control"onChange={(e)=>setPassword(e.target.value)}/>
                      <label className="form-label" for="form3Example4cd">Your password</label>
                    </div>
                  </div>
{show &&  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <span  className="text-danger">Already user Exist login now</span>
                  </div>}
                  
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handelSubmit}>Register</button>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    {/* <input className="form-check-input me-2" type="" value="" id="form2Example3c" /> */}
                    <label className="form-check-label" for="form2Example3">
                    Already have an account <Link to="/login">Login</Link>
                    </label>
                  </div>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Register;