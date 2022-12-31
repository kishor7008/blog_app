import React, { useEffect, useState } from "react";
import axios from "axios"
const Home = () => {
    const [info, setInfo] = useState("")
    const token = localStorage.getItem("token");
    const [image, setImage] = useState()
    const [alt, setAlt] = useState()
    console.log(image)

    const infoApi = () => {
        fetch("http://localhost:4000/register/data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },

        }).then(res => res.json())
            .then(data => setInfo(data))
    }
    useEffect(() => {
        infoApi()
    }, [])
    return (

        <>

            {info && info.map((item) => {
                return (
                    <>

                        <img src={item.image ? `http://localhost:4000/${item.image}` : "https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} onClick={() => console.log("kjhv")} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                           <h1>{item.name}</h1>
                           <h1>{item.number}</h1>
                           <h1>{item.phone}</h1>
                    </>
                )
            })}


            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={() => {
                const formData = new FormData();
                formData.append('image', image);
                const url = "http://localhost:4000/register/image";
                fetch(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,

                    },
                    body: formData

                }).then(res => res.json())
                    .then(data => console.log(data))
            }}>pic</button>
            {/* <img src="http://localhost:4000/uploads\b1decd68d6bba4be662b49a162e7c297"/> */}
        </>
    )
}

export default Home;