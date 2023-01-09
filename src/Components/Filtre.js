import { Rating } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

const Filtre = ({setRate,setSearch,rate}) => {
  return (
    <div >
      <Form style={{display:'flex'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>
        <Rating name="simple-controlled" value={rate} max={10} onChange={(event,newvalue)=>setRate(newvalue)} />
      </Form>
    </div>
  );
};

export default Filtre;