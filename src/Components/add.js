import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";


const Add = ({Adding}) => {
  const [show, setShow] = useState(false);
  const [newmovie, setNewmovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e)=> {setNewmovie({...newmovie,[e.target.name]:e.target.value})}
  const handleSave = ()=>{
    Adding (newmovie)
    handleClose()
  }
 
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD A MOVIE
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD A MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={handleChange} name="title" type="text" placeholder="Enter title" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={handleChange}  name="description" type="text" placeholder="Enter description" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control onChange={handleChange}  name="posterUrl" type="text" placeholder="Enter posterUrl" />
            </Form.Group>
          </Form>
          <Rating
            name="simple-controlled"
            value= {newmovie.rating} max ={10}
            onChange={(event, newValue) => {
                setNewmovie ({...newmovie,rating:newValue})
            }}
            
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={handleSave}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;