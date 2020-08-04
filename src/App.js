import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { update, remove } from "./actions/userActions";
import { increment, decrement } from "./actions/counterActions";

function App() {
  const counter = useSelector(state => state.counter);
  const user = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    console.log(user);
  }, [user]);

  return (
    <div>
      <Card style={{ margin: 50, width: "30vw" }}>
        <Card.Header>User Information</Card.Header>
        <Card.Body>
          <Row>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder={name}
                  onChange={event => setName(event.target.value)}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="age"
                  placeholder={age}
                  onChange={event => setAge(event.target.value)}
                />
              </Form.Group>
              <br />
              <Button
                variant="primary"
                onClick={() => dispatch(update(name, age))}
              >
                Submit
              </Button>{" "}
              <Button variant="danger" onClick={() => dispatch(remove())}>
                Delete
              </Button>
            </Form>
          </Row>
        </Card.Body>
      </Card>
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
