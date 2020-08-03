import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { increment, decrement } from "./actions/counterActions";

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ margin: 50, width: "30vw" }}>
        <Card.Header>Simple Counter</Card.Header>
        <Card.Body>
          <Row>
            <p>Count : {counter} </p>
          </Row>
          <Button onClick={() => dispatch(increment())}>Increment</Button>{" "}
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
