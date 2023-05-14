import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, Routes } from "react-router-dom";


function Home() {
  return (
    <Container>
    <div style = {{fontSize:"2rem", fontWeight:"bold"}} >Login Page</div>
    <div style = {{marginTop:"5rem"}}>
    <Row>
        <Col><Link to="/admin">Admin Login</Link></Col>
        <Col><Link to="/userLogin">User Login</Link></Col>
      </Row>
    </div>
    </Container>
  )
}

export default Home