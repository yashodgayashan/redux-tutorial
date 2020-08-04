import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { increment, decrement } from "./actions/counterActions";

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div>
      <Card style={{ margin: 50, width: "30vw" }}>
        <Card.Header>Simple Counter</Card.Header>
        <Card.Body>
          <Row>
            <p>Count : {counter} </p>
          </Row>
          <Form>
            <Form.Group controlId="formBasicValue">
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                placeholder={value}
                onChange={event => setValue(event.target.value)}
              />
            </Form.Group>
          </Form>
          <Button onClick={() => dispatch(increment(value))}>Increment</Button>{" "}
          <Button onClick={() => dispatch(decrement(value))}>Decrement</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
