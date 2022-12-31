import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate=useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false)
    const handelSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/register/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }).then((res)=>res.json())
        .then(data=>{
            console.log(data)
            if(data!="error"){
                navigate('/home')
                localStorage.setItem("token",data.token);
            }else{
                setShow(true)
            }
        })


    }
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">

                            <div className="px-5 ms-xl-4">
                                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form style={{ width: "23rem" }}>

                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" for="form2Example18">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" for="form2Example28">Password</label>
                                    </div>
                                    {show && <span className="text-danger">Invalid credentials</span>}
                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="button" onClick={handelSubmit}>Login</button>
                                    </div>


                                    <p>Don't have an account? <Link to="/" className="link-info">Register here</Link></p>

                                </form>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
                        </div>
                    </div>
                </div>
            </section></>

    )
}
export default Login;