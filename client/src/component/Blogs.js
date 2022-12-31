import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Blogs() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
    const token = localStorage.getItem("token");

        const formData=new FormData();
        formData.append("image",image)
        formData.append("category",category)
        formData.append("heading",heading)
        formData.append("content",content)
        console.log(image,category,heading,content)
        fetch("http://localhost:4000/blog",{
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,

            },
            body:formData
        }).then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        setShow(false)};
    const handleShow = () => setShow(true);
    const[image,setImage]=useState();
    const[category,setCategory]=useState();
    const[heading,setHeading]=useState();
    const[content,setContent]=useState();
    

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            Blog +

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Blog Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="put url"
                                autoFocus
                                onChange={(e)=>setImage(e.target.files[0])}
                            />
                        </Form.Group>
                     
                        <Form.Label>Select Category</Form.Label>

    <Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>
    

      <option>Category</option>
      <option value="Nature">Nature</option>
      <option value="Politics">Politics</option>
      <option value="Travel">Travel</option>
      <option value="Sports">Sports</option>
      <option value="LifeStyle">LifeStyle</option>
     
      <option value="Tech">Tech</option>
    </Form.Select>
  

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add blog heading"
                                autoFocus
                                onChange={(e)=>setHeading(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control as="textarea" rows={3}  onChange={(e)=>setContent(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Blogs