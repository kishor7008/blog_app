import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from "react-router-dom"
const AllBlog=()=>{
  
    const[blog,setBlog]=useState();
const api=()=>{
    fetch("http://localhost:4000/blog/alldata").then(res=>res.json())
    .then(data=>{
        if(data){
        setBlog(data)
        console.log(data)
        }
    })
}
useEffect(()=>{
    api()
},[])
    return(
        <>
         <div class="container">
         <div class="row">
{blog && blog.map((item)=>{
    return(
        <>
       <div class="col-sm m-3">
        {/* <img src={`http://localhost:4000/${item.image}`}/>
        <h1>{item.category}</h1>
        <h1>{item.heading}</h1>
        <h1>{item.content}</h1> */}
        <Card style={{ width: '22rem' }} className="border-0">
      <Card.Img variant="top" src={`http://localhost:4000/${item.image}`} style={{width:"100%",height:"40vh"}}/>
      <Card.Body>
        <button className="btn btn-primary btn-sm text-uppercase">{item.category}</button>
       <h4 className="text-capitalize font-weight-bolder">{item.heading}</h4>
        <Card.Text className="text-monospace">
          {item.content}
        </Card.Text>
      </Card.Body>
    <Card.Body>
        <Link className="text-decoration-none">Read More</Link>
    </Card.Body>
    </Card>
    </div>
        </>
    )
})}
</div>
</div>
        </>
    )
}
export default AllBlog;